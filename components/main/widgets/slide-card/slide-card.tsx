"use client";

import Card from "@/components/shared/card";
import DescriptionBlock from "@/components/widgets/description-block";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import SlideCardSkeleton from "./slide-card-skeleton";
import { useState } from "react";

interface IProps {
	index: number;
	imageSrc: string;
	imageAlt: string;
	className?: string;
	children?: React.ReactNode;
	premium?: boolean;
	isMobile?: boolean;
	data: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	};
}

export default function SlideCard({
	index,
	className,
	imageSrc,
	imageAlt,
	premium,
	isMobile,
	children,
	data,
}: IProps) {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const animateStyle = "transition transform-gpu duration-[0.7s]";

	const animationStyle = isMobile
		? ""
		: `${animateStyle} scale-101 group-hover:scale-103 backface-hidden`;

	const mobileStyle = "max-w-[320px]";
	const desktopStyle = "w-full";

	const descriptionStyle = isMobile
		? `${animateStyle} translate-y-[305px] group-hover:translate-y-0`
		: "";

	const stepDuration = 0.7;
	const delay = Number(index) * stepDuration;
	const delayNext = delay + 0.4;

	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			x: isMobile ? -50 : -50,
			scale: 0.97,
		},
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				x: { delay, type: "spring", stiffness: 100, damping: 20 },
				scale: {
					delay: delayNext,
					type: "spring",
					stiffness: 80,
					damping: 15,
				},
				opacity: { delay, duration: 0.3 },
			},
		},
	};

	return (
		<motion.div
			variants={cardVariants}
			style={{ position: "relative", zIndex: `${1200 - index}` }}
		>
			<Card
				className={`group advanced-card p-0! relative min-h-[500px] overflow-hidden items-center justify-center ${mobileStyle} ${desktopStyle} ${className}`}
			>
				<AnimatePresence>
					{!isLoaded && (
						<motion.div
							initial={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="absolute z-[1200] w-[500px] h-[600px]"
						>
							<SlideCardSkeleton />
						</motion.div>
					)}
				</AnimatePresence>
				<Image
					className={`absolute rounded-[20px] opacity-[0.01] transition object-cover brightness-90 ${animationStyle}`}
					fill
					src={imageSrc}
					alt={imageAlt}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					quality={isMobile ? "75" : "90"}
					onLoad={(img) => {
						img.currentTarget.classList.replace(
							"opacity-[0.01]",
							"opacity-100"
						);
						setIsLoaded(true);
					}}
				/>
				<div
					className={`absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px] justify-end`}
				>
					<div className="flex flex-col items-end gap-3 w-full">
						<DescriptionBlock className={`leading-[19px] ${descriptionStyle}`}>
							<span
								className={`text-base font-bold leading-[19px] ${
									premium && "text-accent"
								}`}
							>
								{data.title}
							</span>
							{typeof data.description === "object" && (
								<div className="flex flex-col w-full gap-[6px]">
									{data.description.map((p) => (
										<p key={p.text}>{p.text}</p>
									))}
								</div>
							)}
							{typeof data.description === "string" && (
								<p>{data.description}</p>
							)}
						</DescriptionBlock>
					</div>
				</div>
				{children}
			</Card>
		</motion.div>
	);
}

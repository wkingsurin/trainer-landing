"use client";

import Image from "next/image";
import Card from "@/components/shared/card";
import DescriptionBlock from "@/components/widgets/description-block";
import Tag from "@/components/shared/tag";
import CTAButton from "@/components/shared/cta-button";
import { useState } from "react";
import OfferCardSkeleton from "./offer-card-seketon";

interface IProps {
	imageSrc: string;
	imageAlt: string;
	className?: string;
	children?: React.ReactNode;
	premium?: boolean;
	isMobile: boolean;
	data: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	};
}

export default function OfferCard({
	className,
	imageSrc,
	imageAlt,
	premium,
	isMobile,
	children,
	data,
}: IProps) {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const style = isMobile ? "flex-1 aspect-[3/4]" : "aspect-[3/4]";

	const scaleCard = isMobile ? "" : "hover:scale-103";

	const animateStyle = "transition transform-gpu duration-[0.5s]";
	const animationStyle = isMobile
		? ""
		: `${animateStyle} scale-101 group-hover:scale-103 backface-hidden`;

	return (
		<Card
			className={`group advanced-card p-0! relative min-h-[500px] overflow-hidden ${animateStyle} ${scaleCard} ${style} ${className}`}
		>
			{!isLoaded && <OfferCardSkeleton />}

			<Image
				className={`absolute rounded-[20px] object-cover opacity-[0.01] brightness-90 ${animationStyle}`}
				fill
				src={imageSrc}
				alt={imageAlt}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				onLoad={(img) => {
					img.currentTarget.classList.replace('opacity-[0.01]', 'opacity-100')
					setIsLoaded(true)
				}}
			/>
			<div
				className={`absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px]`}
			>
				<Tag className="leading-[17px]" premium={premium}>
					{data.tag}
				</Tag>

				<div className="flex flex-col items-end gap-3 w-full">
					<Tag
						className="flex gap-[5px]! mb-[-6px] leading-[17px]"
						premium={premium}
					>
						{data.price}
					</Tag>

					<DescriptionBlock className="leading-[19px]">
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
						{typeof data.description === "string" && <p>{data.description}</p>}
					</DescriptionBlock>

					<CTAButton type="normal" className="w-full">
						Оформить
					</CTAButton>
				</div>
			</div>
			{children}
		</Card>
	);
}

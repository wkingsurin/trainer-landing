import { motion, Variants } from "framer-motion";

import Image from "next/image";
import BaseCard from "./base-card";
import ContentTitle from "../shared/content-title";

interface IProps {
	card: {
		id: string;
		title?: string;
		description: string | { text: string }[];
	};
	showId?: boolean;
	square?: boolean;
	isMobile?: boolean;
}

export default function SolutionCard({ card, showId, isMobile }: IProps) {
	const cardStyle = isMobile
		? "min-h-[70px]"
		: "min-h-[192px] font-bold py-[30px]";
	const numberStyle = isMobile
		? "text-[36px] text-accent"
		: "text-[36px] text-accent font-semibold";
	const imageStyle = isMobile
		? "object-cover object-[center_-30px]"
		: "object-cover object-top";

	const hasBackground = card.id === "1" || card.id === "4";

	const stepDuration = 0.4;
	const delay = Number(card.id) * stepDuration;
	const delayNext = delay + 0.4;

	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			y: isMobile ? 0 : -20,
			x: isMobile ? -20 : 0,
			scale: 0.85,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			transition: {
				x: { delay, type: "spring", stiffness: 100, damping: 20 },
				y: { delay: delayNext, type: "spring", stiffness: 80, damping: 15 },
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
			style={{ position: "relative", zIndex: 130 + Number(card.id) }}
		>
			<BaseCard
				key={card.id}
				className={`card relative group overflow-hidden flex-col items-start gap-[15px] ${cardStyle}`}
			>
				<div className="flex gap-[30px] items-center z-1000">
					{showId && (
						<p
							className={`min-w-[25px] leading-[44px] font-exo_2 ${numberStyle}`}
						>
							{card.id}
						</p>
					)}
					<ContentTitle className="text-[18px]">{card.title}</ContentTitle>
				</div>

				<ul className="relative z-1000 ml-[55px]">
					{typeof card.description === "object" &&
						card.description.map((data) => (
							<li key={data.text} className="font-normal">
								{data.text}
							</li>
						))}
				</ul>

				{hasBackground && (
					<Image
						src={`/-${card.id}.jpg`}
						alt="Girl"
						fill
						className={`absolute z-999 ${imageStyle} rounded-[16px] opacity-20 scale-105 transition duration-[0.7s] grayscale group-hover:opacity-20 group-hover:scale-100`}
					/>
				)}
			</BaseCard>
		</motion.div>
	);
}

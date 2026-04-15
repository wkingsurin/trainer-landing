import Image from "next/image";
import BaseCard from "./base-card";
import { motion, Variants } from "framer-motion";

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

export default function ProblemCard({
	card,
	showId,
	square,
	isMobile,
}: IProps) {
	const cardStyle = isMobile ? "min-h-[70px]" : "min-h-[150px] font-bold";
	const numberStyle = isMobile
		? "text-[36px] text-accent"
		: "text-[36px] text-accent font-semibold";
	const imageStyle = isMobile
		? "object-cover object-[center_-30px]"
		: "object-cover object-top";

	const stepDuration = 0.6;
	const delay = Number(card.id) * stepDuration;
	const delayNext = delay + 0.4;

	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			y: isMobile ? 0 : -30,
			x: isMobile ? -50 : -50,
			scale: 1.05,
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

	const idIsOdd = (id: string) => Number(id) % 2 !== 0;

	return (
		<motion.div variants={cardVariants}>
			<BaseCard
				key={card.id}
				className={`card relative group overflow-hidden gap-[30px] tracking-[2%] font-exo_2 ${
					(square && "aspect-square") || "flex-1"
				} ${cardStyle}`}
			>
				{showId && <p className={`${numberStyle} z-1001`}>{card.id}</p>}
				<p className={`z-1001 text-[18px] ${isMobile && "text-[14px]"}`}>
					{typeof card.description === "string" && card.description}
				</p>

				<div className="absolute overlay left-0 top-0 z-1000 w-full h-full"></div>
				{idIsOdd(card.id) && (
					<Image
						src={`/pain-${card.id}.jpg`}
						alt="Girl"
						fill
						className={`absolute z-999 ${imageStyle} rounded-[16px] opacity-20 scale-105 transition duration-[0.7s] grayscale group-hover:opacity-20 group-hover:scale-100`}
					/>
				)}
			</BaseCard>
		</motion.div>
	);
}

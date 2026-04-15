"use client";
import { motion } from "framer-motion";

import ProblemCard from "./problem-card";
import AdvantageCard from "./advantage-card";
import SolutionCard from "./solution-card";
import { useUIStore } from "@/lib/store/ui.store";

interface IProps {
	cards: {
		id: string;
		title?: string;
		description: string | { text: string }[];
		worth?: string | React.ReactNode;
	}[];
	showId?: boolean;
	showWorth?: boolean;
	isMobile?: boolean;
	className?: string;
	type: "advantage" | "problems" | "solution";
}

export default function CardsBlock({
	cards,
	isMobile,
	className,
	type,
}: IProps) {
	const isLoading = useUIStore((s) => s.isLoading);

	const blockStyle = isMobile
		? "flex flex-col gap-[30px]"
		: type === "solution"
		? "grid grid-cols-2 gap-5"
		: "flex flex-row gap-5 z-1200";

	const variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.3,
			},
		},
	};

	const getCards = () => {
		switch (type) {
			case "advantage": {
				return cards.map((card) => {
					return <AdvantageCard key={card.id} card={card} showWorth isMobile={isMobile} />;
				});
			}
			case "problems": {
				return cards.map((card) => {
					return <ProblemCard key={card.id} card={card} showId />;
				});
			}
			case "solution": {
				return cards.map((card) => {
					return <SolutionCard key={card.id} card={card} showId />;
				});
			}
		}
	};

	return (
		<motion.div
			initial="hidden"
			variants={variants}
			animate={!isLoading ? "visible" : "hidden"}
			viewport={{ once: true, amount: 0.2 }}
			className={`w-full ${blockStyle} ${className}`}
		>
			{getCards()}
		</motion.div>
	);
}

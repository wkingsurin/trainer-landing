"use client";
import { motion } from "framer-motion";

import ProblemCard from "./problem-card";
import AdvantageCard from "./advantage-card";
import SolutionCard from "./solution-card";
import { useUIStore } from "@/lib/store/ui.store";
import CardsBlockMotion from "./cards-block-motion";

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
	const getCards = () => {
		switch (type) {
			case "advantage": {
				return (
					<CardsBlockMotion
						className={className}
						type={type}
						isMobile={isMobile}
					>
						{cards.map((card) => {
							return (
								<AdvantageCard
									key={card.id}
									card={card}
									showWorth
									isMobile={isMobile}
								/>
							);
						})}
					</CardsBlockMotion>
				);
			}
			case "problems": {
				return (
					<CardsBlockMotion
						className={className}
						type={type}
						isMobile={isMobile}
					>
						{cards.map((card) => {
							return (
								<ProblemCard
									key={card.id}
									card={card}
									showId
									isMobile={isMobile}
								/>
							);
						})}
					</CardsBlockMotion>
				);
			}
			case "solution": {
				return (
					<CardsBlockMotion
						className={className}
						type={type}
						isMobile={isMobile}
					>
						{cards.map((card) => {
							return (
								<SolutionCard
									key={card.id}
									card={card}
									showId
									isMobile={isMobile}
								/>
							);
						})}
					</CardsBlockMotion>
				);
			}
		}
	};

	return (
		// <CardsBlockMotion type="">{getCards()}</CardsBlockMotion>
		// <motion.div
		// 	initial="hidden"
		// 	variants={variants}
		// 	animate={!isLoading ? "visible" : "hidden"}
		// 	viewport={{ once: true, amount: 0.2 }}
		// 	className={`w-full ${blockStyle} ${className}`}
		// >
		// 	{getCards()}
		// </motion.div>
		<>{getCards()}</>
	);
}

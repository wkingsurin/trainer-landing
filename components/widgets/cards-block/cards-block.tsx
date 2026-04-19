"use client";

import ProblemCard from "../problem-card/problem-card";
import AdvantageCard from "../advantage-card";
import SolutionCard from "../solution-card";
import CardsBlockMotion from "./cards-block-motion";
import { useVisit } from "../../contexts/visit-context";

interface IProps {
	cards: {
		id: string;
		title?: string;
		description: string | { text: string }[];
		worth?: string | React.ReactNode;
	}[];
	showId?: boolean;
	showWorth?: boolean;
	isMobile: boolean;
	className?: string;
	type: "advantage" | "problems" | "solution";
}

export default function CardsBlock({
	cards,
	isMobile,
	className,
	type,
}: IProps) {
	const { visit } = useVisit();

	const getCards = () => {
		switch (type) {
			case "advantage": {
				return (
					<CardsBlockMotion
						className={className}
						type={type}
						isMobile={isMobile}
						visited={visit}
						isHero
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
						visited={visit}
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
						visited={visit}
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

	return <>{getCards()}</>;
}

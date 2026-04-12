import ProblemCard from "./problem-card";
import AdvantageCard from "./advantage-card";
import SolutionCard from "./solution-card";

interface IProps {
	cards: {
		id: string;
		title?: string;
		description: string | { text: string }[];
		worth?: string | React.ReactNode;
	}[];
	showId?: boolean;
	showWorth?: boolean;
	square?: boolean;
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
	const blockStyle = isMobile
		? "flex flex-col gap-[30px]"
		: type === "solution"
		? "grid grid-cols-2 gap-5"
		: "flex flex-row gap-5 z-1200";

	const getCards = () => {
		switch (type) {
			case "advantage": {
				return cards.map((card) => {
					return <AdvantageCard key={card.id} card={card} showWorth />;
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
		<div className={`w-full ${blockStyle} ${className}`}>{getCards()}</div>
	);
}

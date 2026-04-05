import Card from "../shared/card";

interface IProps {
	cards: { id: string; text: string; worth?: string }[];
	showId?: boolean;
	showWorth?: boolean;
	className?: string;
}

export default function CardsBlock({
	cards,
	showId,
	showWorth,
	className,
}: IProps) {
	const getCards = () =>
		cards.map((card) => (
			<Card
				key={card.id}
				className={`card ${
					showWorth &&
					`flex flex-col items-center justify-center gap-[15px] aspect-square py-[15px]! px-[20px]! text-center`
				}`}
			>
				{showId && <p>{card.id}.</p>}
				{showWorth && (
					<p
						className={`font-bold ${
							card.worth?.toLowerCase().includes("поддержка")
								? "text-[20px]"
								: "text-[24px]"
						}`}
					>
						{card.worth}
					</p>
				)}
				<p className={`${showWorth && "text-[14px]"}`}>{card.text}</p>
			</Card>
		));

	return (
		<div className={`flex flex-col gap-[10px] ${className}`}>{getCards()}</div>
	);
}

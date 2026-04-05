import BaseCard from "./base-card";

interface IProps {
	cards: { id: string; text: string; worth?: string | React.ReactNode }[];
	showId?: boolean;
	showWorth?: boolean;
	square?: boolean;
	className?: string;
}

export default function CardsBlock({
	cards,
	showId,
	showWorth,
	square,
	className,
}: IProps) {
	const getCards = () =>
		cards.map((card) => {
			const worth =
				typeof card.worth === "string" ? (
					<p
						className={`font-bold ${
							card.worth?.toLowerCase().includes("поддержка")
								? "text-[20px]"
								: "text-[24px]"
						}`}
					>
						{card.worth}
					</p>
				) : (
					card.worth
				);

			return (
				<BaseCard
					key={card.id}
					className={`card ${
						showWorth &&
						`flex flex-col items-center justify-center gap-[15px] min-h-[110px] py-[15px]! px-[20px]! text-center`
					} ${square && "aspect-square"}`}
				>
					{showId && <p>{card.id}.</p>}
					{showWorth && worth}
					<p className={`${showWorth && "text-[14px]"}`}>{card.text}</p>
				</BaseCard>
			);
		});

	return (
		<div className={`flex flex-col gap-[10px] ${className}`}>{getCards()}</div>
	);
}

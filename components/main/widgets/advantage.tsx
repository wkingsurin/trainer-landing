import CardsBlock from "../../widgets/cards-block";

interface IProps {
	className?: string;
}

export default function Advantage({ className }: IProps) {
	const cards = [
		{ id: "1", worth: "–8 кг", description: "в среднем за 2 месяца" },
		{ id: "2", worth: "90%", description: "клиентов доходят до цели" },
		{ id: "3", worth: "100+", description: "трансформаций" },
		{ id: "4", worth: "Поддержка", description: "каждый день, а не раз в неделю" },
	];

	const cardsStyle = "flex gap-5 flex-row z-1200 w-full";

	return (
		<div className={`absolute flex w-full bottom-[30px] px-3 ${className}`}>
			<CardsBlock className={cardsStyle} cards={cards} showWorth type="advantage" />
		</div>
	);
}

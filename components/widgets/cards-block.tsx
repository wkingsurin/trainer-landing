import Card from "../shared/card";

interface IProps {
  cards: { id: string; text: string }[];
  showId?: boolean;
}

export default function CardsBlock({ cards, showId }: IProps) {
	const getCards = () =>
		cards.map((card) => (
			<Card key={card.id}>
				{showId && <p>{card.id}.</p>}
				<p>{card.text}</p>
			</Card>
		));

	return <div className="flex flex-col gap-[10px]">{getCards()}</div>;
}

import Section from "./shared/section";
import CardsBlock from "./widgets/cards-block";
import TitleBlock from "./widgets/title-block";

export default function Advantage() {
	const cards = [
		{ id: "1", worth: "–8 кг", text: "в среднем за 2 месяца" },
		{ id: "2", worth: "90%", text: "клиентов доходят до цели" },
		{ id: "3", worth: "100+", text: "трансформаций" },
		{ id: "4", worth: "Поддержка", text: "каждый день, а не раз в неделю" },
	];

	return (
		<Section id="advantage" className="flex flex-wrap" px>
			<TitleBlock
				subtitle="преимущества"
				title="Почему со мной доходят до результата, а не сливаются"
			/>
			<CardsBlock className="grid grid-cols-2 grid-rows-2" cards={cards} showWorth square />
		</Section>
	);
}

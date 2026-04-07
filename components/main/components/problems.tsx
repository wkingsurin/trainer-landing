import Section from "../../shared/section";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

export default function Problem() {
	const cards = [
		{ id: "1", text: "Тренируешься, но вес не уходит" },
		{ id: "2", text: "Не понимаешь, что и как делать в зале" },
		{ id: "3", text: "Срываешься с диеты через 3 дня" },
		{ id: "4", text: "Нет мотивации и контроля" },
		{ id: "5", text: "Стыдно начинать с нуля" },
	];

	return (
		<Section id="problems" px>
			<TitleBlock
				subtitle="проблема"
				title="Почему у тебя до сих пор нет результата?"
			/>
			<CardsBlock cards={cards} showId />
		</Section>
	);
}

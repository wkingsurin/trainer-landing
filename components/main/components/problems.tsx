import Section from "../../shared/section";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Problem({ isMobile }: IProps) {
	const cards = [
		{ id: "1", text: "Тренируешься, но вес не уходит" },
		{ id: "2", text: "Не понимаешь, что и как делать в зале" },
		{ id: "3", text: "Срываешься с диеты через 3 дня" },
		{ id: "4", text: "Нет мотивации и контроля" },
	];

	const sectionStyle = isMobile
		? ""
		: "container mx-auto max-w-[1280px]! gap-[50px]";

	return (
		<Section
			id="problems"
			isMobile={isMobile}
			className={sectionStyle}
			container
			centered
			px
		>
			<TitleBlock
				subtitle="проблема"
				title="Почему у тебя до сих пор нет результата?"
				isMobile={isMobile}
			/>
			<CardsBlock cards={cards} showId type="problems" isMobile={isMobile} />
		</Section>
	);
}

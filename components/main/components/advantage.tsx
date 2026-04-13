import Section from "../../shared/section";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Advantage({ isMobile }: IProps) {
	const cards = [
		{ id: "1", worth: "–8 кг", description: "в среднем за 2 месяца" },
		{ id: "2", worth: "90%", description: "клиентов доходят до цели" },
		{ id: "3", worth: "100+", description: "трансформаций" },
		{
			id: "4",
			worth: "Поддержка",
			description: "каждый день, а не раз в неделю",
		},
	];

	return (
		<Section id="advantage" className="flex flex-col" px isMobile={isMobile} container>
			<TitleBlock
				subtitle="преимущества"
				title="Почему со мной доходят до результата, а не сливаются"
				isMobile={isMobile}
			/>
			<CardsBlock
				cards={cards}
				showWorth
				isMobile={isMobile}
				type="advantage"
			/>
		</Section>
	);
}

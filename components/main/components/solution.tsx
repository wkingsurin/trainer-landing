import CTAButton from "../../shared/cta-button";
import Section from "../../shared/section";
import SectionContent from "../../shared/section-content";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Solution({ isMobile }: IProps) {
	const cards = [
		{ id: "1", text: "Анализ твоего тела и целей" },
		{ id: "2", text: "Составление персональной программы" },
		{ id: "3", text: "Контроль и корректировка каждую неделю" },
		{ id: "4", text: "Поддержка и мотивация 24/7" },
	];

	return (
		<Section id="solution" px isMobile={isMobile}>
			<TitleBlock
				subtitle="решение"
				title="Вот как мы доведём тебя до результата"
			/>
			<SectionContent gap="10">
				<CardsBlock cards={cards} showId type="solution" />
				<CTAButton>Начать</CTAButton>
			</SectionContent>
		</Section>
	);
}

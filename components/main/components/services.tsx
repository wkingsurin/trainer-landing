import CTAButton from "../../shared/cta-button";
import Section from "../../shared/section";
import SectionContent from "../../shared/section-content";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Services({ isMobile }: IProps) {
	const cards = [
		{ id: "1", text: "Анализ твоего тела и целей" },
		{ id: "2", text: "Составление персональной программы" },
		{ id: "3", text: "Контроль и корректировка каждую неделю" },
		{ id: "4", text: "Поддержка и мотивация 24/7" },
	];

	return (
		<Section id="services" px isMobile={isMobile}>
			<TitleBlock subtitle="услуги" title="Услуги тренера" />
			<SectionContent gap="10">
				<CardsBlock cards={cards} type="services" />
				<CTAButton>Задать вопрос</CTAButton>
			</SectionContent>
		</Section>
	);
}

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
		{
			id: "1",
			title: "Анализ твоего тела и целей",
			description: [
				{ text: "Проводим персональную тренировку" },
				{ text: "Проводим быстрый курс" },
				{ text: "Оцениваем твои возможности" },
			],
		},
		{
			id: "2",
			title: "Составление персональной программы",
			description: [
				{ text: "Проводим персональную тренировку" },
				{ text: "Проводим быстрый курс" },
				{ text: "Оцениваем твои возможности" },
			],
		},
		{
			id: "3",
			title: "Контроль и корректировка каждую неделю",
			description: [
				{ text: "Проводим персональную тренировку" },
				{ text: "Проводим быстрый курс" },
				{ text: "Оцениваем твои возможности" },
			],
		},
		{
			id: "4",
			title: "Контроль и корректировка каждую неделю",
			description: [
				{ text: "Проводим персональную тренировку" },
				{ text: "Проводим быстрый курс" },
				{ text: "Оцениваем твои возможности" },
			],
		},
	];

	return (
		<Section id="solution" px isMobile={isMobile} container centered>
			<TitleBlock
				subtitle="решение"
				title="Вот как мы доведём тебя до результата"
				isMobile={isMobile}
			/>
			<SectionContent className="items-center w-full gap-[50px]">
				<CardsBlock cards={cards} showId type="solution" isMobile={isMobile} />
				<CTAButton isMobile={isMobile} type="medium">
					Начать
				</CTAButton>
			</SectionContent>
		</Section>
	);
}

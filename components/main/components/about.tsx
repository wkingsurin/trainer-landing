import { BadgeCheck } from "lucide-react";
import Section from "../../shared/section";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";
import CTAButton from "../../shared/cta-button";
import SectionContent from "../../shared/section-content";
import AdvancedCard from "../../widgets/advanced-card";

interface IProps {
	isMobile: boolean;
}

export default function About({ isMobile }: IProps) {
	const cards = [
		{
			id: "1",
			worth: <BadgeCheck className="size-6" />,
			description: "cертифицированный тренер",
		},
		{ id: "2", worth: "100+", description: "клиентов получили результат" },
		{ id: "3", worth: "5 лет", description: "практики" },
		{ id: "4", worth: "90%", description: "успешных кейсов" },
	];
	const data = {
		title: "Алина Самойлова",
		description: "“Я не просто даю упражнения — я веду тебя до результата”",
	};

	return (
		<Section id="about" px isMobile={isMobile} container>
			<TitleBlock
				subtitle="о тренере"
				title="Твой результат — моя личная ответственность"
			/>
			<AdvancedCard
				imageSrc="/1.jpg"
				imageAlt="Алина Самойлова"
				data={data}
				type="about"
			/>
			<SectionContent gap="10">
				<CardsBlock cards={cards} showWorth type="about" />
				<CTAButton type="normal">Задать вопрос</CTAButton>
			</SectionContent>
		</Section>
	);
}

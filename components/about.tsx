import { BadgeCheck } from "lucide-react";
import Section from "./shared/section";
import CardsBlock from "./widgets/cards-block";
import TitleBlock from "./widgets/title-block";
import CTAButton from "./shared/cta-button";
import SectionContent from "./shared/section-content";
import AdvancedCard from "./widgets/advanced-card";
import DescriptionBlock from "./widgets/description-block";

export default function About() {
	const cards = [
		{
			id: "1",
			worth: <BadgeCheck className="size-6" />,
			text: "cертифицированный тренер",
		},
		{ id: "2", worth: "100+", text: "клиентов получили результат" },
		{ id: "3", worth: "5 лет", text: "практики" },
		{ id: "4", worth: "90%", text: "успешных кейсов" },
	];

	return (
		<Section px>
			<TitleBlock
				subtitle="о тренере"
				title="Твой результат — моя личная ответственность"
			/>
			<AdvancedCard imageSrc="/1.jpg" imageAlt="Алина Самойлова" />
			<SectionContent gap="10">
				<CardsBlock cards={cards} showWorth />
				<CTAButton>Задать вопрос</CTAButton>
			</SectionContent>
		</Section>
	);
}

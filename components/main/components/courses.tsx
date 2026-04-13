import OfferCard from "@/components/main/widgets/offer-card";
import Section from "../../shared/section";
import TitleBlock from "../../widgets/title-block";
import SectionContent from "@/components/shared/section-content";

interface IProps {
	isMobile: boolean;
}

export default function Courses({ isMobile }: IProps) {
	const cards = [
		{
			title: "Что получаешь:",
			tag: `“Быстрый старт”`,
			price: "4500 руб/мес",
			description: [
				{ text: "Разовая консультация" },
				{ text: "Программа тренировки" },
				{ text: "Техника выполнения упражнений" },
				{ text: "План питания" },
			],
		},
		{
			title: "Что получаешь:",
			tag: `“Продвинутый уровень”`,
			price: "9500 руб/мес",
			description: [
				{ text: "Программа тренировки" },
				{ text: "Техника выполнения упражнений" },
				{ text: "План питания" },
				{ text: "Закрытый чат со мной" },
				{ text: "Курс по биохимии" },
			],
		},
	];

	const style = isMobile ? "gap-[30px]" : "flex-row justify-center gap-5";

	return (
		<Section id="courses" px isMobile={isMobile} container centered>
			<TitleBlock
				subtitle="курсы"
				title="Готовые программы"
				isMobile={isMobile}
			/>
			<SectionContent className={`w-full ${style}`}>
				{cards.map((card) => {
					const imageId = card.price.includes("9") ? "3" : "1";

					return (
						<OfferCard
							key={card.tag}
							imageSrc={`/${imageId}.jpg`}
							imageAlt="Алина Самойлова"
							isMobile={isMobile}
							data={card}
							premium={imageId === "3"}
						/>
					);
				})}
			</SectionContent>
		</Section>
	);
}

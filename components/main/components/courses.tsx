import Section from "../../shared/section";
import AdvancedCard from "../../widgets/advanced-card";
import TitleBlock from "../../widgets/title-block";

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

	return (
		<Section id="courses" px isMobile={isMobile} container>
			<TitleBlock subtitle="курсы" title="Готовые программы" />
			{cards.map((card) => {
				const imageId = card.price.includes("9") ? "4" : "1";

				return (
					<AdvancedCard
						key={card.tag}
						imageSrc={`/${imageId}.jpg`}
						imageAlt="Алина Самойлова"
						data={card}
						type="offer"
						isPremium={imageId === "4"}
					/>
				);
			})}
		</Section>
	);
}

import Section from "../../shared/section";
import AdvancedCard from "../../widgets/advanced-card";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Offers({ isMobile }: IProps) {
	const card1 = {
		title: "Что получаешь:",
		tag: `"Стандарт"`,
		price: "1500 руб/мес",
		description: [
			{ text: "Консультация раз в месяц (1ч)" },
			{ text: "Программа тренировки" },
			{ text: "План питания" },
		],
	};
	const card2 = {
		title: "Что получаешь:",
		tag: `"Премиум"`,
		price: "3000 руб/мес",
		description: [
			{ text: "Консультация раз в месяц (1ч)" },
			{ text: "Программа тренировки" },
			{ text: "План питания" },
			{ text: "Контроль прогресса" },
			{ text: "Корректировка программы" },
		],
	};
	const card3 = {
		title: "Что получаешь:",
		tag: `"Вип"`,
		price: "5000 руб/мес",
		description: [
			{ text: "Консультация раз в месяц (1ч)" },
			{ text: "Программа тренировки" },
			{ text: "План питания" },
			{ text: "Контроль прогресса" },
			{ text: "Корректировка программы" },
			{ text: "Онлайн ведение" },
		],
	};

	return (
		<Section id="offers" px isMobile={isMobile}>
			<TitleBlock
				subtitle="предложение"
				title="Начни с удобного формата — результат будет в любом"
			/>
			<AdvancedCard
				imageSrc="/5.jpg"
				imageAlt="Алина Самойлова"
				data={card1}
				type="offer"
			/>
			<AdvancedCard
				imageSrc="/3.jpg"
				imageAlt="Алина Самойлова"
				data={card2}
				type="offer"
				isPremium
			/>
			<AdvancedCard
				imageSrc="/last.jpg"
				imageAlt="Алина Самойлова"
				data={card3}
				type="offer"
			/>
		</Section>
	);
}

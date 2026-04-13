import OfferCard from "@/components/main/widgets/offer-card";
import Section from "../../shared/section";
import TitleBlock from "../../widgets/title-block";
import SectionContent from "@/components/shared/section-content";

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

	const style = isMobile ? "gap-[30px]" : "flex-row justify-center gap-5";

	return (
		<Section id="offers" px isMobile={isMobile} container centered>
			<TitleBlock
				subtitle="предложение"
				title="Начни с удобного формата — результат будет в любом"
				isMobile={isMobile}
				className="max-w-[450px]"
			/>
			<SectionContent className={`w-full ${style}`}>
				<OfferCard
					imageSrc="/5.jpg"
					imageAlt="Алина Самойлова"
					data={card1}
					isMobile={isMobile}
				/>
				<OfferCard
					imageSrc="/1.jpg"
					imageAlt="Алина Самойлова"
					data={card2}
					premium
					isMobile={isMobile}
				/>
				<OfferCard
					imageSrc="/2.jpg"
					imageAlt="Алина Самойлова"
					data={card3}
					isMobile={isMobile}
				/>
			</SectionContent>
		</Section>
	);
}

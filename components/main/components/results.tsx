import Section from "../../shared/section";
import Carousel from "../widgets/carousel/carousel";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Results({ isMobile }: IProps) {
	const cards = [
		{
			id: "1",
			title: "Карина",
			description: "«Теперь я не боюсь ходить в зал в открытом топе»",
		},
		{
			id: "2",
			title: "Света",
			description: "«Наконец-то я знаю, что делать»",
		},
		{
			id: "3",
			title: "Оксана",
			description:
				"«Спасибо Алине за наставничество, благодаря ее навыку фитнес-тренера, я пришла к фигуре, которую хотела очень давно»",
		},
		{
			id: "4",
			title: "Екатерина",
			description:
				"«Рекомендую тренера, однозначно. Пробовала тренироваться у других - результаты были минимальные, начала тренироваться с Алиной и результат на лицо»",
		},
		{
			id: "5",
			title: "Екатерина",
			description:
				"«Рекомендую тренера, однозначно. Пробовала тренироваться у других - результаты были минимальные, начала тренироваться с Алиной и результат на лицо»",
		},
		{
			id: "6",
			title: "Екатерина",
			description:
				"«Рекомендую тренера, однозначно. Пробовала тренироваться у других - результаты были минимальные, начала тренироваться с Алиной и результат на лицо»",
		},
	];

	return (
		<Section
			id="results"
			px
			isMobile={isMobile}
			container
			centered
			className="bg-linear-to-r from-background to-foreground"
		>
			<TitleBlock
				subtitle="результаты"
				title="Результаты моих клиентов говорят сами за себя"
				isMobile={isMobile}
				className="max-w-[440px]"
			/>
			<Carousel slides={cards} isMobile={isMobile} />
		</Section>
	);
}

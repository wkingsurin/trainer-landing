import Section from "../../shared/section";
import Carousel from "../../widgets/carousel";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Results({ isMobile }: IProps) {
	const cards = [
		{
			title: "Карина",
			description: "«Теперь я не боюсь ходить в зал в открытом топе»",
		},
		{
			title: "Света",
			description: "«Наконец-то я знаю, что делать»",
		},
		{
			title: "Оксана",
			description:
				"«Спасибо Алине за наставничество, благодаря ее навыку фитнес-тренера, я пришла к фигуре, которую хотела очень давно»",
		},
		{
			title: "Екатерина",
			description:
				"«Рекомендую тренера, однозначно. Пробовала тренироваться у других - результаты были минимальные, начала тренироваться с Алиной и результат на лицо»",
		},
	];

	return (
		<Section id="results" px isMobile={isMobile} container>
			<TitleBlock
				subtitle="результаты"
				title="Результаты моих клиентов говорят сами за себя"
			/>
			<Carousel slides={cards} />
		</Section>
	);
}

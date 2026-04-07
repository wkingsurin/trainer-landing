import Section from "./shared/section";
import Form from "./widgets/form";
import TitleBlock from "./widgets/title-block";

export default function Feedback() {
	return (
		<Section>
			<TitleBlock
				subtitle="обратная связь"
				title="Сделай первый шаг к своему новому телу"
			/>
			<Form />
		</Section>
	);
}

import Section from "../../shared/section";
import Form from "../../widgets/form";
import TitleBlock from "../../widgets/title-block";

interface IProps {
	isMobile: boolean;
}

export default function Feedback({ isMobile }: IProps) {
	return (
		<Section id="feedback" isMobile={isMobile} container centered className="pb-0!">
			<TitleBlock
				title="Сделай первый шаг к своему новому телу"
				isMobile={isMobile}
			/>
			<Form isMobile={isMobile} />
		</Section>
	);
}

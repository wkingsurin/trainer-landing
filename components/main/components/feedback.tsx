import Section from "../../shared/section";
import Form from "../../widgets/form";
import TitleBlock from "../../widgets/title-block";

import { FEEDBACK_TITLE } from "@/app/utils/config";

interface IProps {
	isMobile: boolean;
}

export default function Feedback({ isMobile }: IProps) {
	return (
		<Section
			id="feedback"
			isMobile={isMobile}
			container
			centered
			className="pb-0!"
		>
			<TitleBlock title={FEEDBACK_TITLE.title} isMobile={isMobile} />
			<Form isMobile={isMobile} />
		</Section>
	);
}

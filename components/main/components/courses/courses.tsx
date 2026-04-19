import Section from "../../../shared/section";
import TitleBlock from "../../../widgets/title-block";
import SectionContent from "@/components/shared/section-content";
import CoursesClient from "./courses-client";

import { COURSES_DATA, COURSES_TITLE } from "@/app/utils/config";

interface IProps {
	isMobile: boolean;
}

export default function Courses({ isMobile }: IProps) {
	const data = Object.values(COURSES_DATA);

	const style = isMobile ? "gap-[30px]" : "flex-row justify-center gap-5";

	return (
		<Section id="courses" px isMobile={isMobile} container centered>
			<TitleBlock
				subtitle={COURSES_TITLE.subtitle}
				title={COURSES_TITLE.title}
				isMobile={isMobile}
			/>
			<SectionContent className={`w-full ${style}`}>
				<CoursesClient data={data} isMobile={isMobile} />
			</SectionContent>
		</Section>
	);
}

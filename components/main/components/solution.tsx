import CTAButton from "../../shared/cta-button";
import Section from "../../shared/section";
import SectionContent from "../../shared/section-content";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

import { SOLUTION_DATA, SOLUTION_TITLE } from "@/app/utils/config";

interface IProps {
	isMobile: boolean;
}

export default function Solution({ isMobile }: IProps) {
	const data = Object.values(SOLUTION_DATA);

	return (
		<Section id="solution" px isMobile={isMobile} container centered>
			<TitleBlock
				subtitle={SOLUTION_TITLE.subtitle}
				title={SOLUTION_TITLE.title}
				isMobile={isMobile}
			/>
			<SectionContent
				className={`items-center w-full ${
					isMobile ? "gap-[30px]" : "gap-[50px]"
				}`}
			>
				<CardsBlock cards={data} showId type="solution" isMobile={isMobile} />
				<CTAButton isMobile={isMobile} type="medium">
					Начать
				</CTAButton>
			</SectionContent>
		</Section>
	);
}

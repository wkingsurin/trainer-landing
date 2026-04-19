import Section from "../../shared/section";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

import { PROBLEMS_DATA, PROBLEMS_TITLE } from "@/app/utils/config";

interface IProps {
	isMobile: boolean;
}

export default function Problem({ isMobile }: IProps) {
	const data = Object.values(PROBLEMS_DATA);

	const sectionStyle = isMobile
		? ""
		: "container mx-auto max-w-[1280px]! gap-[50px]";

	return (
		<Section
			id="problems"
			isMobile={isMobile}
			className={sectionStyle}
			container
			centered
			px
		>
			<TitleBlock
				subtitle={PROBLEMS_TITLE.subtitle}
				title={PROBLEMS_TITLE.title}
				isMobile={isMobile}
			/>
			<CardsBlock cards={data} showId type="problems" isMobile={isMobile} />
		</Section>
	);
}

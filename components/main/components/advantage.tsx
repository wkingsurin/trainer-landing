import Section from "../../shared/section";
import CardsBlock from "../../widgets/cards-block";
import TitleBlock from "../../widgets/title-block";

import { ADVANTAGE_DATA, ADVANTAGE_TITLE } from "@/app/utils/config";

interface IProps {
	isMobile: boolean;
}

export default function Advantage({ isMobile }: IProps) {
	const data = Object.values(ADVANTAGE_DATA);

	return (
		<Section
			id="advantage"
			className="flex flex-col"
			px
			isMobile={isMobile}
			container
		>
			<TitleBlock
				subtitle={ADVANTAGE_TITLE.subtitle}
				title={ADVANTAGE_TITLE.title}
				isMobile={isMobile}
			/>
			<CardsBlock cards={data} showWorth isMobile={isMobile} type="advantage" />
		</Section>
	);
}

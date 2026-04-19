import Section from "../../shared/section";
import Carousel from "../widgets/carousel/carousel";
import TitleBlock from "../../widgets/title-block";

import { RESULTS_DATA, RESULTS_TITLE } from "@/app/utils/config";

interface IProps {
	isMobile: boolean;
}

export default function Results({ isMobile }: IProps) {
	const data = Object.values(RESULTS_DATA);

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
				subtitle={RESULTS_TITLE.subtitle}
				title={RESULTS_TITLE.title}
				isMobile={isMobile}
				className="max-w-[440px]"
			/>
			<Carousel slides={data} isMobile={isMobile} />
		</Section>
	);
}

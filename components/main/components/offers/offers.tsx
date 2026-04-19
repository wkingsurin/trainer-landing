import Section from "../../../shared/section";
import TitleBlock from "../../../widgets/title-block";
import SectionContent from "@/components/shared/section-content";
import { OFFERS_TITLE, OFFERS_DATA } from "@/app/utils/config";
import OffersClient from "./offers-client";

interface IProps {
	isMobile: boolean;
}

export default function Offers({ isMobile }: IProps) {
	const data = Object.values(OFFERS_DATA);

	const style = isMobile ? "gap-[30px]" : "flex-row justify-center gap-5";

	return (
		<Section id="offers" px isMobile={isMobile} container centered>
			<TitleBlock
				subtitle={OFFERS_TITLE.subtitle}
				title={OFFERS_TITLE.title}
				isMobile={isMobile}
				className="max-w-[450px]"
			/>
			<SectionContent className={`w-full ${style}`}>
				<OffersClient data={data} isMobile={isMobile} />
			</SectionContent>
		</Section>
	);
}

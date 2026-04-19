import Section from "../../../shared/section";
import TitleBlock from "../../../widgets/title-block";
import SectionContent from "../../../shared/section-content";
import Digits from "../../shared/digits";
import { ABOUT_DATA } from "@/app/utils/config";
import AboutClient from "./about-client";

interface IProps {
	isMobile: boolean;
}

export default function About({ isMobile }: IProps) {
	const data = ABOUT_DATA;

	const style = isMobile ? "gap-[40px]" : "gap-[50px]";

	return (
		<Section
			id="about"
			px
			isMobile={isMobile}
			container
			centered
			className="bg-linear-to-r from-foreground to-background"
		>
			<TitleBlock
				subtitle="о тренере"
				title="Твой результат — моя личная ответственность"
				isMobile={isMobile}
			/>
			<SectionContent className={`${style}`}>
				<AboutClient data={data} isMobile={isMobile} />
				<Digits />
			</SectionContent>
		</Section>
	);
}

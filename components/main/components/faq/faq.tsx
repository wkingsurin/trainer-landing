import { mapFAQData } from "@/app/mappers/faq-mapper";
import Section from "../../../shared/section";
import SectionContent from "../../../shared/section-content";
import TitleBlock from "../../../widgets/title-block";
import FAQClient from "./faq-client";
import { FAQ_DATA } from "@/app/utils/config";

interface IProps {
	isMobile: boolean;
}

export default function FAQ({ isMobile }: IProps) {
	const data = Object.values(mapFAQData(FAQ_DATA));

	return (
		<Section
			id="faq"
			px
			className="bg-foreground"
			isMobile={isMobile}
			container
			centered
		>
			<TitleBlock
				subtitle="вопросы"
				title="Ответы на вопросы, которые тебя останавливают"
				isMobile={isMobile}
				className="max-w-[480px]"
			/>
			<SectionContent className="max-w-[720px] w-full">
				<FAQClient data={data} isMobile={isMobile} />
			</SectionContent>
		</Section>
	);
}

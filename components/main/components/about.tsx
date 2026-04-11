import Section from "../../shared/section";
import TitleBlock from "../../widgets/title-block";
import SectionContent from "../../shared/section-content";
import AboutCard from "@/components/main/widgets/about-card";
import AboutDescription from "../shared/about-description";
import Digits from "../shared/digits";

interface IProps {
	isMobile: boolean;
}

export default function About({ isMobile }: IProps) {
	const data = {
		title: "Алина Самойлова",
		description: "“Я не просто даю упражнения — я веду тебя до результата”",
	};

	const style = isMobile ? "gap-[40px]" : "gap-[50px]";
	const contentStyle = isMobile ? "flex-col gap-5" : "flex-row gap-[70px]";

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
				<div className={`flex ${contentStyle}`}>
					<AboutCard
						imageSrc="/1.jpg"
						imageAlt="Алина Самойлова"
						data={data}
						isMobile={isMobile}
					/>
					<AboutDescription isMobile={isMobile} />
				</div>
				<Digits />
			</SectionContent>
		</Section>
	);
}

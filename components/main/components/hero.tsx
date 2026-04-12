import CTAButton from "../../shared/cta-button";
import Section from "../../shared/section";
import BackgroundImage from "../widgets/background-image";
import SectionTitle from "@/components/shared/section-title";
import Advantage from "../widgets/advantage";
import SocialBlock from "@/components/widgets/social-block";

interface IProps {
	isMobile: boolean;
}

export default async function Hero({ isMobile }: IProps) {
	const titleBlockStyle = isMobile
		? "bottom-[120px]"
		: "top-[300px] left-[120px] p-0! gap-6 items-center";
	const sectionDesktopStyle = "p-0!";
	const textBlockSize = isMobile
		? "max-w-[1280px]"
		: "max-w-[480px] left-[120px]";
	const titleStyle = isMobile ? "text-[32px]" : "text-[48px]";
	const subtitleStyle = isMobile ? "text-base" : "text-[20px]";
	const contentGap = isMobile ? "gap-[6px]" : "gap-3";
	const buttonStyle = isMobile
		? "min-h-[50px]"
		: "min-w-[320px] rounded-[16px] text-[18px] font-bold";

	return (
		<Section
			id="hero"
			isMobile={isMobile}
			className={`relative flex flex-col h-[100vh] pt-0 w-full box-content ${sectionDesktopStyle}`}
			container
		>
			<BackgroundImage isMobile={isMobile} />
			<div
				className={`absolute px-3 z-1100 container mx-auto ${textBlockSize} flex flex-col gap-[40px] ${titleBlockStyle}`}
			>
				<div className={`flex flex-col gap-[20px] text-center ${contentGap}`}>
					<SectionTitle className={`font-bold leading-[58px]! ${titleStyle}`}>
						Фигура мечты — уже через 8 недель
					</SectionTitle>
					<span className={`leading-[23px] ${subtitleStyle}`}>
						Персональные тренировки и питание под тебя — с поддержкой на каждом
						этапе
					</span>
				</div>
				<CTAButton isMobile={isMobile} type="huge" className={buttonStyle}>
					Начать
				</CTAButton>
				<SocialBlock
					className="mt-[20px] flex-col items-center"
					isMobile={isMobile}
					title
				/>
			</div>
			{isMobile ? null : <Advantage />}
		</Section>
	);
}

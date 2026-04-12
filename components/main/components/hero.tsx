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
	const titleStyle = isMobile ? "text-[32px] leading-[38px]!" : "text-[48px] leading-[58px]!";
	const subtitleStyle = isMobile ? "text-base leading-[23px]" : "text-[20px] leading-[23px]";
	const contentGap = isMobile ? "gap-3" : "gap-5";
	const buttonStyle = isMobile
		? "min-h-[60px]"
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
				<div className={`flex flex-col text-center ${contentGap}`}>
					<SectionTitle className={`font-bold ${titleStyle}`}>
						Фигура мечты — уже через 8 недель
					</SectionTitle>
					<span className={`${subtitleStyle}`}>
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

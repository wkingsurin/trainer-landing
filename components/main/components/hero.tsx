import CTAButton from "../../shared/cta-button";
import Section from "../../shared/section";
import BackgroundImage from "../widgets/background-image";

export default function Hero() {
	return (
		<Section id="hero" className="relative flex flex-col h-[100vh] pt-0">
			<BackgroundImage />
			<div className="absolute bottom-[120px] px-3 z-1100 flex flex-col gap-[15px]">
				<div className="flex flex-col gap-[6px] text-center">
					<h1 className="font-bold text-[32px]">
						Фигура мечты — уже через 8 недель
					</h1>
					<span className="text-base">
						Персональные тренировки и питание под тебя — с поддержкой на каждом
						этапе
					</span>
				</div>
				<CTAButton>Начать</CTAButton>
			</div>
		</Section>
	);
}

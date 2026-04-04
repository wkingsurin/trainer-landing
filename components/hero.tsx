import Image from "next/image";
import CTAButton from "./shared/cta-button";
import Section from "./shared/section";

export default function Hero() {
	return (
		<Section className="relative flex flex-col h-[100vh]">
			<div className="absolute z-999 w-full h-full">
				<div className="relative w-full h-full">
					<div className="absolute w-full h-full bg-background-250"></div>
					<div className="absolute bottom-0 w-full h-100 bg-linear-to-b from-background/0 to-background"></div>
					<Image
						src="/4.jpg"
						alt="background"
						width={375}
						height={750}
						className="w-auto h-auto w-full h-full object-cover object-top"
					/>
				</div>
			</div>
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

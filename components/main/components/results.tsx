'use client'

import Section from "../../shared/section";
import TitleBlock from "../../widgets/title-block";

import dynamic from "next/dynamic";

export const SwiperCarousel = dynamic(
	() => import("../widgets/carousel/carousel"),
	{
		ssr: false,
		loading: () => <div className="h-[500px]"></div>,
	}
);

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
			<SwiperCarousel slides={data} isMobile={isMobile} />
		</Section>
	);
}

"use client";

import { IAbout } from "@/app/types/shared.types";
import { useVisit } from "@/components/contexts/visit-context";
import AboutCardMotion from "../../widgets/about-card/about-card-motion";
import AboutCard from "../../widgets/about-card/about-card";
import AboutDescriptionMotion from "../../shared/about-description/about-description-motion";
import AboutDescription from "../../shared/about-description/about-description";

interface IProps {
	data: IAbout;
	isMobile: boolean;
}

export default function AboutClient({ data, isMobile }: IProps) {
	const { visit: hasVisited } = useVisit();

	const contentStyle = isMobile ? "flex-col gap-[30px]" : "flex-row gap-[70px]";

	return (
		<div className={`flex ${contentStyle}`}>
			<AboutCardMotion index="1" animate={!hasVisited}>
				<AboutCard
					imageSrc={data.imageSrc}
					imageAlt={data.imageAlt}
					isMobile={isMobile}
				/>
			</AboutCardMotion>
			<AboutDescriptionMotion index="2" animate={!hasVisited}>
				<AboutDescription isMobile={isMobile} />
			</AboutDescriptionMotion>
		</div>
	);
}

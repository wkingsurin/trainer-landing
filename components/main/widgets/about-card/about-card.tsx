"use client";

import Image from "next/image";
import Card from "../../../shared/card";
import SocialBlock from "../../../widgets/social-block";
import { useState } from "react";
import AboutCardSkeleton from "./about-card-seketon";

interface IProps {
	imageSrc: string;
	imageAlt: string;
	className?: string;
	isMobile: boolean;
}

export default function AboutCard({
	className,
	imageSrc,
	imageAlt,
	isMobile,
}: IProps) {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const style = isMobile ? "aspect-[3/4]" : "group aspect-[3/4]";

	const animateStyle = "transition transform-gpu scale-101 duration-[0.5s]";
	const animationStyle = isMobile
		? ""
		: `${animateStyle} scale-101 group-hover:scale-103 backface-hidden`;

	return (
		<Card
			className={`advanced-card p-0! relative min-h-[500px] overflow-hidden ${style} ${className}`}
		>
			{!isLoaded && <AboutCardSkeleton />}

			<Image
				className={`absolute rounded-[20px] opacity-[0.01] object-cover brightness-90 ${animationStyle}`}
				fill
				src={imageSrc}
				alt={imageAlt}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				onLoad={(img) => {
					img.currentTarget.classList.replace("opacity-[0.01]", "opacity-100");
					setIsLoaded(true);
				}}
			/>
			<div
				className={`absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px]`}
			>
				{isMobile ? <SocialBlock /> : null}
			</div>
		</Card>
	);
}

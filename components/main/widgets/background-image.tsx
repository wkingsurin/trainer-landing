"use client";

import Image from "next/image";
import image from "@/public/hero.jpg";
import { memo } from "react";

interface IProps {
	isMobile?: boolean;
}

export default memo(BackgroundImage)

function BackgroundImage({ isMobile }: IProps) {
	const imageStyle = isMobile
		? "object-cover object-top object-left w-[100%] h-[100%]"
		: "object-contain object-right";
	const layerStyle = isMobile ? "top-[80px]" : "top-[100px] aspect-[9/16]";

	return (
		<div
			className={`absolute right-[0px] z-999 max-w-[720px] ${layerStyle}`}
		>
			<div className="relative w-full aspect-[12/16] overflow-hidden">
				{!isMobile && (
					<>
						<div className="absolute inset-y-0 left-0 z-[1200] w-1/3 bg-gradient-to-l from-transparent via-background/60 to-background" />
						<div className="absolute inset-y-0 right-0 z-[1200] w-1/3 bg-gradient-to-l from-background via-background/60 to-transparent" />
					</>
				)}

				<div className="absolute bottom-0 left-0 z-[1200] w-full h-80 bg-gradient-to-t from-background via-background/80 to-transparent">
					<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://vercel.app')]"></div>
				</div>

				<Image
					src={image}
					alt="background"
					priority
					fetchPriority="high"
					sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
					quality={isMobile ? 75 : 90}
					loading="eager"
					className={`transition duration-500 ease-in-out max-w-[720px] ${imageStyle}`}
					onLoad={(img) =>
						img.currentTarget.classList.replace("opacity-[0.01]", "opacity-100")
					}
				/>
			</div>
		</div>
	);
}

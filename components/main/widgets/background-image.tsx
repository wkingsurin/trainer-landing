"use client";

import Image from "next/image";
import image from "@/public/hero.jpg";

interface IProps {
	isMobile?: boolean;
}

export default function BackgroundImage({ isMobile }: IProps) {
	const imageStyle = isMobile
		? "object-cover object-top"
		: "object-contain object-right";
	const layerStyle = isMobile ? "top-[80px]" : "top-[100px]";

	return (
		<div
			className={`absolute right-[0px] z-999 max-w-[720px] w-full h-full ${layerStyle}`}
		>
			<div className="relative w-full h-full overflow-hidden">
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
					preload
					className={`transition duration-500 ease-in-out opacity-0 ${imageStyle}`}
					onLoadingComplete={(img) => img.classList.remove("opacity-0")}
				/>
			</div>
		</div>
	);
}

import Image from "next/image";

interface IProps {
	isMobile?: boolean;
}

export default function BackgroundImage({ isMobile }: IProps) {
	const imageStyle = isMobile ? "object-cover object-top top-[80px]!" : "object-contain object-right";

	return (
		<div className="absolute z-999 w-full h-full">
			<div className="relative w-full h-full overflow-hidden">
				{!isMobile && <>
					<div className="absolute w-1/3 h-full bg-linear-to-r from-background to-background/0"></div>
					<div></div>
				</>}
				<div className="absolute z-1200 w-full h-full bg-background-250"></div>
				<div className="absolute z-1200 bottom-0 w-full h-100 bg-linear-to-b from-background/0 to-background"></div>
				<Image
					src="/hero.jpg"
					alt="background"
					fill
					priority
					className={imageStyle}
				/>
			</div>
		</div>
	);
}

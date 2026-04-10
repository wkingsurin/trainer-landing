import Image from "next/image";

export default function BackgroundImage() {
	return (
		<div className="absolute z-999 w-full h-full">
			<div className="relative w-full h-full">
				<div className="absolute z-1200 w-full h-full bg-background-250"></div>
				<div className="absolute z-1200 bottom-0 w-full h-100 bg-linear-to-b from-background/0 to-background"></div>
				<Image
					src="/4.jpg"
					alt="background"
					fill
					priority
					className="object-cover object-top"
				/>
			</div>
		</div>
	);
}

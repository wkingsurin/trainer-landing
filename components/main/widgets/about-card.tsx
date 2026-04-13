import Image from "next/image";
import Card from "../../shared/card";
import SocialBlock from "../../widgets/social-block";

interface IProps {
	imageSrc: string;
	imageAlt: string;
	className?: string;
	isMobile: boolean;
	children?: React.ReactNode;
	data: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	};
}

export default function AboutCard({
	className,
	imageSrc,
	imageAlt,
	isMobile,
	children,
}: IProps) {
	const style = isMobile ? "" : "group min-w-[351px] w-1/4";

	const animateStyle = "transition transform-gpu scale-101 duration-[0.5s]";
	const animationStyle = isMobile
		? ""
		: `${animateStyle} scale-101 group-hover:scale-103 backface-hidden`;

	return (
		<Card
			className={`advanced-card p-0! relative min-h-[500px] overflow-hidden ${style} ${className}`}
		>
			<Image
				className={`absolute w-full h-full rounded-[20px] object-cover brightness-90 ${animationStyle}`}
				fill
				priority
				src={imageSrc}
				alt={imageAlt}
			/>
			<div
				className={`absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px]`}
			>
				{isMobile ? <SocialBlock /> : null}
			</div>
			{children}
		</Card>
	);
}

import Card from "@/components/shared/card";
import DescriptionBlock from "@/components/widgets/description-block";
import Image from "next/image";

interface IProps {
	imageSrc: string;
	imageAlt: string;
	className?: string;
	children?: React.ReactNode;
	premium?: boolean;
	isMobile?: boolean;
	data: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	};
}

export default function SlideCard({
	className,
	imageSrc,
	imageAlt,
	premium,
	isMobile,
	children,
	data,
}: IProps) {
	const animateStyle = "transition transform-gpu duration-[0.7s]";

	const animationStyle = isMobile
		? ""
		: `${animateStyle} scale-101group-hover:scale-103 backface-hidden`;

	const mobileStyle = "w-full";
	const desktopStyle = "w-full";

	const descriptionStyle = isMobile
		? `${animateStyle} translate-y-[305px] group-hover:translate-y-0`
		: "";

	return (
		<Card
			className={`group advanced-card p-0! relative min-h-[500px] overflow-hidden ${mobileStyle} ${desktopStyle} ${className}`}
		>
			<Image
				className={`absolute w-full h-full rounded-[20px] object-cover brightness-90 ${animationStyle}`}
				fill
				priority
				src={imageSrc}
				alt={imageAlt}
			/>
			<div
				className={`absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px] justify-end`}
			>
				<div className="flex flex-col items-end gap-3 w-full">
					<DescriptionBlock className={`leading-[19px] ${descriptionStyle}`}>
						<span
							className={`text-base font-bold leading-[19px] ${
								premium && "text-accent"
							}`}
						>
							{data.title}
						</span>
						{typeof data.description === "object" && (
							<div className="flex flex-col w-full gap-[6px]">
								{data.description.map((p) => (
									<p key={p.text}>{p.text}</p>
								))}
							</div>
						)}
						{typeof data.description === "string" && <p>{data.description}</p>}
					</DescriptionBlock>
				</div>
			</div>
			{children}
		</Card>
	);
}

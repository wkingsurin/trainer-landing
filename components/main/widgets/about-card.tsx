import Image from "next/image";
import Card from "../../shared/card";
import SocialBlock from "../../widgets/social-block";
import DescriptionBlock from "../../widgets/description-block";

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
	data,
}: IProps) {
	const options = {
		fromColor: "from-surface-400/15",
		toColor: "to-surface/15",
		borderWeight: "border-[0.5px]",
		shadowColor: "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]",
	};

	const style = isMobile ? "" : "min-w-[351px] w-1/4";

	return (
		<Card
			className={`advanced-card p-0! relative min-h-[500px] ${style} ${className}`}
			options={options}
		>
			<Image
				className="absolute w-full h-full rounded-[20px] object-cover brightness-90"
				fill
				priority
				src={imageSrc}
				alt={imageAlt}
			/>
			<div
				className={`absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px]`}
			>
				{isMobile ? <SocialBlock /> : null}
				<div className="flex flex-col items-end justify-end gap-3 w-full h-full">
					<DescriptionBlock className="leading-[19px]">
						<span className={`text-base font-bold leading-[19px]`}>
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

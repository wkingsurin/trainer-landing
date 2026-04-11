import Image from "next/image";
import Card from "../../shared/card";
import DescriptionBlock from "../../widgets/description-block";
import Tag from "../../shared/tag";
import CTAButton from "../../shared/cta-button";

interface IProps {
	imageSrc: string;
	imageAlt: string;
	className?: string;
	children?: React.ReactNode;
	premium?: boolean;
	isMobile: boolean;
	data: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	};
}

export default function OfferCard({
	className,
	imageSrc,
	imageAlt,
	premium,
  isMobile,
	children,
	data,
}: IProps) {
	const options = {
		fromColor: premium ? "from-accent-400" : "from-surface-400/15",
		toColor: premium ? "to-accent" : "to-surface/15",
		borderWeight: premium ? "border-[2px]" : "border-[0.5px]",
		shadowColor: premium
			? "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]"
			: "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]",
	};

  const style = isMobile ? "flex-1" : "w-1/4"

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
				<Tag className="leading-[17px]" premium={premium}>
					{data.tag}
				</Tag>

				<div className="flex flex-col items-end gap-3 w-full">
					<Tag
						className="flex gap-[5px]! mb-[-6px] leading-[17px]"
						premium={premium}
					>
						{data.price}
					</Tag>

					<DescriptionBlock className="leading-[19px]">
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

					<CTAButton type="normal" className="w-full">
						Оформить
					</CTAButton>
				</div>
			</div>
			{children}
		</Card>
	);
}

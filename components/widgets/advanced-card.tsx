import Image from "next/image";
import Card from "../shared/card";
import SocialBlock from "./social-block";
import InstamgramIcon from "../shared/instagram-icon";
import TelegramIcon from "../shared/telegram-icon";
import DescriptionBlock from "./description-block";
import Tag from "../shared/tag";
import CTAButton from "../shared/cta-button";

interface IProps {
	imageSrc: string;
	imageAlt: string;
	type: "offer" | "review" | "about";
	className?: string;
	children?: React.ReactNode;
	isPremium?: boolean;
	data: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	};
}

export default function AdvancedCard({
	className,
	imageSrc,
	imageAlt,
	type,
	isPremium,
	children,
	data,
}: IProps) {
	const options = {
		fromColor: isPremium ? "from-accent-400" : "from-surface-400/15",
		toColor: isPremium ? "to-accent" : "to-surface/15",
		borderWeight: isPremium ? "border-[2px]" : "border-[0.5px]",
		shadowColor: isPremium
			? "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]"
			: "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]",
	};

	return (
		<Card
			className={`advanced-card p-0! relative min-h-[500px] ${className}`}
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
				className={`absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px] ${
					type === "review" && "justify-end"
				}`}
			>
				{type === "about" && <SocialBlock />}
				{type === "offer" && (
					<Tag className="leading-[17px]" isPremium={isPremium}>
						{data.tag}
					</Tag>
				)}
				<div className="flex flex-col items-end gap-3 w-full">
					{type === "offer" && (
						<Tag
							className="flex gap-[5px]! mb-[-6px] leading-[17px]"
							isPremium={isPremium}
						>
							{data.price}
						</Tag>
					)}
					<DescriptionBlock className="leading-[19px]">
						<span
							className={`text-base font-bold leading-[19px] ${
								isPremium && "text-accent"
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
					{type === "offer" && <CTAButton>Оформить</CTAButton>}
				</div>
			</div>
			{children}
		</Card>
	);
}

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
	isOffer?: boolean;
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
	isOffer,
	isPremium,
	children,
	data,
}: IProps) {
	const options = {
		fromColor: isPremium ? "from-accent-400" : "from-surface-400/15",
		toColor: isPremium ? "to-accent" : "to-surface/15",
		borderWeight: isPremium ? "border-[2px]" : "border-[0.5px]",
		shadowColor: isPremium ? "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]" : "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]",
	};
	const socials = [
		{
			imageName: "instagram",
			icon: <InstamgramIcon className="" size="size-5" />,
		},
		{
			imageName: "telegram",
			icon: <TelegramIcon className="" size="size-5" />,
		},
	];

	return (
		<Card
			className={`advanced-card p-0! relative min-h-[500px] ${className}`}
			options={options}
		>
			<Image
				className="absolute w-full h-full rounded-[20px] object-cover"
				width={351}
				height={750}
				src={imageSrc}
				alt={imageAlt}
			/>
			<div className="absolute z-1200 w-full h-full flex flex-col justify-between items-end p-3 text-[14px]">
				{!isOffer && <SocialBlock socials={socials} />}
				{isOffer && <Tag className="leading-[17px]" isPremium={isPremium}>{data.tag}</Tag>}
				<div className="flex flex-col items-end gap-3 w-full">
					{isOffer && <Tag className="flex gap-[5px]! mb-[-6px] leading-[17px]" isPremium={isPremium}>{data.price}</Tag>}
					<DescriptionBlock className="leading-[19px]">
						<span className={`text-base font-bold leading-[19px] ${isPremium && 'text-accent'}`}>{data.title}</span>
						<div className="flex flex-col w-full gap-[6px]">
						{typeof data.description === "object" &&
							data.description.map((p) => <p key={p.text}>{p.text}</p>)}
						</div>
						{typeof data.description === "string" && (
							<p>“Я не просто даю упражнения — я веду тебя до результата”</p>
						)}
					</DescriptionBlock>
					<CTAButton>Оформить</CTAButton>
				</div>
			</div>
			{children}
		</Card>
	);
}

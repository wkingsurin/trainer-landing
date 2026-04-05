import Image from "next/image";
import Card from "../shared/card";
import SocialBlock from "./social-block";
import InstamgramIcon from "../shared/instagram-icon";
import TelegramIcon from "../shared/telegram-icon";
import DescriptionBlock from "./description-block";

interface IProps {
	imageSrc: string;
	imageAlt: string;
	className?: string;
	children?: React.ReactNode;
}

export default function AdvancedCard({
	className,
	imageSrc,
	imageAlt,
	children,
}: IProps) {
	const options = {
		fromColor: "from-surface-400/15",
		toColor: "to-surface/15",
		borderWeight: "border-[0.5px]",
		shadowColor: "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]",
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
			<SocialBlock socials={socials} />
			<Image
				className="absolute w-full h-full rounded-[20px] object-cover"
				width={351}
				height={750}
				src={imageSrc}
				alt={imageAlt}
			/>
			<DescriptionBlock>
				<span className="text-[18px] font-bold">Алина Самойлова</span>
				<p>“Я не просто даю упражнения — я веду тебя до результата”</p>
			</DescriptionBlock>
			{children}
		</Card>
	);
}

import ContentTitle from "../shared/content-title";
import Icon from "../shared/icon";
import InstamgramIcon from "../shared/instagram-icon";
import TelegramIcon from "../shared/telegram-icon";

interface IProps {
	className?: string;
	isMobile?: boolean;
}

export default function SocialBlock({ className, isMobile = true }: IProps) {
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
	const style = isMobile ? "top-3 right-3 " : "";

	return (
		<div className={`z-1200 flex gap-2 ${style} ${className}`}>
			<ContentTitle className="text-[16px]">Написать лично:</ContentTitle>
			<div className="flex gap-5">
				{socials.map((social) => (
					<Icon key={social.imageName}>{social.icon}</Icon>
				))}
			</div>
		</div>
	);
}

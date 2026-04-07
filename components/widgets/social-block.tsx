import Icon from "../shared/icon";
import InstamgramIcon from "../shared/instagram-icon";
import TelegramIcon from "../shared/telegram-icon";

export default function SocialBlock() {
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
		<div className="z-1200 top-3 right-3 flex gap-2">
			{socials.map((social) => (
				<Icon key={social.imageName}>{social.icon}</Icon>
			))}
		</div>
	);
}

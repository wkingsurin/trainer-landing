import ContentTitle from "../shared/content-title";
import Icon from "../shared/icon";
import InstamgramIcon from "../shared/instagram-icon";
import TelegramIcon from "../shared/telegram-icon";

interface IProps {
	className?: string;
	isMobile?: boolean;
	title?: boolean;
}

export default function SocialBlock({
	className,
	isMobile = true,
	title,
}: IProps) {
	const socials = [
		{
			imageName: "instagram",
			icon: <InstamgramIcon className="transition group-hover:fill-surface" size={`${isMobile ? "size-6" : 'size-6'}`} />,
		},
		{
			imageName: "telegram",
			icon: <TelegramIcon className="transition group-hover:fill-surface" size={`${isMobile ? "size-6" : 'size-6'}`} />,
		},
	];
	const style = isMobile ? "top-3 right-3" : "";
	const iconsStyle = title ? 'gap-5' : 'gap-5'

	return (
		<div className={`z-1200 flex flex-col gap-[15px] ${style} ${className}`}>
			{title && (
				<ContentTitle className="text-[18px]">Написать лично:</ContentTitle>
			)}
			<div className={`flex justify-center ${iconsStyle}`}>
				{socials.map((social) => (
					<Icon key={social.imageName}>{social.icon}</Icon>
				))}
			</div>
		</div>
	);
}

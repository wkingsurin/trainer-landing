import Icon from "../shared/icon";

interface IProps {
	socials: { imageName: string; icon: React.ReactNode }[];
}

export default function SocialBlock({ socials }: IProps) {
	return (
		<div className="z-1200 top-3 right-3 flex gap-2">
			{socials.map((social) => (
				<Icon key={social.imageName}>{social.icon}</Icon>
			))}
		</div>
	);
}

import Link from "next/link";
import Card from "./card";

interface IProps {
	name: string;
	link: string;
	children: React.ReactNode;
}

export default function Icon({ name, link, children }: IProps) {
	return (
		<Link
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={name}
		>
			<Card className="group w-[50px] min-h-[50px]! rounded-[50%] p-0! flex items-center justify-center bg-surface-50 backdrop-blur-2xl transition duration-[0.5s] hover:bg-accent!">
				{children}
			</Card>
		</Link>
	);
}

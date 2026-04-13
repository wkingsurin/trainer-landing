import Link from "next/link";
import Card from "./card";

interface IProps {
	link?: string;
	children: React.ReactNode;
}

export default function Icon({ link, children }: IProps) {
	return (
		<Card className="group w-[50px] min-h-[50px]! rounded-[50%] p-0! flex items-center justify-center bg-surface-50 backdrop-blur-2xl transition duration-[0.5s] hover:bg-accent!">
			{link ? <Link href={link}>{children}</Link> : <>{children}</>}
		</Card>
	);
}

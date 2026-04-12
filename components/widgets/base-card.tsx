import Card from "../shared/card";

interface IProps {
	className?: string;
	children: React.ReactNode;
}

export default function BaseCard({ className, children }: IProps) {
	return (
		<Card className={`${className} base-card`}>
			{children}
		</Card>
	);
}

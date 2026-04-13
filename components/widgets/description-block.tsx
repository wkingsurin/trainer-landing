import Card from "../shared/card";

interface IProps {
	className?: string;
	children?: React.ReactNode;
}

export default function DescriptionBlock({ className, children }: IProps) {
	return (
		<Card
			className={`${className} w-full min-h-[90px] flex flex-col items-start bg-foreground-700! backdrop-blur p-[20px]!`}
		>
			{children}
		</Card>
	);
}

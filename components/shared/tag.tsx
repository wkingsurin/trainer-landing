import Card from "./card";

interface IProps {
	className?: string;
	children: React.ReactNode | string;
	premium?: boolean;
}

export default function Tag({ className, children, premium }: IProps) {
	return (
		<Card
			className={`${className} px-3! py-[6px]! min-h-[30px]! bg-foreground-700! backdrop-blur p-[20px]! font-bold ${premium && 'text-accent'} min-w-[70px] justify-center`}
		>
			{children}
		</Card>
	);
}

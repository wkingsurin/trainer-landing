import Card from "./card";

interface IProps {
	className?: string;
	children: React.ReactNode | string;
	isPremium?: boolean;
}

export default function Tag({ className, children, isPremium }: IProps) {
	const options = {
		fromColor: "from-foreground-400/50",
		toColor: "to-foreground/50",
		borderWeight: "border-[0.5px]",
		shadowColor: "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground-700/30)]",
	};

	return (
		<Card
			className={`${className} px-3! py-[6px]! min-h-[30px]! bg-foreground-700! backdrop-blur p-[20px]! font-bold ${isPremium && 'text-accent'} min-w-[70px] justify-center`}
			options={options}
		>
			{children}
		</Card>
	);
}

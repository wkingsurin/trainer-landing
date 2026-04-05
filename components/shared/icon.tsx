import Card from "./card";

interface IProps {
	children: React.ReactNode;
}

export default function Icon({ children }: IProps) {
	const options = {
		fromColor: "from-foreground/50",
		toColor: "to-blue/50",
		borderWeight: "border-[0.5px]",
		shadowColor: "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]",
	};

	return (
		<Card className="w-[40px] min-h-[40px]! p-0! flex items-center justify-center bg-surface-50 backdrop-blur-2xl" options={options}>
			{children}
		</Card>
	);
}

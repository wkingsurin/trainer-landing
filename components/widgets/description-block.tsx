import Card from "../shared/card";

interface IProps {
	className?: string;
	children?: React.ReactNode;
}

export default function DescriptionBlock({ className, children }: IProps) {
	const options = {
		fromColor: "from-foreground-400/50",
		toColor: "to-foreground/50",
		borderWeight: "border-[0.5px]",
		shadowColor:
			"[box-shadow:inset_0_0_0_100vw_theme(colors.foreground-300/30)]",
	};

	return (
		<Card
			className={`${className} w-full min-h-[112px] flex flex-col items-start bg-foreground-300! backdrop-blur p-[20px]!`}
			options={options}
		>
			{children}
		</Card>
	);
}

import Card from "../shared/card";

interface IProps {
	className?: string;
	children: React.ReactNode;
}

export default function BaseCard({ className, children }: IProps) {
	const options = {
		fromColor: "from-surface-400/15",
		toColor: "to-surface/15",
		borderWeight: "border-[0.5px]",
		shadowColor: "[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]"
	};

	return (
		<Card className={`${className} base-card`} options={options}>
			{children}
		</Card>
	);
}

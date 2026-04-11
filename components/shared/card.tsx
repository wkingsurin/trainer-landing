interface IProps {
	className?: string;
	children: React.ReactNode | string;
	options?: {
		fromColor: string;
		toColor: string;
		borderWeight: string;
		shadowColor: string;
	};
	transparent?: boolean;
}

export default function Card({
	className,
	options,
	transparent,
	children,
}: IProps) {
	const opts =
		!transparent && options
			? `${options.borderWeight} ${options.fromColor} ${options.toColor} ${options.shadowColor}`
			: "border-[0.5px] from-surface-400/15 to-surface/15[box-shadow:inset_0_0_0_100vw_theme(colors.foreground)]";

	const style =
		!transparent &&
		"bg-foreground bg-linear-to-br  bg-clip-border [background-origin:border-box]";

	return (
		<div
			className={`flex items-center gap-3 px-[30px] py-3 min-h-[70px] ${style} rounded-[20px] border-transparent ${opts} ${className}`}
		>
			{children}
		</div>
	);
}

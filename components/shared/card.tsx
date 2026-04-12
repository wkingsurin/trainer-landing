interface IProps {
	className?: string;
	children: React.ReactNode | string;
	transparent?: boolean;
}

export default function Card({
	className,
	transparent,
	children,
}: IProps) {
	const style =
		!transparent &&
		"bg-foreground bg-linear-to-br  bg-clip-border [background-origin:border-box]";

	return (
		<div
			className={`flex items-center gap-3 px-[30px] py-3 min-h-[70px] ${style} rounded-[20px] border-transparent ${className}`}
		>
			{children}
		</div>
	);
}

interface IProps {
	className?: string;
	children: React.ReactNode | string;
}

export default function Card({ className, children }: IProps) {
	return (
		<div
			className={`flex items-center gap-[15px] px-[30px] py-3 min-h-[70px] bg-foreground rounded-[20px] border-transparent border-[0.5px] bg-linear-to-br from-surface-400/15 to-surface/15 bg-clip-border [background-origin:border-box] [box-shadow:inset_0_0_0_100vw_theme(colors.foreground)] ${className}`}
		>
			{children}
		</div>
	);
}

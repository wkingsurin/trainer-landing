interface IProps {
	className?: string;
	children: React.ReactNode | string;
	options: {
		fromColor: string;
		toColor: string;
		borderWeight: string;
		shadowColor: string;
	};
}

export default function Card({ className, options, children }: IProps) {
	return (
		<div
			className={`flex items-center gap-[15px] px-[30px] py-3 min-h-[70px] bg-foreground rounded-[20px] border-transparent bg-linear-to-br ${options.borderWeight} ${options.fromColor} ${options.toColor} bg-clip-border [background-origin:border-box] ${options.shadowColor} ${className}`}
		>
			{children}
		</div>
	);
}

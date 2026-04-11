interface IProps {
	id: string;
	className?: string;
	isMobile: boolean;
	children: React.ReactNode;
	px?: boolean;
	container?: boolean;
	centered?: boolean;
}

export default function Section({
	id,
	className,
	isMobile,
	px,
	container,
	centered = false,
	children,
}: IProps) {
	const style = isMobile ? "gap-[30px]" : "gap-[50px]";

	return (
		<section id={id} className={`flex flex-col ${style} ${className}`}>
			{container ? (
				<div
					className={`relative container mx-auto max-w-[1280px] h-full flex flex-col box-border ${px && "px-3"} ${style} ${
						centered && "items-center"
					}`}
				>
					{children}
				</div>
			) : (
				<>{children}</>
			)}
		</section>
	);
}

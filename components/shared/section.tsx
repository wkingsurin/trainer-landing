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
		<section id={id} className={`${px && "px-3"} flex flex-col ${style} ${className}`}>
			{container ? (
				<div
					className={`container mx-auto max-w-[1280px] flex flex-col ${style} ${
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

interface IProps {
	className?: string;
	isMobile?: boolean;
	children: React.ReactNode | string;
}

export default function SectionTitle({
	className,
	isMobile = true,
	children,
}: IProps) {
	const style = isMobile ? "text-[20px]" : "text-[32px]";

	return (
		<h2 className={`text-center font-bold ${style} ${className}`}>
			{children}
		</h2>
	);
}

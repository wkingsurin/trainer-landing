interface IProps {
	className?: string;
	children: React.ReactNode | string;
}

export default function SectionTitle({ className, children }: IProps) {
	return (
		<h2 className={`text-[20px] text-center font-bold ${className}`}>
			{children}
		</h2>
	);
}

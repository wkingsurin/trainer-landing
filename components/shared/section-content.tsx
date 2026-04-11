interface IProps {
	className?: string;
	gap?: string;
	children: React.ReactNode;
}

export default function SectionContent({ className, gap, children }: IProps) {
	const style = className ? className : ''
	const gapClass = (gap && `gap-[${gap}px]`) || "";

	return <div className={`flex flex-col ${gapClass} ${style}`}>{children}</div>;
}

interface IProps {
	gap?: string;
	children: React.ReactNode;
}

export default function SectionContent({ gap, children }: IProps) {
	const gapClass = (gap && `gap-[${gap}px]`) || "";

	return <div className={`flex flex-col ${gapClass}`}>{children}</div>;
}

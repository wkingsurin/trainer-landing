interface IProps {
	children: React.ReactNode | string;
}

export default function SectionTitle({ children }: IProps) {
	return <h2 className="text-[20px] text-center font-bold">{children}</h2>;
}

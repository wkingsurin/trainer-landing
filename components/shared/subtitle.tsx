interface IProps {
	children: React.ReactNode | string;
}

export default function Subtitle({ children }: IProps) {
	return <span className="text-center text-blue text-[14px]">{children}</span>;
}

interface IProps {
	isMobile?: boolean;
	children: React.ReactNode | string;
}

export default function Subtitle({ isMobile, children }: IProps) {
	const style = isMobile ? "text-[14px]" : "text-[16px]";

	return <span className={`text-center text-blue ${style}`}>{children}</span>;
}

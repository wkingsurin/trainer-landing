interface IProps {
	isMobile?: boolean;
	children: React.ReactNode | string;
}

export default function Subtitle({ isMobile, children }: IProps) {
	const style = isMobile ? "text-[16px]" : "text-[18px]";

	return <span className={`text-center text-surface-400 trakcing-[2%] font-exo_2 ${style}`}>{children}</span>;
}

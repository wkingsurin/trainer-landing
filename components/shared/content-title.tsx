interface IProps {
	className?: string;
	children: React.ReactNode | string;
}

export default function ContentTitle({ className, children }: IProps) {
	return <h2 className={`font-bold text-[14px] color-surface font-exo_2 ${className}`}>{children}</h2>
}

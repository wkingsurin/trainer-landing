interface IProps {
	className?: string;
	children: React.ReactNode | string;
}

export default function ContentTitle({ className, children }: IProps) {
	return <h2 className={`font-bold text-[14px] color-surface ${className}`}>{children}</h2>
}

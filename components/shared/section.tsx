interface IProps {
	className?: string;
	children: React.ReactNode;
	px?: boolean;
}

export default function Section({ className, px, children }: IProps) {
	return (
		<section className={`${className} ${px && "px-3"}`}>{children}</section>
	);
}

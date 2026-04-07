interface IProps {
	id: string;
	className?: string;
	children: React.ReactNode;
	px?: boolean;
}

export default function Section({ id, className, px, children }: IProps) {
	return (
		<section
			id={id}
			className={`${className} ${
				px && "px-3"
			} flex flex-col gap-[30px]`}
		>
			{children}
		</section>
	);
}

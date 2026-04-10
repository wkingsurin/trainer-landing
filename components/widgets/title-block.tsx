import Subtitle from "../shared/subtitle";
import SectionTitle from "../shared/section-title";

interface IProps {
	title: string;
	subtitle: string;
	className?: string;
	isMobile?: boolean;
}

export default function TitleBlock({
	className,
	isMobile = true,
	subtitle,
	title,
}: IProps) {
	const style = isMobile ? "gap-[10px]" : "max-w-[420px] box-content gap-5";

	return (
		<div className={`flex flex-col px-3 ${style} ${className}`}>
			<Subtitle isMobile={isMobile}>{subtitle}</Subtitle>
			<SectionTitle isMobile={isMobile}>{title}</SectionTitle>
		</div>
	);
}

import Subtitle from "../shared/subtitle";
import SectionTitle from "../shared/section-title";

interface IProps {
	title: string;
	subtitle?: string;
	className?: string;
	isMobile?: boolean;
}

export default function TitleBlock({
	className,
	isMobile = true,
	subtitle,
	title,
}: IProps) {
	const style = isMobile ? "gap-5" : "max-w-[420px] box-content gap-5";

	return (
		<div className={`flex flex-col px-3 items-center ${style} ${className}`}>
			<Subtitle isMobile={isMobile}>{subtitle}</Subtitle>
			<SectionTitle isMobile={isMobile}>{title}</SectionTitle>
			{!subtitle && (
				<span className="text-center max-w-[300px] text-surface-400 tracking-[2%]">
					Оставь заявку — я свяжусь с тобой и подберу план под твою цель
				</span>
			)}
		</div>
	);
}

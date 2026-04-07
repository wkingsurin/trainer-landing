import Subtitle from "../shared/subtitle";
import SectionTitle from "../shared/section-title";

interface IProps {
	title: string;
	subtitle: string;
}

export default function TitleBlock({ subtitle, title }: IProps) {
	return (
		<div className="flex flex-col gap-[10px] px-3">
			<Subtitle>{subtitle}</Subtitle>
			<SectionTitle>{title}</SectionTitle>
		</div>
	);
}

import Subtitle from "../shared/subtitle";
import Title from "../shared/title";

interface IProps {
	title: string;
	subtitle: string;
}

export default function TitleBlock({ subtitle, title }: IProps) {
	return (
		<div className="flex flex-col gap-[10px] px-3">
			<Subtitle>{subtitle}</Subtitle>
			<Title>{title}</Title>
		</div>
	);
}

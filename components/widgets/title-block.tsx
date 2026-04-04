import Subtitle from "../shared/subtitle";
import Title from "../shared/title";

export default function TitleBlock() {
	return (
		<div className="flex flex-col gap-[10px]">
			<Subtitle>проблема</Subtitle>
			<Title>Почему у тебя до сих пор нет результата?</Title>
		</div>
	);
}

import { Plus } from "lucide-react";
import Section from "./shared/section";
import SectionContent from "./shared/section-content";
import TitleBlock from "./widgets/title-block";

export default function FAQ() {
	const questions = [
		{
			id: "1",
			text: "«А если у меня мало времени?»",
			description:
				"Тренировки в неделю занимают не более 3х часов (3 дня / 1ч)",
		},
		{
			id: "2",
			text: "«А если у меня мало времени?»",
			description:
				"Тренировки в неделю занимают не более 3х часов (3 дня / 1ч)",
		},
		{
			id: "3",
			text: "«А если у меня мало времени?»",
			description:
				"Тренировки в неделю занимают не более 3х часов (3 дня / 1ч)",
		},
		{
			id: "4",
			text: "«А если у меня мало времени?»",
			description:
				"Тренировки в неделю занимают не более 3х часов (3 дня / 1ч)",
		},
		{
			id: "5",
			text: "«А если у меня мало времени?»",
			description:
				"Тренировки в неделю занимают не более 3х часов (3 дня / 1ч)",
		},
	];

	return (
		<Section px className="bg-foreground">
			<TitleBlock
				subtitle="вопросы"
				title="Ответы на вопросы, которые тебя останавливают"
			/>
			<SectionContent>
				<ul className="flex flex-col list-separator">
					{questions.map((question) => (
						<li
							key={question.id}
							className="flex justify-between items-center w-full min-h-[60px] p-[15px]"
						>
							<p>{question.text}</p>
							<Plus className="size-5" />
						</li>
					))}
				</ul>
			</SectionContent>
		</Section>
	);
}

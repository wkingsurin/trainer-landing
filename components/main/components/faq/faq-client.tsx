"use client";

import { useState } from "react";
import Question from "./question";
import { QuestionData } from "@/app/mappers/faq-mapper";

interface IProps {
	data: QuestionData[];
	isMobile: boolean;
}

export default function FAQClient({ data, isMobile }: IProps) {
	const [activeId, setActiveId] = useState<string | null>(null);

	const onClick = (id: string) =>
		setActiveId((prevId) => (prevId === id ? null : id));

	return (
		<ul className="flex flex-col list-separator">
			{data.map((question) => (
				<Question
					key={question.id}
					data={question}
					onClick={onClick}
					active={question.id === activeId}
					isMobile={isMobile}
				/>
			))}
		</ul>
	);
}

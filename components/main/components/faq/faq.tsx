"use client";

import Section from "../../../shared/section";
import SectionContent from "../../../shared/section-content";
import TitleBlock from "../../../widgets/title-block";
import { useFAQUIStore } from "@/lib/store/faq.store";
import Question from "./question";
import { useState } from "react";

interface IProps {
	isMobile: boolean;
}

export default function FAQ({ isMobile }: IProps) {
	const [activeId, setActiveId] = useState<string | null>(null);
	const questionIds = useFAQUIStore((s) => s.questionsById);
	const questions = Object.values(questionIds);

	const onClick = (id: string) => {
		setActiveId((prevId) => (prevId === id ? null : id));
	};

	return (
		<Section
			id="faq"
			px
			className="bg-foreground"
			isMobile={isMobile}
			container
			centered
		>
			<TitleBlock
				subtitle="вопросы"
				title="Ответы на вопросы, которые тебя останавливают"
				isMobile={isMobile}
				className="max-w-[480px]"
			/>
			<SectionContent className="max-w-[720px] w-full">
				<ul className="flex flex-col list-separator">
					{questions.map((question) => (
						<Question
							key={question.id}
							data={question}
							onClick={onClick}
							active={question.id === activeId}
							isMobile={isMobile}
						/>
					))}
				</ul>
			</SectionContent>
		</Section>
	);
}

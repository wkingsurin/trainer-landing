"use client";

import { IQuestion, useFAQUIStore } from "@/lib/store/faq.store";
import { useEffect } from "react";

interface IProps {
	questions: IQuestion[];
}

export default function FAQHydrator({ questions }: IProps) {
	const setQuestions = useFAQUIStore((s) => s.setQuestions);

	useEffect(() => {
		setQuestions(questions);
	}, [questions, setQuestions]);

	return null;
}

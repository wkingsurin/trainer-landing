import { create } from "zustand";

export interface IQuestion {
	id: string;
	text: string;
	answer: string;
}

interface FAQUIState {
	questionsById: Record<string, IQuestion>;

	setQuestions: (questions: IQuestion[]) => void;
}

export const useFAQUIStore = create<FAQUIState>()((set) => ({
	questionsById: {},

	setQuestions: (questions) => {
		const questionsById: Record<string, IQuestion> = {};

		questions.forEach((question) => {
			questionsById[question.id] = question;
		});

		set({ questionsById });
	},
}));

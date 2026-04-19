export type QuestionData = {
	id: string;
	text: string;
	answer: string;
	active: boolean;
};

export type FAQDTO = { id: string; text: string; answer: string };

export const mapFAQData = (dto: FAQDTO[]) => {
	return dto.map((obj) => {
		return { id: obj.id, text: obj.text, answer: obj.answer, active: false };
	});
};

import List from "./shared/list";

export default function Footer() {
	const contacts = [
		{ id: "1", text: "+7(123)-(456)-78-90" },
		{ id: "2", text: "email@example.ru" },
	];
	const info = [
		{ id: "problems", text: "Проблема" },
		{ id: "solution", text: "Решение" },
		{ id: "advantage", text: "Преимущества" },
		{ id: "about", text: "О тренере" },
		{ id: "offers", text: "Предложение" },
		{ id: "results", text: "Результаты" },
		{ id: "courses", text: "Курсы" },
		{ id: "faq", text: "Вопросы" },
		{ id: "feedback", text: "Обратная связь" },
	];
	const containerStyle = "container mx-auto max-w-[1280px] px-3";
	const desktopStyle = 'md:flex-row'

	return (
		<footer className={`bg-foreground py-[30px]`}>
			<div className={`flex flex-col ${desktopStyle} gap-[30px] ${containerStyle}`}>
				<List items={contacts} title="Контакты" type="contacts" />
				<List items={info} title="Информация" type="info" />
			</div>
		</footer>
	);
}

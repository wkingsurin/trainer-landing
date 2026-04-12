import List from "./shared/list";

export default function Footer() {
	const contacts = [
		{ id: "1", text: "+7(123)-(456)-78-90" },
		{ id: "2", text: "email@example.ru" },
	];
	const services = [
		{ id: "offers", text: "Предложение" },
		{ id: "courses", text: "Курсы" },
	];
	const info = [
		{ id: "about", text: "О тренере" },
		{ id: "advantage", text: "Преимущества" },
		{ id: "results", text: "Результаты" },
		{ id: "faq", text: "Вопросы" },
		{ id: "feedback", text: "Обратная связь" },
	];
	const containerStyle = "container mx-auto max-w-[1280px] px-3";
	const desktopStyle = 'md:flex-row justify-center'

	return (
		<footer className={`bg-foreground py-[90px]`}>
			<div className={`flex flex-col ${desktopStyle} gap-[50px] ${containerStyle}`}>
				<List items={contacts} title="Контакты" type="contacts" />
				<List items={services} title="Услуги" type="services" />
				<List items={info} title="Информация" type="info" />
			</div>
		</footer>
	);
}

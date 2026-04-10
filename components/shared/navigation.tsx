import List from "./list";

export default function Navigation() {
	const items = [
		{ id: "about", text: "О тренере" },
		{ id: "services", text: "Услуги" },
		{ id: "offers", text: "Тарифы" },
		{ id: "results", text: "Результаты" },
		{ id: "courses", text: "Курсы" },
		{ id: "contacts", text: "Контакты" },
	];

	return <List type="navigation" items={items}></List>;
}

import List from "./list";

export default function Navigation() {
	const items = [
		{ id: "about", text: "О тренере" },
		{ id: "offers", text: "Тарифы" },
		{ id: "results", text: "Результаты" },
		{ id: "courses", text: "Курсы" },
		{ id: "feedback", text: "Контакты" },
	];

	return <List type="navigation" items={items}></List>;
}

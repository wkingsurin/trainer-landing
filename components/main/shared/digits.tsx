import Card from "@/components/shared/card";

export default function Digits() {
	const cards = [
		{ id: "1", worth: "100+", description: "клиентов получили результат" },
		{ id: "2", worth: "5 лет", description: "практики" },
		{ id: "3", worth: "90%", description: "успешных кейсов" },
	];

	const titleStyle = "font-bold text-[32px] text-accent font-exo_2";
	const textStyle = "text-base tracking-[3%] text-surface-400";

	return (
		<div className="flex gap-10 flex-col md:flex-row  md:gap-5 items-center">
			{cards.map((card) => {
				return (
					<Card key={card.id} className="w-full flex-col md:w-1/3 p-[15px]! text-center" transparent>
						<span className={`${titleStyle}`}>{card.worth}</span>
						<p className={`${textStyle}`}>{card.description}</p>
					</Card>
				);
			})}
		</div>
	);
}

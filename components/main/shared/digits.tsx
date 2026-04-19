import Card from "@/components/shared/card";

import { ABOUT_DIGITS_DATA } from "@/app/utils/config";

export default function Digits() {
	const data = Object.values(ABOUT_DIGITS_DATA);

	const titleStyle = "font-bold text-[32px] text-accent font-exo_2";
	const textStyle = "text-base tracking-[3%] text-surface-400";

	return (
		<div className="flex gap-10 flex-col md:flex-row  md:gap-5 items-center">
			{data.map((card) => {
				return (
					<Card
						key={card.id}
						className="w-full flex-col md:w-1/3 p-[15px]! text-center"
						transparent
					>
						<span className={`${titleStyle}`}>{card.worth}</span>
						<p className={`${textStyle}`}>{card.description}</p>
					</Card>
				);
			})}
		</div>
	);
}

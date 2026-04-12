import Image from "next/image";
import BaseCard from "./base-card";

interface IProps {
	card: {
		id: string;
		title?: string;
		description: string | { text: string }[];
	};
	showId?: boolean;
	square?: boolean;
	isMobile?: boolean;
}

export default function ProblemCard({
	card,
	showId,
	square,
	isMobile,
}: IProps) {
	const cardStyle = isMobile ? "min-h-[70px]" : "min-h-[150px] font-bold";
	const numberStyle = isMobile
		? "text-[36px] text-accent"
		: "text-[36px] text-accent font-semibold";
	const imageStyle = isMobile
		? "object-cover object-[center_-30px]"
		: "object-cover object-top";

	const idIsOdd = (id: string) => Number(id) % 2 !== 0;

	return (
		<BaseCard
			key={card.id}
			className={`card relative group overflow-hidden gap-[30px] tracking-[2%] font-exo_2 ${
				(square && "aspect-square") || "flex-1"
			} ${cardStyle}`}
		>
			<div className="absolute overlay left-0 top-0 z-1001 w-full h-full"></div>
			{showId && <p className={`${numberStyle} z-1000`}>{card.id}</p>}
			<p className={`z-1000 text-[18px] ${isMobile && "text-[14px]"}`}>
				{typeof card.description === "string" && card.description}
			</p>
			{idIsOdd(card.id) && (
				<Image
					src={`/pain-${card.id}.jpg`}
					alt="Girl"
					fill
					className={`absolute z-999 ${imageStyle} rounded-[16px] opacity-20 scale-105 transition duration-[0.7s] grayscale group-hover:opacity-20 group-hover:scale-100`}
				/>
			)}
		</BaseCard>
	);
}

import Image from "next/image";
import BaseCard from "./base-card";

interface IProps {
	cards: { id: string; text: string; worth?: string | React.ReactNode }[];
	showId?: boolean;
	showWorth?: boolean;
	square?: boolean;
	isMobile?: boolean;
	className?: string;
	type: "advantage" | "problems" | "solution" | "services" | "about";
}

export default function CardsBlock({
	cards,
	showId,
	showWorth,
	square,
	isMobile,
	className,
	type,
}: IProps) {
	const blockStyle = isMobile ? "flex-col" : "gap-5 flex-row z-1200 w-full";
	const cardStyle = isMobile ? "min-h-[70px]" : "min-h-[120px] font-bold";
	const numberStyle = isMobile
		? "text-[36px] text-accent"
		: "text-[36px] text-accent font-semibold";
	const imageStyle = isMobile
		? "object-cover object-[center_-30px]"
		: "object-cover object-top";

	const idIsOdd = (id: string) => Number(id) % 2 !== 0;

	const getCards = () =>
		cards.map((card) => {
			const worth =
				typeof card.worth === "string" ? (
					<p
						className={`font-bold ${
							card.worth?.toLowerCase().includes("поддержка")
								? "text-[20px]"
								: "text-[24px]"
						}`}
					>
						{card.worth}
					</p>
				) : (
					card.worth
				);

			return (
				<BaseCard
					key={card.id}
					className={`card relative group overflow-hidden ${
						showWorth &&
						`flex flex-col items-center justify-center gap-[15px] min-h-[110px] py-[15px]! px-[20px]! text-center`
					} ${(square && "aspect-square") || "flex-1"} ${cardStyle}`}
				>
					{showId && <p className={numberStyle}>{card.id}</p>}
					{showWorth && worth}
					<p className={`${showWorth && "text-[14px]"}`}>{card.text}</p>
					{type === "problems" && idIsOdd(card.id) && (
						<Image
							src={`/pain-${card.id}.jpg`}
							alt="Girl"
							fill
							className={`absolute ${imageStyle} rounded-[16px] opacity-0 scale-105 transition duration-[0.7s] grayscale group-hover:opacity-20 group-hover:scale-100`}
						/>
					)}
				</BaseCard>
			);
		});

	return (
		<div className={`flex gap-[10px] ${blockStyle} ${className}`}>
			{getCards()}
		</div>
	);
}

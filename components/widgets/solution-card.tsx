import Image from "next/image";
import BaseCard from "./base-card";
import ContentTitle from "../shared/content-title";

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

export default function SolutionCard({
	card,
	showId,
	square,
	isMobile,
}: IProps) {
	const cardStyle = isMobile
		? "min-h-[70px]"
		: "min-h-[192px] font-bold py-[30px]";
	const numberStyle = isMobile
		? "text-[36px] text-accent"
		: "text-[36px] text-accent font-semibold";
	const imageStyle = isMobile
		? "object-cover object-[center_-30px]"
		: "object-cover object-top";

	const hasBackground = card.id === "1" || card.id === "4";

	return (
		<BaseCard
			key={card.id}
			className={`card relative group overflow-hidden flex-col items-start gap-[15px] ${
				(square && "aspect-square") || "flex-1"
			} ${cardStyle}`}
		>
			<div className="flex gap-[30px] items-center z-1000">
				{showId && (
					<p className={`min-w-[25px] leading-[44px] font-exo_2 ${numberStyle}`}>
						{card.id}
					</p>
				)}
				<ContentTitle className="text-[18px]">{card.title}</ContentTitle>
			</div>

			<ul className="relative z-1000 ml-[55px]">
				{typeof card.description === "object" &&
					card.description.map((data) => (
						<li key={data.text} className="font-normal">
							{data.text}
						</li>
					))}
			</ul>

			<div className="overlay absolute left-0 top-0 z-1001 w-full h-full"></div>
			{hasBackground && (
				<Image
					src={`/-${card.id}.jpg`}
					alt="Girl"
					fill
					className={`absolute z-999 ${imageStyle} rounded-[16px] opacity-20 scale-105 transition duration-[0.7s] grayscale group-hover:opacity-20 group-hover:scale-100`}
				/>
			)}
		</BaseCard>
	);
}

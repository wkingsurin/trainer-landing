import BaseCard from "./base-card";

interface IProps {
	card: {
		id: string;
		title?: string;
		description: string | { text: string }[];
		worth?: string | React.ReactNode;
	};
	showWorth?: boolean;
	square?: boolean;
	isMobile?: boolean;
}

export default function AdvantageCard({
	card,
	showWorth,
	square,
	isMobile,
}: IProps) {
	const cardStyle = isMobile ? "min-h-[70px]" : "min-h-[120px] font-bold";

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
			className={`card relative flex flex-col justify-center group overflow-hidden font-normal ${
				(square && "aspect-square") || "flex-1"
			} ${cardStyle}`}
		>
			{showWorth && worth}
			<p className={`${showWorth && "text-[14px]"}`}>
				{typeof card.description === "string" && card.description}
			</p>
		</BaseCard>
	);
}

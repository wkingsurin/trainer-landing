"use client";

import { motion, Variants } from "framer-motion";
import BaseCard from "./base-card";

interface IProps {
	card: {
		id: string;
		title?: string;
		description: string | { text: string }[];
		worth?: string | React.ReactNode;
	};
	showWorth?: boolean;
	isMobile?: boolean;
}

export default function AdvantageCard({ card, showWorth, isMobile }: IProps) {
	const cardStyle = isMobile
		? "min-h-[150px]"
		: "flex-1 min-h-[150px] font-bold";

	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			y: isMobile ? 0 : 30,
			x: isMobile ? -50 : 0,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 15,
			},
		},
	};

	const worth =
		typeof card.worth === "string" ? (
			<p
				className={`font-bold font-exo_2 ${
					card.worth?.toLowerCase().includes("поддержка")
						? "text-[22px]"
						: "text-[26px]"
				}`}
			>
				{card.worth}
			</p>
		) : (
			card.worth
		);

	return (
		<motion.div
			variants={cardVariants}
			className={`min-h-[150px] ${isMobile ? "w-full" : "w-1/4"}`}
		>
			<BaseCard
				className={`card relative flex flex-col justify-center group overflow-hidden font-normal ${cardStyle}`}
			>
				{showWorth && worth}
				<p
					className={`${
						showWorth &&
						"text-[16px] text-surface-500 tracking-[2%] text-center"
					}`}
				>
					{typeof card.description === "string" && card.description}
				</p>
			</BaseCard>
		</motion.div>
	);
}

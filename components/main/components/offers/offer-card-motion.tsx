"use client";

import { motion, Variants } from "framer-motion";

interface IProps {
	animate?: boolean;
	index: string;
	children: React.ReactNode;
	isMobile?: boolean;
}

export default function OfferCardMotion({
	animate,
	index,
	children,
	isMobile,
}: IProps) {
	if (!animate) {
		return <div className="relative flex w-1/4">{children}</div>;
	}

	const stepDuration = 0.7;
	const delay = Number(index) * stepDuration;
	const delayNext = delay + 0.4;

	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			x: isMobile ? -50 : -50,
			scale: 0.97,
		},
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				x: { delay, type: "spring", stiffness: 100, damping: 20 },
				scale: {
					delay: delayNext,
					type: "spring",
					stiffness: 80,
					damping: 15,
				},
				opacity: { delay, duration: 0.3 },
			},
		},
	};

	return (
		<motion.div
			variants={cardVariants}
			initial={"hidden"}
			whileInView={"visible"}
			className={`relative flex w-1/4`}
			style={{ zIndex: `${1200 - Number(index)}` }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
}

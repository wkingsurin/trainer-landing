import { useUIStore } from "@/lib/store/ui.store";
import { motion } from "framer-motion";

type Type = "advantage" | "problems" | "solution";

interface IProps {
	className?: string;
	isMobile?: boolean;
	type: Type;
	visited: boolean;
	children: React.ReactNode;
	isHero?: boolean;
}

export default function CardsBlockMotion({
	className,
	isMobile,
	type,
	visited,
	children,
	isHero,
}: IProps) {
	const appReady = useUIStore((s) => s.appReady);

	const blockStyle = isMobile
		? "flex flex-col gap-[30px]"
		: type === "solution"
		? "grid grid-cols-2 gap-5"
		: "flex flex-row gap-5 z-1200";

	const variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.3,
			},
		},
	};

	if (visited) {
		return (
			<div className={`w-full ${blockStyle} ${className}`}>{children}</div>
		);
	}

	return (
		<motion.div
			variants={variants}
			initial={"hidden"}
			animate={isHero && appReady && "visible"}
			whileInView={!visited && appReady ? "visible" : "hidden"}
			viewport={{ once: true, amount: 0.2 }}
			className={`w-full ${blockStyle} ${className}`}
		>
			{children}
		</motion.div>
	);
}

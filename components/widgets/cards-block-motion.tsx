import { useUIStore } from "@/lib/store/ui.store";
import { motion } from "framer-motion";

type Type = "advantage" | "problems" | "solution";

interface IProps {
	className?: string;
	isMobile?: boolean;
	type: Type;
	children: React.ReactNode;
}

export default function CardsBlockMotion({
	className,
	isMobile,
	type,
	children,
}: IProps) {
	const isLoading = useUIStore((s) => s.isLoading);

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

	const animate = (type: Type) =>
		type === "advantage"
			? { animate: !isLoading ? "visible" : "hidden" }
			: { whileInView: !isLoading ? 'visible' : 'hidden' };

	return (
		<motion.div
			initial="hidden"
			variants={variants}
			{...animate(type)}
			// animate={!isLoading ? "visible" : "hidden"}
			viewport={{ once: true, amount: 0.2 }}
			className={`w-full ${blockStyle} ${className}`}
		>
			{children}
		</motion.div>
	);
}

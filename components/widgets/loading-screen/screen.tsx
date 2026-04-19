"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { motion } from "framer-motion";

export default function Screen() {
	const setAppReady = useUIStore((s) => s.setAppReady);

	return (
		<div className="relative z-1300 flex flex-col gap-10 max-w-[720px] h-full items-center justify-center bg-background">
			<p className="text-[18px] text-accent">Загружаю контент</p>
			<div className="w-[300px] h-[3px] bg-surface rounded overflow-hidden">
				<motion.div
					initial={{ x: "-100%" }}
					animate={{ x: "0%" }}
					transition={{ duration: 2.5, ease: "circOut" }}
					className="w-full h-full bg-accent rounded"
					onAnimationComplete={() => setAppReady(true)}
				></motion.div>
			</div>
		</div>
	);
}

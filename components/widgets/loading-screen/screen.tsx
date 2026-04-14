"use client";

import { motion } from "framer-motion";

export default function Screen() {
	return (
		<motion.div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100dvh",
				display: "flex",
				justifyContent: "center",
				background: "oklch(0.1708 0.0103 285.25)",
				alignItems: "center",
				zIndex: 2100,
			}}
			initial={{
				opacity: 1,
			}}
			animate={{ opacity: 0 }}
			exit={{ opacity: 0, zIndex: 999 }}
			transition={{ delay: 3, duration: 0.5, ease: 'easeInOut' }}
		>
			<div className="relative z-1300 flex flex-col gap-10 max-w-[720px] h-full items-center justify-center bg-background">
				<p className="text-[18px] text-accent">Загружаю контент</p>
				<div className="w-[300px] h-[3px] bg-surface rounded overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						animate={{ x: '0%' }}
						exit={{ translateX: -5 }}
						transition={{ duration: 2.5, ease: "circOut" }}
            className="w-full h-full bg-accent rounded"
					>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

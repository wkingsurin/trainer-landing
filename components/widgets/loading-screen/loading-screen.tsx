"use client";

import { motion, AnimatePresence } from "framer-motion";
import Screen from "./screen";
import { useUIStore } from "@/lib/store/ui.store";
import { useEffect } from "react";
import { setHasVisited } from "@/app/utils/client-cookie";

export default function LoadingScreen() {
	const appReady = useUIStore((s) => s.appReady);

	useEffect(() => {
		if (appReady) {
			const unlockTimer = setTimeout(() => {
				document.body.style.overflow = "auto";
			}, 600);

			return () => clearTimeout(unlockTimer);
		}
	}, [appReady]);

	return (
		<AnimatePresence mode="wait">
			{!appReady && (
				<motion.div
					key="loader"
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, scale: 1.05 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="loading-screen fixed top-0 left-0 w-full h-[100dvh] flex justify-center bg-background items-center z-[9999]"
					onAnimationComplete={setHasVisited}
				>
					<Screen />
				</motion.div>
			)}
		</AnimatePresence>
	);
}

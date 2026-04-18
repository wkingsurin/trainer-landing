"use client";

import { motion, AnimatePresence } from "framer-motion";
import Screen from "./screen";
import { useUIStore } from "@/lib/store/ui.store";
import { useEffect } from "react";
import { setCookie } from "@/app/cookie-action";

export default function LoadingScreen() {
	const appReady = useUIStore((s) => s.appReady);
	const setAppReady = useUIStore((s) => s.setAppReady);

	useEffect(() => {
		const timer = setTimeout(async () => {
			setAppReady(true);
			setCookie();
		}, 3500);

		return () => {
			clearTimeout(timer);
		};
	}, [setAppReady]);

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
					key="loader"
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="loading-screen"
				>
					<Screen key="loader" />
				</motion.div>
			)}
		</AnimatePresence>
	);
}

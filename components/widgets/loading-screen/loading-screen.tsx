"use client";

import { AnimatePresence } from "framer-motion";
import Screen from "./screen";
import { useUIStore } from "@/lib/store/ui.store";
import { useEffect } from "react";

export default function LoadingScreen() {
	const isLoading = useUIStore((s) => s.isLoading);

	useEffect(() => {
		const scrollTimer = setTimeout(
			() => (document.body.style.overflow = "auto"),
			3000
		);
		const timer = setTimeout(
			() => {
				useUIStore.getState().updateIsLoading(false);
			},

			3500
		);
		return () => {
			clearTimeout(timer);
			clearTimeout(scrollTimer);
		};
	}, []);

	return (
		<AnimatePresence mode="wait">
			{isLoading && <Screen key="loader" />}
		</AnimatePresence>
	);
}

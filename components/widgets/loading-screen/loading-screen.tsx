"use client";

import { AnimatePresence } from "framer-motion";
import Screen from "./screen";
import { useUIStore } from "@/lib/store/ui.store";
import { useEffect } from "react";
import { setCookie } from "@/app/cookie-action";

export default function LoadingScreen() {
	const setAppReady = useUIStore((s) => s.setAppReady);

	useEffect(() => {
		document.body.style.overflowY = "hidden";

		const scrollTimer = setTimeout(() => {
			document.body.style.overflowY = "auto";
			setAppReady(true);
		}, 3000);
		const timer = setTimeout(async () => {
			setCookie();
		}, 3500);

		return () => {
			clearTimeout(timer);
			clearTimeout(scrollTimer);
		};
	}, [setAppReady]);

	return (
		<AnimatePresence mode="wait">
			<Screen key="loader" />
		</AnimatePresence>
	);
}

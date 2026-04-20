"use client";

import { useEffect } from "react";

export default function ScrollBehaviorHydration() {
	useEffect(() => {
		window.document.documentElement.style.scrollBehavior = "smooth";
	}, []);

	return null;
}

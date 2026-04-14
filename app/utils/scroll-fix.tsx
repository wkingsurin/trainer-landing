"use client";

import { useEffect } from "react";

export default function ScrollFix() {
	useEffect(() => {
		const updateScrollWidth = () => {
			const scrollbarWidth = window.innerWidth - document.body.clientWidth;
			document.body.style.width = `${window.innerWidth - scrollbarWidth}px`;
		};
		updateScrollWidth();
	}, []);

	return null;
}

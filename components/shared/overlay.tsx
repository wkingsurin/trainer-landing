"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { useEffect } from "react";

interface IProps {
	children: React.ReactNode;
}

export default function Overlay({ children }: IProps) {
	const open = useUIStore((s) => s.modalOpen);
	const setOpen = useUIStore((s) => s.setModalOpen);

	const hideOverlay = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		}
		if (!open) {
			document.body.style.overflow = "auto";
		}
	}, [open, setOpen]);

	if (!open) return null;

	return (
		<div
			className="fixed z-8888 top-0 left-0 w-full h-[100dvh] flex flex-col gap-[50px] items-center justify-center bg-background-400 backdrop-blur"
			onClick={hideOverlay}
		>
			{children}
		</div>
	);
}

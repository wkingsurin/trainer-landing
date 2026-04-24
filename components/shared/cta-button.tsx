"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { Button } from "../ui/button";

interface IProps {
	className?: string;
	isMobile?: boolean;
	children: React.ReactNode | string;
	type: "normal" | "medium" | "huge";
	form?: boolean;
}

export default function CTAButton({
	className,
	isMobile,
	type,
	children,
	form,
}: IProps) {
	const onClick = () => {
		useUIStore.getState().setModalOpen(true);
	};

	function getSize() {
		let size = "w-full min-w-[50px] h-[50px]";

		switch (type) {
			case "normal": {
				if (!isMobile) {
					size = "w-auto min-w-[180px] min-h-[50px]";
					return size;
				}
			}
			case "medium": {
				if (!isMobile) {
					size = "w-auto min-w-[320px] min-h-[50px]";
					return size;
				}
			}
			case "huge": {
				if (!isMobile) {
					size = "w-auto min-w-[320px] min-h-[60px] text-[18px]";
					return size;
				}
			}
		}
	}

	if (form) {
		return (
			<Button
				className={`flex items-center justify-center bg-accent ${
					isMobile ? "w-full min-h-[60px]" : getSize()
				} py-[10px] border-[0.5px] border-transparent bg-linear-to-br from-surface-400/25 to-surface/25 bg-clip-border [background-origin:border-box] [box-shadow:inset_0_0_0_100vw_theme(colors.accent)] text-[16px] font-medium rounded-[16px] tracking-[2%] ${className}`}
				type="submit"
			>
				{children}
			</Button>
		);
	}

	return (
		<Button
			className={`flex items-center justify-center bg-accent ${
				isMobile ? "w-full min-h-[60px]" : getSize()
			} py-[10px] border-[0.5px] border-transparent bg-linear-to-br from-surface-400/25 to-surface/25 bg-clip-border [background-origin:border-box] [box-shadow:inset_0_0_0_100vw_theme(colors.accent)] text-[16px] font-medium rounded-[16px] tracking-[2%] ${className}`}
			onClick={onClick}
		>
			{children}
		</Button>
	);
}

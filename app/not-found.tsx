"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="fixed top-0 left-0 w-full h-[100dvh] flex justify-center bg-background items-center z-[9999] h-[100dvh]">
			<div className="relative z-1300 flex flex-col gap-10 max-w-[720px] h-full items-center justify-center bg-background">
				<div className="flex flex-col items-center gap-[6px] text-[18px] text-accent">
					<p className="text-[24px] text-accent">Ошибка 404</p>
					<p className="text-[18px] text-surface">Страница не найдена</p>
				</div>
				<Link href="/">
					<Button
						className={`flex items-center justify-center h-[60px] min-w-[240px] bg-accent py-[10px] border-[0.5px] border-transparent bg-linear-to-br from-surface-400/25 to-surface/25 bg-clip-border [background-origin:border-box] [box-shadow:inset_0_0_0_100vw_theme(colors.accent)] text-[16px] font-medium rounded-[16px] tracking-[2%]`}
					>
						Вернуться на главную
					</Button>
				</Link>
			</div>
		</div>
	);
}

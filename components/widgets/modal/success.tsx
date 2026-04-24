"use client";

import Overlay from "@/components/shared/overlay";
import { MailCheck } from "lucide-react";

export default function Success() {
	return (
		<Overlay>
			<div
				className="flex flex-col items-center justify-center gap-[30px] p-[30px] min-h-[180px] min-w-[480px] bg-foreground rounded-[20px]"
				onClick={(e) => e.stopPropagation()}
			>
				<MailCheck className="size-9 stroke-accent" />
				<div className="flex flex-col gap-[16px] items-center tracking-[3%]">
					<span className="font-exo_2 text-[18px] font-bold">Заявка успешо отправлена!</span>
					<p>В течении 5 минут мы с вами свяжемся!</p>
				</div>
			</div>
		</Overlay>
	);
}

"use client";

import Overlay from "@/components/shared/overlay";
import Form from "../form";
import Success from "./success";
import { useState } from "react";

interface IProps {
	isMobile: boolean;
}

export default function Modal({ isMobile }: IProps) {
	const [sending, setSending] = useState<boolean>(false);

	return (
		<Overlay>
			{sending && <Success />}
			{!sending && (
				<>
					<span
						className="text-center max-w-[440px] text-[24px] text-surface tracking-[2%]"
						onClick={(e) => e.stopPropagation()}
					>
						Оставь заявку — я свяжусь с тобой и подберу план под твою цель
					</span>
					<Form isMobile={isMobile} modal />
				</>
			)}
		</Overlay>
	);
}

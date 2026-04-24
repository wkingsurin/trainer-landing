"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CTAButton from "../shared/cta-button";
import Label from "../shared/label";
import { formSchema, FormValues } from "@/app/schemas/schema";

interface IProps {
	isMobile?: boolean;
	modal?: boolean;
}

export default function Form({ isMobile, modal }: IProps) {
	const { control, handleSubmit } = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: { userName: "", phone: "", email: "" },
	});

	const devicesStyle = isMobile ? "px-3 py-5" : "rounded-[20px] p-[30px]";
	const style = "text-surface bg-foreground max-w-[720px] w-full";
	const CTAType = isMobile ? "huge" : "medium";

	const formStyle = isMobile ? "gap-[20px]" : "gap-[30px] items-end";

	const onSubmit = () => {
		console.log(`[submitted]`);
	};

	return (
		<div
			className={`flex flex-col gap-4 ${style} ${devicesStyle}`}
			onClick={(e) => e.stopPropagation()}
		>
			<form
				className={`flex flex-col ${formStyle}`}
				onSubmit={handleSubmit(onSubmit, (errros) => console.log(errros))}
			>
				<Label
					id={modal ? "m-user-name" : "user-name"}
					type="text"
					placeholder="Как тебя зовут?"
					isMobile={isMobile}
					name="userName"
					control={control}
				/>
				<Label
					id={modal ? "m-phone" : "phone"}
					type="tel"
					placeholder="Номер телефона"
					isMobile={isMobile}
					name="phone"
					control={control}
				/>
				<Label
					id={modal ? "m-email" : "email"}
					type="email"
					placeholder="Email"
					isMobile={isMobile}
					name="email"
					control={control}
				/>
				<CTAButton type={CTAType} form>
					Отправить
				</CTAButton>
			</form>
		</div>
	);
}

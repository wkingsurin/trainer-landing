import CTAButton from "../shared/cta-button";
import { Input } from "../ui/input";

export default function Form() {
	return (
		<div className="bg-secondary flex flex-col gap-4 px-3 py-5 text-foreground">
			<span className="text-center">
				Оставь заявку — я свяжусь с тобой и подберу план под твою цель
			</span>
			<form className="flex flex-col gap-3">
				<label
					htmlFor="user-name"
					className="flex flex-col gap-1 text-[14px] font-bold"
				>
					Имя
					<Input
						id="user-name"
						placeholder="Как тебя зовут?"
						className="min-h-10 font-normal border-[0.5px] border-background-200  focus-visible:ring-accent focus-visible:ring-[1.5px]   focus:border-[1px] bg-white  "
					/>
				</label>
				<label
					htmlFor="user-phone"
					className="flex flex-col gap-1 text-[14px] font-bold"
				>
					Тел.
					<Input
						id="phone"
						placeholder="Номер телефона"
						className="min-h-10 font-normal border-[0.5px] border-background-200  focus-visible:ring-accent focus-visible:ring-[1.5px]   focus:border-[1px] bg-white"
					/>
				</label>
				<label
					htmlFor="user-email"
					className="flex flex-col gap-1 text-[14px] font-bold"
				>
					<span className="flex gap-1">
						Email
						<p className="font-normal text-foreground-500">(не обязательно)</p>
					</span>
					<Input
						id="user-email"
						placeholder="email@example.ru"
						className="min-h-10 font-normal border-[0.5px] border-background-200  focus-visible:ring-accent focus-visible:ring-[1.5px]  focus:border-[1px] bg-white"
					/>
				</label>
				<CTAButton>Отправить</CTAButton>
			</form>
		</div>
	);
}

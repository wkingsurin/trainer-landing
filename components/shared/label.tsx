import { FormValues } from "@/app/schemas/schema";
import { Input } from "../ui/input";
import { Control, Controller } from "react-hook-form";

interface IProps {
	id: string;
	name: keyof FormValues;
	control: Control<FormValues>;
	type: string;
	placeholder: string;
	isMobile?: boolean;
}

export default function Label({
	isMobile,
	id,
	placeholder,
	type,
	control,
	name,
}: IProps) {
	const labelStyle =
		"text-[18px] text-surface-400 w-full focus-within:text-accent";
	const inputStyle = isMobile
		? "text-[18px]! placeholder:text-[18px]"
		: "text-[20px]! placeholder:text-[20px]";

	function labelText(type: string) {
		switch (type) {
			case "text": {
				return "Имя";
			}
			case "tel": {
				return "Тел.";
			}
			case "email": {
				return "Email";
			}
		}
	}

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<label
					htmlFor={id}
					className={`relative flex flex-col gap-3 font-bold ${labelStyle}`}
				>
					{labelText(type)}
					<Input
						{...field}
						id={id}
						className={`h-[60px] font-normal rounded-[16px] p-[18px] border-[0.5px] ${
							error ? "border-red-500" : "border-background-200"
						}  focus-visible:ring-accent focus-visible:ring-[1.5px]  focus:border-[1px] bg-white text-foreground placeholder:font-light placeholder:text-foreground-500 ${inputStyle}`}
						type={type}
						placeholder={placeholder}
						required
					/>
					{error && (
						<span className="absolute bottom-[-24px] text-red-500 text-sm font-normal">
							{error.message}
						</span>
					)}
				</label>
			)}
		/>
	);
}

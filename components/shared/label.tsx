import { Input } from "../ui/input";

interface IProps {
	id: string;
	type: string;
	placeholder: string;
	isMobile?: boolean;
}

export default function Label({ isMobile, id, placeholder, type }: IProps) {
	const labelStyle = "text-[18px] text-surface-400 w-full";
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
		<label
			htmlFor={id}
			className={`flex flex-col gap-3 font-bold ${labelStyle}`}
		>
			{labelText(type)}
			<Input
				id={id}
				className={`h-[60px] font-normal rounded-[16px] p-[18px] border-[0.5px] border-background-200  focus-visible:ring-accent focus-visible:ring-[1.5px]  focus:border-[1px] bg-white text-foreground placeholder:font-light placeholder:text-foreground-500 ${inputStyle}`}
				type={type}
				placeholder={placeholder}
				required
			/>
		</label>
	);
}

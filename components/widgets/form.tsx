import CTAButton from "../shared/cta-button";
import Label from "../shared/label";

interface IProps {
	isMobile?: boolean;
}

export default function Form({ isMobile }: IProps) {
	const devicesStyle = isMobile ? "px-3 py-5" : "rounded-[20px] p-[30px]";
	const style = "text-surface bg-foreground max-w-[720px] w-full";
	const CTAType = isMobile ? "huge" : "medium";

	const formStyle = isMobile ? "gap-[20px]" : "gap-[30px] items-end";

	return (
		<div className={`flex flex-col gap-4 ${style} ${devicesStyle}`}>
			<form className={`flex flex-col ${formStyle}`}>
				<Label
					id="user-name"
					type="text"
					placeholder="Как тебя зовут?"
					isMobile={isMobile}
				/>
				<Label
					id="phone"
					type="tel"
					placeholder="Номер телефона"
					isMobile={isMobile}
				/>
				<Label
					id="email"
					type="email"
					placeholder="Email"
					isMobile={isMobile}
				/>
				<CTAButton type={CTAType}>Отправить</CTAButton>
			</form>
		</div>
	);
}

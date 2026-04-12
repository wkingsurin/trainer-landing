import { ArrowLeft, ArrowRight } from "lucide-react";
import { forwardRef } from "react";

interface IProps {
	direction: "left" | "right";
}

export const Button = forwardRef<HTMLDivElement, IProps>(
	({ direction }, ref) => {
		const buttonType = direction === "left" ? "prev" : "next";
		const directionStyle =
			direction === "left" ? "left-[-25px]" : "right-[-25px]";
		const style = "transition-all ease-in-out delay-[0.5s] animate-shadow-fade";

		return (
			<>
				<div
					className={`${buttonType}-button absolute z-1200 flex items-center justify-center w-[50px] h-[50px] bg-accent rounded-[50%] ${directionStyle} ${style}`}
					style={{ top: `calc(50% - 25px)` }}
					ref={ref}
				>
					{buttonType === "prev" ? <ArrowLeft /> : <ArrowRight />}
				</div>
			</>
		);
	}
);

Button.displayName = "Button";

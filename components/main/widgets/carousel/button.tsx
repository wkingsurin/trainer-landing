import { ArrowLeft, ArrowRight } from "lucide-react";
import { forwardRef } from "react";

interface IProps {
	direction: "left" | "right";
	active: boolean;
}

export const Button = forwardRef<HTMLDivElement, IProps>(
	({ direction, active }, ref) => {
		const buttonType = direction === "left" ? "prev" : "next";
		const directionStyle =
			direction === "left"
				? "left-[12px] xl:left-[-25px]"
				: "right-[12px] xl:right-[-25px]";
		const style = "transition-all ease-in-out duration-300";
		const isActive = active
			? "opacity-100 pointer-events-auto"
			: "opacity-0! pointer-events-none";

		return (
			<div ref={ref}>
				<div
					className={`${buttonType}-button absolute z-1200 flex items-center justify-center w-[50px] h-[50px] bg-accent rounded-[50%] ${directionStyle} ${isActive} ${style}`}
					style={{ top: `calc(50% - 25px)` }}
				>
					{buttonType === "prev" ? <ArrowLeft /> : <ArrowRight />}
				</div>
			</div>
		);
	}
);

Button.displayName = "Button";

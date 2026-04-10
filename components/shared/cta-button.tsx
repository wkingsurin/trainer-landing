import { Button } from "../ui/button";

interface IProps {
	className?: string;
	isMobile?: boolean;
	children: React.ReactNode | string;
}

export default function CTAButton({ className, isMobile, children }: IProps) {
	const size = isMobile ? "w-full min-w-[50px] h-[50px]" : 'w-auto min-w-[180px] min-h-[50px]'

	return (
		<Button className={`flex items-center justify-center bg-accent ${size} py-[10px] border-[0.5px] border-transparent bg-linear-to-br from-surface-400/25 to-surface/25 bg-clip-border [background-origin:border-box] [box-shadow:inset_0_0_0_100vw_theme(colors.accent)] font-medium rounded-[12px] ${className}`}>
			{children}
		</Button>
	);
}

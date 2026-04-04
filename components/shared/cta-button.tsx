import { Button } from "../ui/button";

interface IProps {
	children: React.ReactNode | string;
}

export default function CTAButton({ children }: IProps) {
	return (
		<Button className="flex items-center justify-center bg-accent h-[50px] w-full min-w-[50px] py-[10px] border-[0.5px] border-transparent bg-linear-to-br from-surface-400/25 to-surface/25 bg-clip-border [background-origin:border-box] [box-shadow:inset_0_0_0_100vw_theme(colors.accent)] font-medium rounded-[12px]">
			{children}
		</Button>
	);
}

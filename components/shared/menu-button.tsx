import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export default function MenuButton() {
	return (
		<Button className="flex items-center justify-center bg-accent h-[50px] min-w-[50px] py-[10px] border-[0.5px] border-transparent bg-linear-to-br from-surface-400/25 to-surface/25 bg-clip-border [background-origin:border-box] [box-shadow:inset_0_0_0_100vw_theme(colors.accent)] font-medium rounded-[12px]">
			<Menu className="size-6" />
		</Button>
	);
}

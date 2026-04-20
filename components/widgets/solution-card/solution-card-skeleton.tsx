import { Image as ImageIcon } from "lucide-react";

export default function SolutionCardSkeleton() {
	return (
		<div className="absolute z-998 top-0 left-0 w-full h-full flex items-center justify-center bg-foreground">
			<div className="image-sekeleton relative w-[50px] h-[50px] rounded-[12px] flex items-center justify-center bg-background">
				<div className="absolute skeleton z-999 w-full h-full bg-background rounded-[12px]"></div>
				<ImageIcon className="relative z-1000 size-6 stroke-foreground" />
			</div>
		</div>
	);
}

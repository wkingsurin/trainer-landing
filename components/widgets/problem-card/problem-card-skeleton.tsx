import { Image as ImageIcon } from "lucide-react";

export default function ProblemCardSkeleton() {
	return (
		<div className="inner-skeleton">
			<div className="id-skeleton"></div>
			<div className="description-skeleton"></div>
			<div className="image-sekeleton relative  w-[50px] h-[50px] rounded-[12px] flex items-center justify-center bg-background">
				<div className="absolute skeleton z-999 w-full h-full bg-background rounded-[12px]"></div>
				<ImageIcon className="relative z-1000 size-6 stroke-foreground" />
			</div>
		</div>
	);
}

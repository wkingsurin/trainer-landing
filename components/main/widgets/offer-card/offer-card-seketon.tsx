import { Image as ImageIcon } from "lucide-react";

export default function OfferCardSkeleton() {
	return (
		<div className="inner-skeleton absolute z-1000 w-full h-full flex justify-center bg-foreground">
			<div className="image-sekeleton relative top-[120px] w-[50px] h-[50px] rounded-[12px] flex items-center justify-center bg-background">
				<div className="absolute skeleton z-999 w-full h-full bg-background rounded-[12px]"></div>
				<ImageIcon className="relative z-1000 size-6 stroke-foreground" />
			</div>
		</div>
	);
}

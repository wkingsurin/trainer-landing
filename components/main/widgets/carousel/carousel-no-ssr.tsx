import dynamic from "next/dynamic";

export const SwiperCarousel = dynamic(() => import("./carousel"), {
	ssr: false,
	loading: () => <div className="h-[500px]"></div>,
});

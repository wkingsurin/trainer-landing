"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import SlideCard from "../main/widgets/slide-card";
import Tag from "../shared/tag";

interface IProps {
	isMobile: boolean;
	slides: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	}[];
}

export default function Carousel({ isMobile, slides }: IProps) {
	const [active, setActive] = useState<number>(() => (isMobile ? 1 : 4));

	return (
		<div className={`container scrollbar-hide rounded-[20px] overflow-hidden`}>
			<Swiper
				modules={[Pagination, Navigation]}
				spaceBetween={24}
				slidesOffsetAfter={0}
				slidesPerView="auto"
				speed={800}
				onSlideChange={(swiper) => {
					setActive(() => {
						if (!isMobile) return swiper.activeIndex + 1 + 3;
						return swiper.activeIndex + 1;
					});
				}}
				className="[&>*:last-child]:mr-0!"
			>
				{slides.map((slide, index) => (
					<SwiperSlide
						key={index}
						className="flex [&:last-child]:m-0"
						style={{ width: `${!isMobile && "calc(25% - 18px)"}` }}
					>
						<SlideCard
							imageSrc={`/frame${index + 1}.jpg`}
							imageAlt="Дэушка"
							data={slide}
						/>
					</SwiperSlide>
				))}
				{
					<Tag className="absolute z-1200 top-3 left-3 flex items-end text-[12px] gap-[1px] text-surface-500">
						<p className="text-[14px] text-surface">{active}</p>/
						<p>{slides.length}</p>
					</Tag>
				}
			</Swiper>
		</div>
	);
}

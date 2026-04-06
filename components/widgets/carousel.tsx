"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import AdvancedCard from "./advanced-card";
import { Pagination, Navigation } from "swiper/modules";
import Tag from "../shared/tag";
import { useState } from "react";

interface IProps {
	slides: {
		title: string;
		tag?: string;
		price?: string;
		description: string | { text: string }[];
	}[];
}

export default function Carousel({ slides }: IProps) {
	const [active, setActive] = useState<number>(1);

	return (
		<div className={`container scrollbar-hide rounded-[20px] overflow-hidden`}>
			<Swiper
				modules={[Pagination, Navigation]}
				spaceBetween={24}
				slidesPerView="auto"
				speed={800}
				onSlideChange={(swiper) => setActive(swiper.activeIndex + 1)}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} className="flex">
						<AdvancedCard
							imageSrc={`/frame${index + 1}.jpg`}
							imageAlt="Дэушка"
							type="review"
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

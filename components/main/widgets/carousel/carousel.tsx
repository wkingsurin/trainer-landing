"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import SlideCard from "../slide-card";
import Tag from "../../../shared/tag";
import { Button } from "./button";
import type { Swiper as SwiperType } from "swiper";
import { useVisit } from "@/components/contexts/visit-context";

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
	const { visit } = useVisit();

	const prevRef = useRef<HTMLDivElement | null>(null);
	const nextRef = useRef<HTMLDivElement | null>(null);
	const swiperRef = useRef<SwiperType | null>(null);

	const variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.3,
			},
		},
	};

	useEffect(() => {
		const swiper = swiperRef.current;
		if (swiper && swiper.navigation) {
			const navParams = swiper.params.navigation;

			if (navParams && typeof navParams !== "boolean") {
				navParams.prevEl = prevRef.current;
				navParams.nextEl = nextRef.current;
			}

			swiper.navigation.destroy();
			swiper.navigation.init();
			swiper.navigation.update();
		}
	}, []);

	return (
		<motion.div
			initial={visit ? false : "hidden"}
			whileInView={"visible"}
			viewport={{ once: true, amount: 0.2 }}
			variants={variants}
			className={`container w-full relative scrollbar-hide`}
		>
			<Swiper
				modules={[Pagination, Navigation]}
				navigation={{
					prevEl: ".prev-button",
					nextEl: ".next-button",
				}}
				slidesOffsetAfter={0}
				slidesPerView="auto"
				speed={800}
				onSlideChange={(swiper) => {
					setActive(() => {
						if (!isMobile) return swiper.activeIndex + 1 + 3;
						return swiper.activeIndex + 1;
					});
				}}
				className="[&>*:last-child]:mr-0! overflow-hidden rounded-[20px]"
			>
				{slides.map((slide, index) => (
					<SwiperSlide
						key={index}
						className={`relative z-${
							1300 - index
						} flex [&:last-child]:m-0 basis-[85%] sm:mr-[9px] sm:basis-[calc(50%-9px)] md:mr-[12px] md:basis-[calc(33.333%-12px)] xl:mr-[24px] xl:basis-[calc(25%-18px)]`}
					>
						<SlideCard
							index={index}
							imageSrc={`/frame-${index + 1}.jpg`}
							imageAlt="Дэушка"
							isMobile={isMobile}
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
			{!isMobile && (
				<>
					<Button direction="left" ref={prevRef} />
					<Button direction="right" ref={nextRef} />
				</>
			)}
		</motion.div>
	);
}

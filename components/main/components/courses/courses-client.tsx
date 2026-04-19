"use client";

import { useVisit } from "@/components/contexts/visit-context";
import OfferCardMotion from "../offers/offer-card-motion";
import OfferCard from "../../widgets/offer-card";
import { IOffer } from "@/app/types/shared.types";

interface IProps {
	data: IOffer[];
	isMobile: boolean;
}

export default function CoursesClient({ data, isMobile }: IProps) {
	const { visit: hasVisited } = useVisit();

	return (
		<>
			{" "}
			{data.map((course, index) => {
				const premium = course.price.includes("9");

				return (
					<OfferCardMotion
						key={course.tag}
						index={`${index}`}
						animate={!hasVisited}
					>
						<OfferCard
							imageSrc={course.imageSrc}
							imageAlt={course.imageAlt}
							isMobile={isMobile}
							data={course}
							premium={premium}
						/>
					</OfferCardMotion>
				);
			})}
		</>
	);
}

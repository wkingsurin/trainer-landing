"use client";

import OfferCardMotion from "../../widgets/offer-card/offer-card-motion";
import OfferCard from "../../widgets/offer-card/offer-card";
import { useVisit } from "@/components/contexts/visit-context";

export type OfferType = {
	title: string;
	tag: string;
	price: string;
	imageSrc: string;
	imageAlt: string;
	description: { text: string }[];
};

interface IProps {
	data: OfferType[];
	isMobile: boolean;
}

export default function OffersClient({ data, isMobile }: IProps) {
	const { visit: hasVisited } = useVisit();

	return (
		<>
			{data.map((offer, index) => {
				const premium = index === 1;

				return (
					<OfferCardMotion
						key={offer.tag}
						index={`${index}`}
						animate={!hasVisited}
					>
						<OfferCard
							imageSrc={offer.imageSrc}
							imageAlt={offer.imageAlt}
							data={offer}
							isMobile={isMobile}
							premium={premium}
						/>
					</OfferCardMotion>
				);
			})}
		</>
	);
}

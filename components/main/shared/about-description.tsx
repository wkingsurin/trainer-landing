import Card from "@/components/shared/card";
import SocialBlock from "@/components/widgets/social-block";

interface IProps {
	isMobile?: boolean;
}

export default function AboutDescription({ isMobile }: IProps) {
	const cards = [
		{
			id: "1",
			description: "Научишься слышать свое тело, а не слепо следовать шаблонам",
		},
		{
			id: "2",
			description:
				"Научишься совмещать фитнес с твоим привычным графиком жизни",
		},
		{
			id: "3",
			description: "Поддержка 24/7 в закрытом комьюнити единомышленниц",
		},
	];

	const cardsStyle = isMobile ? "gap-[10px]" : "gap-5";

	return (
		<div className="flex flex-col gap-10 max-w-[480px]">
			<div className={`flex flex-col ${cardsStyle}`}>
				{cards.map((card) => (
					<Card key={card.id} className="p-5!">
						{card.description}
					</Card>
				))}
			</div>
			{!isMobile && <SocialBlock isMobile={isMobile} title />}
		</div>
	);
}

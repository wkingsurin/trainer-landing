import Link from "next/link";
import SocialBlock from "../widgets/social-block";
import ContentTitle from "./content-title";

interface IProps {
	title?: string;
	items: { id: string; text: string }[];
	type: "contacts" | "info" | "navigation";
}

export default function List({ title, items, type }: IProps) {
	const desktopStyle = "flex-row gap-[15px]";

	return (
		<div className="flex flex-col gap-3">
			{title && <ContentTitle className="text-surface-500">{title}</ContentTitle>}
			<ul className={`flex flex-col gap-[8px] ${type === 'navigation' && desktopStyle}`}>
				{items.map((item) => (
					<li key={item.id} className="">
						<Link href={`#${item.id}`}>{item.text}</Link>
					</li>
				))}
				{type === "contacts" && <SocialBlock />}
			</ul>
		</div>
	);
}

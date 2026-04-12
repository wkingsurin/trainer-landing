import Link from "next/link";
import SocialBlock from "../widgets/social-block";
import ContentTitle from "./content-title";

interface IProps {
	title?: string;
	items: { id: string; text: string }[];
	type: "contacts" | "info" | "navigation" | "services";
}

export default function List({ title, items, type }: IProps) {
	const desktopStyle = "flex-row gap-[20px]";

	return (
		<div className="flex flex-col gap-5">
			{title && (
				<ContentTitle className="text-surface-500 text-[18px]">
					{title}
				</ContentTitle>
			)}
			<ul
				className={`flex flex-col gap-[12px] ${
					type === "navigation" && desktopStyle
				}`}
			>
				{items.map((item) => (
					<li key={item.id} className="text-[18px] font-light hover:text-accent transition ease-in-out">
						<Link href={`#${item.id}`}>{item.text}</Link>
					</li>
				))}
				{type === "contacts" && <SocialBlock className="items-start" />}
			</ul>
		</div>
	);
}

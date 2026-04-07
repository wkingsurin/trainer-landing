import MenuButton from "./shared/menu-button";

export default function Header() {
	return (
		<header className="fixed z-1999 flex w-full min-h-[80px] bg-foreground-700 backdrop-blur-2xl border-b-[0.5] border-foreground-500 shadow-sh">
			<div className="container mx-auto px-3 flex items-center justify-between min-h-[80px]">
        <span className="flex flex-wrap w-min text-accent font-bold text-[18px]">Алина Самойлова</span>
				<MenuButton />
			</div>
		</header>
	);
}

import isMobileDevice from "./hooks/isDeviceType";
import HeaderNavigation from "./widgets/header-navigation";

export default async function Header() {
	const isMobile = await isMobileDevice();
	const style = isMobile ? "min-h-[80px]" : "min-h-[120px]";

	return (
		<header
			className={`fixed z-1999 flex w-full bg-foreground-700 backdrop-blur-2xl border-b-[0.5] border-foreground-500 shadow-sh ${style}`}
		>
			<div className="container mx-auto max-w-[1280px] px-3 flex items-center justify-between min-h-[80px]">
				<span className="flex flex-wrap w-min text-accent text-[20px] font-bold font-exo_2">
					Алина Самойлова
				</span>
				<HeaderNavigation isMobile={isMobile} />
			</div>
		</header>
	);
}

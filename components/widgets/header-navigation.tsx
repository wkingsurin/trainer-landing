import CTAButton from "../shared/cta-button";
import MenuButton from "../shared/menu-button";
import Navigation from "../shared/navigation";

interface IProps {
	isMobile: boolean;
}

export default function HeaderNavigation({ isMobile }: IProps) {
	return (
		<>
			{!isMobile && (
				<>
					<Navigation />
					<CTAButton type="normal">Записаться</CTAButton>
				</>
			)}

			{isMobile && (
				<div className="lg:hidden">
					<MenuButton />
				</div>
			)}
			
			{/* <div className="hidden md:flex md:gap-[15px] lg:hidden">
				<CTAButton>Записаться</CTAButton>
				<MenuButton />
			</div> */}
		</>
	);
}

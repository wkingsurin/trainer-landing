import isMobileDevice from "../hooks/isDeviceType";
import About from "./components/about";
import Advantage from "./components/advantage";
import Courses from "./components/courses";
import FAQ from "./components/faq";
import Feedback from "./components/feedback";
import Hero from "./components/hero";
import Offers from "./components/offers";
import Problem from "./components/problems";
import Results from "./components/results";
import Services from "./components/services";
import Solution from "./components/solution";

interface IProps {
	children?: React.ReactNode;
}

export default async function Main({ children }: IProps) {
	const isMobile = await isMobileDevice();
	const style = isMobile ? "[&>*]:py-[30px]!" : "[&>*]:py-[90px]!";

	return (
		<main className={`${style} [&>*:first-child]:py-0! [&>*:last-child]:pb-0`}>
			<Hero isMobile={isMobile} />
			<Problem isMobile={isMobile} />
			<Solution isMobile={isMobile} />
			<Services isMobile={isMobile} />
			<Advantage isMobile={isMobile} />
			<About isMobile={isMobile} />
			<Offers isMobile={isMobile} />
			<Results isMobile={isMobile} />
			<Courses isMobile={isMobile} />
			<FAQ isMobile={isMobile} />
			<Feedback isMobile={isMobile} />
			{children}
		</main>
	);
}

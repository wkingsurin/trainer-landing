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

export default function Main({ children }: IProps) {
	return (
		<main className="[&>*]:py-[30px] [&>*:last-child]:pb-0">
			<Hero />
			<Problem />
			<Solution />
			<Services />
			<Advantage />
			<About />
			<Offers />
			<Results />
			<Courses />
			<FAQ />
			<Feedback />
			{children}
		</main>
	);
}

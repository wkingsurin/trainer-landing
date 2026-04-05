import About from "@/components/about";
import Advantage from "@/components/advantage";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import Problem from "@/components/problems";
import Services from "@/components/services";
import Solution from "@/components/solution";

export default function Home() {
	return (
		<main>
			<Hero />
			<Problem />
			<Solution />
			<Services />
			<Advantage />
			<About />
			<Offers />
		</main>
	);
}

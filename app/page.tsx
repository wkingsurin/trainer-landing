import Advantage from "@/components/advantage";
import Hero from "@/components/hero";
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
		</main>
	);
}

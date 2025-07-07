import { HeroSection } from "~/components/hero-section";
import { MoonlightingSection } from "~/components/moonlighting-section";
import { SohamSection } from "~/components/soham-section";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HeroSection />
			<MoonlightingSection />
			<SohamSection />
		</main>
	);
}

import { HeroSection } from "~/components/hero-section";
import { FeaturesSection } from "~/components/features-section";
import { MoonlightingSection } from "~/components/moonlighting-section";
import { SohamSection } from "~/components/soham-section";
import { WaitlistSection } from "~/components/waitlist-section";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HeroSection />
			<FeaturesSection />
			<MoonlightingSection />
			<SohamSection />
			<WaitlistSection />
		</main>
	);
}

import { HeroSection } from "~/components/hero-section";
import { FeaturesSection } from "~/components/features-section";
import { GlowingFeaturesSection } from "~/components/glowing-features-section";
import { MoonlightingSection } from "~/components/moonlighting-section";
import { SohamSection } from "~/components/soham-section";
import { WaitlistSection } from "~/components/waitlist-section";
import IntegrationsSection from "~/components/integrations";
import WobbleCardDemo from "~/components/wobble-card-demo";
import PointerHighlightDemo from "~/components/pointer-highlight-demo";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HeroSection />
			<FeaturesSection />
			<GlowingFeaturesSection />
			<div className="py-20 bg-gray-50 dark:bg-gray-900">
				<IntegrationsSection />
			</div>
			<div className="py-20 bg-white dark:bg-gray-800">
				<WobbleCardDemo />
			</div>
			<div className="py-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
				<PointerHighlightDemo />
			</div>
			<MoonlightingSection />
			<SohamSection />
			<WaitlistSection />
		</main>
	);
}

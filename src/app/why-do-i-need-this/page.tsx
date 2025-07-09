import type { Metadata } from "next";
import { Navigation } from "~/components/navigation";
import OveremployedRedditSection from "~/components/overemployed-reddit-section";

export const metadata: Metadata = {
	title: "Why You Need Employee Verification | VerifyHire",
	description:
		"Discover the shocking reality of the overemployed movement and why your company needs protection from dual employment fraud.",
	openGraph: {
		title: "Why You Need Employee Verification | VerifyHire",
		description:
			"Discover the shocking reality of the overemployed movement and why your company needs protection from dual employment fraud.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Why You Need Employee Verification | VerifyHire",
		description:
			"Discover the shocking reality of the overemployed movement and why your company needs protection from dual employment fraud.",
	},
};

export default function WhyDoINeedThisPage() {
	return (
		<main className="min-h-screen bg-black">
			<Navigation />
			<div className="pt-20">
				<OveremployedRedditSection />
			</div>
		</main>
	);
}

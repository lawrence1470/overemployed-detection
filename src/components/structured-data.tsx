"use client";

import { env } from "~/env";

export function StructuredData() {
	const siteUrl = env.NEXT_PUBLIC_SITE_URL;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "VerifyHire",
		description: "Employee verification and overemployment detection platform",
		url: siteUrl,
		logo: `${siteUrl}/logo.png`,
		sameAs: [
			"https://twitter.com/verifyhire",
			"https://linkedin.com/company/verifyhire",
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer support",
			email: "support@verifyhire.com",
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(jsonLd, null, 0),
			}}
		/>
	);
}

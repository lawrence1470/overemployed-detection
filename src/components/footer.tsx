"use client";

import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-gray-800 border-t bg-black/80 backdrop-blur-sm">
			<div className="mx-auto max-w-7xl px-4 py-6">
				<div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
					<div className="text-gray-400 text-sm">
						© 2025 VerifyHire. All rights reserved.
					</div>

					<div className="flex flex-wrap items-center justify-center gap-6 text-sm">
						<Link
							href="/privacy"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Terms of Service
						</Link>
						<Link
							href="/contact"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

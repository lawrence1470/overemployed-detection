"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge, Heading, Text } from "~/components/ui/typography";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="border-gray-800 border-b bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/75">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center space-x-8">
						<Link href="/" className="flex items-center space-x-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
								<span className="font-bold text-sm text-white">V</span>
							</div>
							<Heading variant="h5" className="text-white">
								VerifyPro
							</Heading>
						</Link>

						<div className="hidden items-center space-x-8 md:flex">
							<Link
								href="/features"
								className="text-gray-300 transition-colors hover:text-white"
							>
								Features
							</Link>
							<Link
								href="/pricing"
								className="text-gray-300 transition-colors hover:text-white"
							>
								Pricing
							</Link>
							<Link
								href="/docs"
								className="text-gray-300 transition-colors hover:text-white"
							>
								Documentation
							</Link>
							<Link
								href="/about"
								className="text-gray-300 transition-colors hover:text-white"
							>
								About
							</Link>
						</div>
					</div>

					<div className="hidden items-center space-x-4 md:flex">
						<Link
							href="/login"
							className="px-3 py-2 text-gray-300 transition-colors hover:text-white"
						>
							Sign In
						</Link>
						<Link
							href="#waitlist"
							className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-700"
						>
							Join Waitlist
						</Link>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-300 transition-colors hover:text-white"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="border-gray-800 border-t md:hidden">
					<div className="space-y-1 bg-gray-900 px-2 pt-2 pb-3">
						<Link
							href="/features"
							className="block px-3 py-2 text-gray-300 transition-colors hover:text-white"
						>
							Features
						</Link>
						<Link
							href="/pricing"
							className="block px-3 py-2 text-gray-300 transition-colors hover:text-white"
						>
							Pricing
						</Link>
						<Link
							href="/docs"
							className="block px-3 py-2 text-gray-300 transition-colors hover:text-white"
						>
							Documentation
						</Link>
						<Link
							href="/about"
							className="block px-3 py-2 text-gray-300 transition-colors hover:text-white"
						>
							About
						</Link>
						<div className="border-gray-800 border-t pt-4">
							<Link
								href="/login"
								className="block px-3 py-2 text-gray-300 transition-colors hover:text-white"
							>
								Sign In
							</Link>
							<Link
								href="#waitlist"
								className="mx-3 block rounded-lg bg-indigo-600 px-3 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
							>
								Join Waitlist
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}

export function Footer() {
	return (
		<footer className="border-gray-800 border-t bg-gray-950">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
								<span className="font-bold text-sm text-white">V</span>
							</div>
							<Heading variant="h6" className="text-white">
								VerifyPro
							</Heading>
						</div>
						<Text variant="muted" className="max-w-xs">
							Comprehensive employee verification and overemployment detection
							for modern startups.
						</Text>
					</div>

					<div>
						<Heading variant="h6" className="mb-4 text-white">
							Product
						</Heading>
						<div className="space-y-2">
							<Link
								href="/features"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Features
							</Link>
							<Link
								href="/pricing"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Pricing
							</Link>
							<Link
								href="/integrations"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Integrations
							</Link>
							<Link
								href="/changelog"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Changelog
							</Link>
						</div>
					</div>

					<div>
						<Heading variant="h6" className="mb-4 text-white">
							Support
						</Heading>
						<div className="space-y-2">
							<Link
								href="/docs"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Documentation
							</Link>
							<Link
								href="/support"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Support Center
							</Link>
							<Link
								href="/contact"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Contact Us
							</Link>
							<Link
								href="/status"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Status Page
							</Link>
						</div>
					</div>

					<div>
						<Heading variant="h6" className="mb-4 text-white">
							Company
						</Heading>
						<div className="space-y-2">
							<Link
								href="/about"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								About Us
							</Link>
							<Link
								href="/careers"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Careers
							</Link>
							<Link
								href="/privacy"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="block text-gray-400 transition-colors hover:text-white"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>

				<div className="mt-8 flex flex-col items-center justify-between border-gray-800 border-t pt-8 sm:flex-row">
					<Text variant="muted">© 2024 VerifyPro. All rights reserved.</Text>
					<div className="mt-4 flex space-x-6 sm:mt-0">
						<Link
							href="/privacy"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Privacy
						</Link>
						<Link
							href="/terms"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Terms
						</Link>
						<Link
							href="/cookies"
							className="text-gray-400 transition-colors hover:text-white"
						>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

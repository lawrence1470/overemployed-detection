"use client";

import Link from "next/link";

export function LayoutNavigation() {
	return (
		<nav className="relative z-50 flex items-center justify-between p-8">
			<div className="flex items-center space-x-3">
				<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
					<div className="h-4 w-4 rounded-sm bg-black" />
				</div>
				<span className="font-medium text-lg text-white">VerifyHire</span>
			</div>

			<div className="hidden items-center space-x-8 md:flex">
				<Link
					href="/"
					className="text-white transition-colors hover:text-gray-300"
				>
					Home
				</Link>
				<Link
					href="/detection"
					className="text-gray-400 transition-colors hover:text-white"
				>
					Detection
				</Link>
				<Link
					href="/analytics"
					className="text-gray-400 transition-colors hover:text-white"
				>
					Analytics
				</Link>
				<Link
					href="/features"
					className="text-gray-400 transition-colors hover:text-white"
				>
					Features
				</Link>
				<Link
					href="/pricing"
					className="text-gray-400 transition-colors hover:text-white"
				>
					Pricing
				</Link>
			</div>

			<a
				href="#waitlist"
				className="inline-block rounded-lg bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-gray-100"
			>
				Join Waitlist
			</a>
		</nav>
	);
}

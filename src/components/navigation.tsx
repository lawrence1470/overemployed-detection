"use client";


export function Navigation() {
	return (
		<nav className="relative z-50 flex items-center justify-between p-8">
			<div className="flex items-center space-x-3">
				<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
					<div className="h-4 w-4 rounded-sm bg-black" />
				</div>
				<span className="font-medium text-lg text-white">VerifyHire</span>
			</div>

			<a
				href="#waitlist"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block rounded-lg bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-gray-100"
			>
				Join Waitlist
			</a>
		</nav>
	);
}

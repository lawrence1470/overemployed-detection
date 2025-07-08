"use client";

import { useEffect, useRef } from "react";

export function MoonlightingSection() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-in");
					}
				}
			},
			{ threshold: 0.1 },
		);

		const elements = sectionRef.current?.querySelectorAll(".fade-in");
		if (elements) {
			for (const el of elements) {
				observer.observe(el);
			}
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative min-h-screen overflow-hidden bg-black text-white"
		>
			{/* Minimal Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
				<div className="absolute top-1/4 right-1/3 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />
				<div className="absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
			</div>

			{/* Simple Floating Elements */}
			<div className="pointer-events-none absolute inset-0">
				{/* Simple network lines */}
				<svg className="absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
					<line
						x1="15%"
						y1="25%"
						x2="85%"
						y2="75%"
						stroke="white"
						strokeWidth="1"
					/>
					<line
						x1="85%"
						y1="20%"
						x2="15%"
						y2="80%"
						stroke="white"
						strokeWidth="1"
					/>
				</svg>

				{/* Minimal floating cards */}
				<div className="absolute top-32 right-8 hidden rounded-xl border border-gray-800 bg-gray-900/50 p-3 backdrop-blur-sm lg:block">
					<div className="mb-1 flex items-center space-x-2">
						<div className="h-2 w-2 rounded-full bg-red-400" />
						<span className="text-gray-300 text-xs">Detected</span>
					</div>
					<div className="font-semibold text-base text-white">127</div>
					<div className="text-gray-400 text-xs">Dual Employment Cases</div>
				</div>

				<div className="absolute bottom-32 left-8 hidden rounded-xl border border-gray-800 bg-gray-900/50 p-3 backdrop-blur-sm lg:block">
					<div className="mb-1 flex items-center space-x-2">
						<div className="h-2 w-2 rounded-full bg-orange-400" />
						<span className="text-gray-300 text-xs">Flagged</span>
					</div>
					<div className="font-semibold text-base text-white">23</div>
					<div className="text-gray-400 text-xs">Calendar Conflicts</div>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
				{/* Simple badge */}
				<div className="fade-in mb-6 flex items-center space-x-2 rounded-full border border-gray-800 bg-gray-900/50 px-6 py-2 backdrop-blur-sm">
					<div className="h-2 w-2 rounded-full bg-orange-400" />
					<span className="text-gray-300 text-sm">Detection Intelligence</span>
				</div>

				{/* Main Content */}
				<div className="max-w-3xl text-center">
					<h2 className="fade-in mb-6 font-bold text-4xl text-white md:text-5xl">
						Is Your Dev Moonlighting... or Sunsurfing? 🫣
					</h2>

					<div className="fade-in mb-12 space-y-4 text-gray-400">
						<p className="text-xl">
							He's not burned out—he's just double-booked.
						</p>
						<p className="text-lg">
							If your engineer needs a calendar for his calendars, you need us.
						</p>
					</div>

					{/* Clean Stats */}
					<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
						<div className="fade-in rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
							<div className="mb-2 font-bold text-2xl text-white">
								47%
							</div>
							<div className="text-gray-400 text-sm">
								remote workers juggle multiple jobs
							</div>
						</div>
						<div className="fade-in rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
							<div className="mb-2 font-bold text-2xl text-white">
								2.3x
							</div>
							<div className="text-gray-400 text-sm">
								productivity loss from context switching
							</div>
						</div>
						<div className="fade-in rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
							<div className="mb-2 font-bold text-2xl text-white">
								$12K
							</div>
							<div className="text-gray-400 text-sm">
								average cost of a bad hire
							</div>
						</div>
					</div>

					{/* Simple CTA */}
					<div className="fade-in mt-12">
						<a
							href="#waitlist"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100"
						>
							Join Waitlist
						</a>
					</div>
				</div>
			</div>

			<style jsx>{`
				.fade-in {
					opacity: 0;
					transform: translateY(20px);
					transition: all 0.6s ease-out;
				}
				
				.fade-in.animate-in {
					opacity: 1;
					transform: translateY(0);
				}
			`}</style>
		</section>
	);
}
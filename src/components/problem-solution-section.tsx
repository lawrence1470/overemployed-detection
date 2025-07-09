"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { PointerHighlight } from "~/components/ui/pointer-highlight";
import { WobbleCard } from "~/components/ui/wobble-card";

export default function ProblemSolutionSection() {
	const [isLoading, setIsLoading] = useState(false);

	const handleGetStarted = async () => {
		setIsLoading(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));
		setIsLoading(false);
	};

	return (
		<div className="px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
			{/* Section Header */}
			<div className="mx-auto mb-16 max-w-4xl text-center">
				<h2 className="mb-6 font-bold text-3xl text-white leading-tight md:text-4xl lg:text-5xl">
					Stop Hiring Ghosts. Start Detecting Reality.
				</h2>
				<p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed md:text-xl">
					451,000+ professionals are secretly juggling multiple jobs. Your next
					hire might be one of them.
				</p>
			</div>

			{/* Enhanced Cards Grid */}
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
				<WobbleCard
					containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-red-900 via-red-800 to-orange-900 min-h-[400px] lg:min-h-[350px] xl:min-h-[300px] shadow-2xl shadow-red-500/20"
					className="p-8 md:p-10 lg:p-12"
				>
					<div className="relative z-10 grid h-full items-center gap-8 lg:grid-cols-2">
						<div className="max-w-lg">
							<div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 font-medium text-sm text-white/90 backdrop-blur-sm">
								🚨 Workforce Crisis
							</div>
							<h2 className="mb-4 text-balance text-left font-bold text-white text-xl leading-tight tracking-tight md:text-2xl lg:text-3xl">
								451K+ members actively share overemployment strategies
							</h2>
							<p className="text-left text-base text-white/80 leading-relaxed md:text-lg">
								A thriving community openly discusses how to juggle multiple
								full-time positions, avoid detection, and maximize income
								through deception.
							</p>
						</div>
						<div className="relative flex items-center justify-center lg:justify-end">
							<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
								<Image
									src="/assets/optimized/reddit.webp"
									width={300}
									height={200}
									alt="Overemployed community screenshot"
									className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
									placeholder="blur"
									blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
							</div>
						</div>
					</div>
				</WobbleCard>

				<WobbleCard containerClassName="col-span-1 min-h-[400px] bg-gradient-to-br from-indigo-800 via-purple-700 to-violet-800 shadow-2xl shadow-purple-500/20">
					<div className="relative z-10 flex h-full flex-col justify-center p-8 md:p-10">
						<div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 font-medium text-sm text-white/90 backdrop-blur-sm">
							💰 Hidden Costs
						</div>
						<h2 className="mb-4 text-balance text-left font-bold text-white text-xl leading-tight tracking-tight md:text-2xl lg:text-3xl">
							$17K to replace each mis-hire
						</h2>
						<p className="text-left text-base text-white/80 leading-relaxed md:text-lg">
							<PointerHighlight
								pointerClassName="text-purple-400"
								rectangleClassName="border-purple-400/50"
							>
								42 days + $4.7K to hire,
							</PointerHighlight>
							then months to discover the truth. The real cost of overemployed
							hires is devastating.
						</p>
					</div>
				</WobbleCard>
			</div>
		</div>
	);
}

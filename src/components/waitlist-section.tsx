"use client";

import { motion } from "motion/react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { designSystem, getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

export function WaitlistSection() {
	return (
		<section
			id="waitlist"
			className="flex min-h-screen items-center justify-center bg-black px-4 text-white"
		>
			<div className="mx-auto max-w-2xl text-center">
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1
						className={cn(
							designSystem.typography.display.lg,
							"mb-6 text-white",
						)}
					>
						Join the waitlist
					</h1>
					<p
						className={cn(
							getComponentClasses.body("lg"),
							"mx-auto max-w-xl text-white/70",
						)}
					>
						Receive all the latest news and updates,
						<br />
						as well as early access to the beta.
					</p>
				</motion.div>

				<motion.div
					className="mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<div className="flex justify-center">
						<HoverBorderGradient
							as="a"
							containerClassName="rounded-xl"
							className="relative inline-block cursor-pointer overflow-hidden whitespace-nowrap bg-gray-800/50 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/50"
							{...{ href: "/waitlist" }}
						>
							<motion.span
								className="flex items-center space-x-2"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<span>Join waitlist</span>
								<motion.svg
									className="h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									whileHover={{ x: 2 }}
									transition={{ type: "spring", stiffness: 300, damping: 30 }}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</motion.svg>
							</motion.span>
						</HoverBorderGradient>
					</div>
				</motion.div>

				<motion.div
					className="border-white/10 border-t pt-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<p
						className={cn(
							designSystem.typography.label.md,
							"mb-8 text-white/50",
						)}
					>
						Backed by
					</p>
					<div className="flex items-center justify-center gap-8 opacity-60">
						{/* Unified investor logos */}
						<motion.div
							className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl"
							whileHover={{
								scale: 1.1,
								backgroundColor: "rgba(255,255,255,0.2)",
							}}
						>
							<span className="font-bold text-white text-xl">M</span>
						</motion.div>
						<div className="font-light text-white/80 text-xl">ventures*</div>
						<motion.div
							className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl"
							whileHover={{
								scale: 1.1,
								backgroundColor: "rgba(255,255,255,0.2)",
							}}
						>
							<svg
								className="h-6 w-6 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</motion.div>
						<motion.div
							className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl"
							whileHover={{
								scale: 1.1,
								backgroundColor: "rgba(255,255,255,0.2)",
							}}
						>
							<div className="h-6 w-6 rounded-sm bg-white/80" />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

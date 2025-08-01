"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

// Lazy load LinkPreview since it makes external API calls
const LinkPreview = dynamic(
	() =>
		import("~/components/ui/link-preview").then((mod) => ({
			default: mod.LinkPreview,
		})),
	{
		ssr: false,
		loading: () => <span className="underline">Loading preview...</span>,
	},
);

export function SohamSection() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 py-32 text-white">
			{/* Premium Minimal Background with smooth transition */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black/80 to-purple-950/20" />
				<motion.div
					className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.03, 0.08, 0.03],
					}}
					transition={{
						duration: 8,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			</div>

			{/* Subtle Floating Elements */}
			<div className="pointer-events-none absolute inset-0">
				<motion.div
					className="absolute top-20 right-12 hidden lg:block"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl">
						<div className="mb-2 flex items-center space-x-3">
							<div className="h-1.5 w-1.5 rounded-full bg-orange-400/60" />
							<span className="font-medium text-white/40 text-xs">
								PORTFOLIO
							</span>
						</div>
						<div className="font-light text-2xl text-white/90">4</div>
						<div className="text-white/30 text-xs">Companies</div>
					</div>
				</motion.div>
			</div>

			{/* Main Content */}
			<div className={cn(getComponentClasses.container(), "relative z-10")}>
				<div className="grid items-center gap-20 lg:grid-cols-2">
					{/* Left Side - Text Content */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<div className="space-y-6">
							<h2 className="font-light text-5xl text-white leading-tight lg:text-6xl">
								Don't Hire Another{" "}
								<span className="relative">
									<LinkPreview
										url="https://news.ycombinator.com/item?id=44448461&utm_source=chatgpt.com"
										className="relative z-10 border-orange-400/50 border-b pb-1 font-medium text-white transition-colors duration-300 hover:text-orange-300"
									>
										Soham Parekh
									</LinkPreview>
								</span>
							</h2>

							<p className="max-w-lg font-light text-white/60 text-xl leading-relaxed">
								He's smart. Too smart. For all four of your competitors.
							</p>
						</div>

						<div className="space-y-4 pt-4">
							<motion.p
								className="font-light text-lg text-white/70"
								initial={{ opacity: 0, y: 5 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.8 }}
								viewport={{ once: true }}
							>
								You thought you hired a 10x engineer.
							</motion.p>
							<motion.p
								className="font-light text-lg text-white/70"
								initial={{ opacity: 0, y: 5 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.8 }}
								viewport={{ once: true }}
							>
								Turns out you hired 10% of a 10x engineer.
							</motion.p>
							<motion.p
								className="pt-2 font-light text-base text-orange-400/80"
								initial={{ opacity: 0, y: 5 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8, duration: 0.8 }}
								viewport={{ once: true }}
							>
								Stop funding a man's entire Series A portfolio with your
								payroll.
							</motion.p>
						</div>
					</motion.div>

					{/* Right Side - Large Profile */}
					<motion.div
						className="flex flex-col items-center space-y-8 lg:items-start"
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
						viewport={{ once: true }}
					>
						{/* Large Profile Image */}
						<div className="relative">
							<motion.div
								className="-inset-4 absolute rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 blur-2xl"
								animate={{
									scale: [1, 1.05, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 6,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
							/>
							<div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
								<Image
									src="/assets/optimized/soham.webp"
									alt="Soham Parekh"
									width={400}
									height={400}
									className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
									priority
									placeholder="blur"
									blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"
								/>
								{/* Subtle overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

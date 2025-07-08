"use client";

import { motion } from "motion/react";
import { getComponentClasses, designSystem } from "~/lib/design-system";
import { cn } from "~/lib/utils";

export function MoonlightingSection() {
	return (
		<section
			className={cn(getComponentClasses.section(), "min-h-screen bg-black text-white")}
		>
			{/* Minimal Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
				<motion.div 
					className="absolute top-1/4 right-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
					animate={{ 
						scale: [1, 1.2, 1],
						opacity: [0.1, 0.2, 0.1]
					}}
					transition={{ 
						duration: 8, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				/>
				<motion.div 
					className="absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-red-500/10 blur-3xl"
					animate={{ 
						scale: [1.2, 1, 1.2],
						opacity: [0.1, 0.2, 0.1]
					}}
					transition={{ 
						duration: 10, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				/>
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

				{/* Unified floating cards */}
				<motion.div 
					className={cn(getComponentClasses.card('glass'), "absolute top-32 right-8 hidden p-4 lg:block")}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					whileHover={{ scale: 1.05, y: -5 }}
				>
					<div className="mb-2 flex items-center space-x-2">
						<div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
						<span className={cn(designSystem.typography.label.md, "text-white/90")}>Detected</span>
					</div>
					<div className={cn(getComponentClasses.heading('sm'), "text-white mb-1")}>127</div>
					<div className={cn(getComponentClasses.body('xs'), "text-white/70")}>Dual Employment Cases</div>
				</motion.div>

				<motion.div 
					className={cn(getComponentClasses.card('glass'), "absolute bottom-32 left-8 hidden p-4 lg:block")}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					whileHover={{ scale: 1.05, y: -5 }}
				>
					<div className="mb-2 flex items-center space-x-2">
						<div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
						<span className={cn(designSystem.typography.label.md, "text-white/90")}>Flagged</span>
					</div>
					<div className={cn(getComponentClasses.heading('sm'), "text-white mb-1")}>23</div>
					<div className={cn(getComponentClasses.body('xs'), "text-white/70")}>Calendar Conflicts</div>
				</motion.div>
			</div>

			{/* Content */}
			<div className={cn(getComponentClasses.container(), "relative z-10 flex min-h-screen flex-col items-center justify-center py-20")}>
				{/* Unified badge */}
				<motion.span 
					className={cn(getComponentClasses.badge('warning'), "mb-6")}
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					🔍 Detection Intelligence
				</motion.span>

				{/* Main Content */}
				<div className="max-w-4xl text-center">
					<motion.h2 
						className={cn(getComponentClasses.heading('xl'), "text-white mb-6")}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Is Your Dev Moonlighting... or Sunsurfing? 🫣
					</motion.h2>

					<motion.div 
						className="mb-12 space-y-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<p className={cn(getComponentClasses.body('lg'), "text-white/80")}>
							He's not burned out—he's just double-booked.
						</p>
						<p className={cn(getComponentClasses.body('md'), "text-white/70")}>
							If your engineer needs a calendar for his calendars, you need us.
						</p>
					</motion.div>

					{/* Unified Stats Grid */}
					<motion.div 
						className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
					>
						{[
							{ stat: "47%", desc: "remote workers juggle multiple jobs" },
							{ stat: "2.3x", desc: "productivity loss from context switching" },
							{ stat: "$12K", desc: "average cost of a bad hire" }
						].map((item, index) => (
							<motion.div 
								key={index}
								className={getComponentClasses.card('glass')}
								whileHover={{ scale: 1.05, y: -5 }}
								transition={{ type: "spring", stiffness: 300, damping: 30 }}
							>
								<div className={cn(getComponentClasses.heading('lg'), "text-white mb-2")}>
									{item.stat}
								</div>
								<div className={cn(getComponentClasses.body('sm'), "text-white/70")}>
									{item.desc}
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Unified CTA */}
					<motion.div 
						className="mt-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						viewport={{ once: true }}
					>
						<motion.a
							href="#waitlist"
							target="_blank"
							rel="noopener noreferrer"
							className={getComponentClasses.button('primary')}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Join Waitlist
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HeroSection } from "~/components/hero-section";
import { FeaturesSection } from "~/components/features-section";
import { GlowingFeaturesSection } from "~/components/glowing-features-section";
import { MoonlightingSection } from "~/components/moonlighting-section";
import { SohamSection } from "~/components/soham-section";
import { WaitlistSection } from "~/components/waitlist-section";
import IntegrationsSection from "~/components/integrations";
import WobbleCardDemo from "~/components/wobble-card-demo";
import PointerHighlightDemo from "~/components/pointer-highlight-demo";

// Floating Elements Component
function FloatingElements() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	
	return (
		<div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
			<motion.div 
				style={{ y: y1, rotate }}
				className="absolute top-20 left-10 w-4 h-4 bg-blue-500/20 rounded-full blur-sm"
			/>
			<motion.div 
				style={{ y: y2 }}
				className="absolute top-40 right-20 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
			/>
			<motion.div 
				style={{ y: y1, rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
				className="absolute bottom-20 left-1/4 w-3 h-3 bg-cyan-500/20 rounded-full blur-sm"
			/>
		</div>
	);
}

// Section Divider Component
function SectionDivider({ variant = "wave" }: { variant?: "wave" | "diagonal" | "curve" }) {
	if (variant === "wave") {
		return (
			<div className="relative h-20 overflow-hidden">
				<svg
					className="absolute bottom-0 w-full h-20"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<motion.path
						d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
						fill="currentColor"
						initial={{ pathLength: 0 }}
						whileInView={{ pathLength: 1 }}
						transition={{ duration: 2, ease: "easeInOut" }}
						viewport={{ once: true }}
					/>
				</svg>
			</div>
		);
	}
	
	if (variant === "diagonal") {
		return (
			<div className="relative h-20 overflow-hidden transform -skew-y-1">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
			</div>
		);
	}
	
	return (
		<div className="relative h-16 overflow-hidden">
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
				initial={{ x: "-100%" }}
				whileInView={{ x: "100%" }}
				transition={{ duration: 1.5, ease: "easeInOut" }}
				viewport={{ once: true }}
			/>
		</div>
	);
}

// Animated Section Wrapper
function AnimatedSection({ 
	children, 
	className = "", 
	delay = 0,
	direction = "up" 
}: { 
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
}) {
	const variants = {
		up: { y: 100, opacity: 0 },
		down: { y: -100, opacity: 0 },
		left: { x: -100, opacity: 0 },
		right: { x: 100, opacity: 0 }
	};
	
	return (
		<motion.div
			initial={variants[direction]}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
			transition={{ 
				duration: 0.8, 
				delay,
				ease: [0.25, 0.46, 0.45, 0.94]
			}}
			viewport={{ once: true, margin: "-100px" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export default function Home() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});
	
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.1, 0.3]);

	return (
		<main ref={containerRef} className="relative overflow-hidden">
			{/* Global Parallax Background */}
			<motion.div 
				className="fixed inset-0 z-0 pointer-events-none"
				style={{ 
					y: backgroundY,
					opacity: backgroundOpacity
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
				<FloatingElements />
			</motion.div>

			{/* Hero Section */}
			<div className="relative z-10">
				<HeroSection />
			</div>

			{/* Transition */}
			<div className="relative z-10 text-gray-200">
				<SectionDivider variant="wave" />
			</div>

			{/* Features Section */}
			<AnimatedSection className="relative z-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
				<FeaturesSection />
			</AnimatedSection>

			{/* Glowing Features with Parallax */}
			<AnimatedSection direction="left" delay={0.2} className="relative z-10">
				<div className="relative overflow-hidden">
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.5 }}
						viewport={{ once: true }}
					/>
					<GlowingFeaturesSection />
				</div>
			</AnimatedSection>

			{/* Creative Integrations Section */}
			<AnimatedSection direction="up" delay={0.1} className="relative z-10">
				<div className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
					{/* Animated Grid Background */}
					<motion.div
						className="absolute inset-0 opacity-5"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.05 }}
						transition={{ duration: 2 }}
					>
						<div className="absolute inset-0" 
							style={{
								backgroundImage: `
									linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
									linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
								`,
								backgroundSize: "50px 50px"
							}}
						/>
					</motion.div>
					
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<IntegrationsSection />
					</motion.div>
				</div>
			</AnimatedSection>

			{/* Wobble Card with Rotation Effect */}
			<AnimatedSection direction="right" delay={0.3} className="relative z-10">
				<div className="py-20 bg-white dark:bg-gray-800 relative">
					<motion.div
						className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
						animate={{ 
							x: [0, 100, 0],
							y: [0, -50, 0],
							scale: [1, 1.2, 1]
						}}
						transition={{ 
							duration: 8,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
					<WobbleCardDemo />
				</div>
			</AnimatedSection>

			{/* Pointer Highlight with Magnetic Effect */}
			<AnimatedSection direction="up" delay={0.4} className="relative z-10">
				<motion.div 
					className="py-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative overflow-hidden"
					whileInView={{ 
						background: [
							"linear-gradient(135deg, rgb(243 244 246) 0%, rgb(243 244 246) 100%)",
							"linear-gradient(135deg, rgb(243 244 246) 0%, rgb(249 250 251) 50%, rgb(243 244 246) 100%)",
							"linear-gradient(135deg, rgb(243 244 246) 0%, rgb(243 244 246) 100%)"
						]
					}}
					transition={{ duration: 3, repeat: Infinity }}
					viewport={{ once: true }}
				>
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
						initial={{ x: "-100%" }}
						whileInView={{ x: "100%" }}
						transition={{ duration: 2, delay: 0.5 }}
						viewport={{ once: true }}
					/>
					<PointerHighlightDemo />
				</motion.div>
			</AnimatedSection>

			{/* Diagonal Transition */}
			<div className="relative z-10 text-gray-800">
				<SectionDivider variant="diagonal" />
			</div>

			{/* Moonlighting with Floating Animation */}
			<AnimatedSection direction="left" delay={0.2} className="relative z-10">
				<div className="relative">
					<motion.div
						className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl"
						animate={{ 
							rotate: 360,
							scale: [1, 1.3, 1]
						}}
						transition={{ 
							rotate: { duration: 20, repeat: Infinity, ease: "linear" },
							scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
						}}
					/>
					<MoonlightingSection />
				</div>
			</AnimatedSection>

			{/* Soham Section with Pulsing Effect */}
			<AnimatedSection direction="up" delay={0.1} className="relative z-10">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<SohamSection />
				</motion.div>
			</AnimatedSection>

			{/* Final Transition */}
			<div className="relative z-10 text-white">
				<SectionDivider variant="curve" />
			</div>

			{/* Waitlist Section with Spotlight Effect */}
			<AnimatedSection direction="up" delay={0.3} className="relative z-10">
				<motion.div
					className="relative"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					viewport={{ once: true }}
				>
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
						animate={{ 
							x: ["-100%", "100%"],
						}}
						transition={{ 
							duration: 3,
							repeat: Infinity,
							repeatDelay: 2,
							ease: "easeInOut"
						}}
					/>
					<WaitlistSection />
				</motion.div>
			</AnimatedSection>
		</main>
	);
}

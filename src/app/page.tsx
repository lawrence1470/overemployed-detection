"use client";

import {
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { HeroSection } from "~/components/hero-section";
import { HowItWorksSection } from "~/components/how-it-works";
import { SohamSection } from "~/components/soham-section";
import { Skeleton, SkeletonText } from "~/components/ui/skeleton";

// Lazy load below-the-fold components
const FAQSection = dynamic(
	() =>
		import("~/components/faq-section").then((mod) => ({
			default: mod.FAQSection,
		})),
	{
		loading: () => (
			<div className="px-8 py-24">
				<div className="mx-auto max-w-3xl">
					<Skeleton height="3rem" width="50%" className="mx-auto mb-8" />
					<SkeletonText lines={5} className="mb-4" />
				</div>
			</div>
		),
	},
);

const WaitlistSection = dynamic(
	() =>
		import("~/components/waitlist-section").then((mod) => ({
			default: mod.WaitlistSection,
		})),
	{
		loading: () => (
			<div className="flex min-h-screen items-center justify-center px-4">
				<div className="mx-auto w-full max-w-2xl">
					<Skeleton height="4rem" width="80%" className="mx-auto mb-6" />
					<SkeletonText lines={2} className="mb-8 text-center" />
					<Skeleton height="48px" className="mx-auto w-48" />
				</div>
			</div>
		),
	},
);

const IntegrationsSection = dynamic(() => import("~/components/integrations"), {
	loading: () => (
		<div className="py-20">
			<div className="mb-12 text-center">
				<Skeleton height="3rem" width="50%" className="mx-auto mb-4" />
				<SkeletonText lines={2} className="mx-auto max-w-2xl" />
			</div>
			<div className="flex justify-center gap-8">
				{[1, 2, 3, 4].map((i) => (
					<Skeleton key={i} variant="circular" width={80} height={80} />
				))}
			</div>
		</div>
	),
});

const ProblemSolutionSection = dynamic(
	() => import("~/components/problem-solution-section"),
	{
		loading: () => (
			<div className="py-20">
				<div className="mx-auto max-w-7xl px-8">
					<Skeleton height="3rem" width="60%" className="mb-8" />
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<Skeleton height="300px" variant="rounded" />
						<Skeleton height="300px" variant="rounded" />
					</div>
				</div>
			</div>
		),
	},
);

const OveremployedRedditSection = dynamic(
	() => import("~/components/overemployed-reddit-section"),
	{
		loading: () => (
			<div className="py-20">
				<div className="mx-auto max-w-7xl px-8">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						<div>
							<Skeleton height="3rem" width="80%" className="mb-4" />
							<SkeletonText lines={3} className="mb-8" />
							<Skeleton height="400px" variant="rounded" />
						</div>
						<div className="space-y-4">
							{[1, 2, 3].map((i) => (
								<Skeleton key={i} height="100px" variant="rounded" />
							))}
						</div>
					</div>
				</div>
			</div>
		),
	},
);

// Premium Floating Elements with Glassmorphism
function FloatingElements() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

	return (
		<div
			ref={ref}
			className="pointer-events-none absolute inset-0 overflow-hidden"
		>
			{/* Premium Glass Cards */}
			<motion.div
				style={{ y: y1, rotate, scale }}
				className="absolute top-20 left-10 h-16 w-24 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl"
			>
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
				<div className="absolute top-2 left-2 h-2 w-2 rounded-full bg-white/60" />
				<div className="absolute right-2 bottom-2 h-1 w-1 rounded-full bg-white/40" />
			</motion.div>

			<motion.div
				style={{ y: y2 }}
				className="absolute top-40 right-20 h-20 w-20 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl"
			>
				<div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
				<motion.div
					className="absolute inset-2 rounded-full bg-white/10"
					animate={{ rotate: 360 }}
					transition={{
						duration: 8,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				/>
			</motion.div>

			<motion.div
				style={{
					y: y1,
					rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
				}}
				className="absolute bottom-20 left-1/4 h-24 w-16 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl"
			>
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
				<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-8 w-1 transform rounded-full bg-white/30" />
			</motion.div>

			{/* Floating Particles */}
			{Array.from({ length: 12 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute h-1 w-1 rounded-full bg-white/30"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, -30, 0],
						x: [0, Math.random() * 20 - 10, 0],
						opacity: [0.3, 1, 0.3],
						scale: [1, 1.5, 1],
					}}
					transition={{
						duration: 3 + Math.random() * 2,
						repeat: Number.POSITIVE_INFINITY,
						delay: Math.random() * 2,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
}

// Animated Section Wrapper
function AnimatedSection({
	children,
	className = "",
	delay = 0,
	direction = "up",
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
		right: { x: 100, opacity: 0 },
	};

	return (
		<motion.div
			initial={variants[direction]}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
			transition={{
				duration: 0.8,
				delay,
				ease: [0.25, 0.46, 0.45, 0.94],
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
		offset: ["start start", "end end"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const backgroundOpacity = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0.3, 0.1, 0.3],
	);
	const hue = useTransform(scrollYProgress, [0, 1], [240, 300]);

	// Product Schema for SEO
	const productSchema = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: "VerifyHire",
		description:
			"Advanced employee verification and overemployment detection platform",
		brand: {
			"@type": "Brand",
			name: "VerifyHire",
		},
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			availability: "https://schema.org/PreOrder",
			priceValidUntil: "2025-12-31",
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "189",
		},
	};

	return (
		<main ref={containerRef} className="relative overflow-hidden">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
			/>
			{/* Enhanced Global Parallax Background */}
			<motion.div
				className="pointer-events-none fixed inset-0 z-0"
				style={{
					y: backgroundY,
					opacity: backgroundOpacity,
				}}
			>
				{/* Dynamic color-shifting background - more subtle */}
				<motion.div
					className="absolute inset-0"
					style={{
						background: useTransform(
							hue,
							(latest) => `linear-gradient(135deg, 
								hsl(${latest}, 40%, 4%) 0%, 
								hsl(${latest + 30}, 30%, 3%) 25%, 
								hsl(${latest + 60}, 35%, 2%) 75%, 
								hsl(${latest + 90}, 40%, 4%) 100%)`,
						),
					}}
				/>

				{/* Noise texture overlay */}
				<div
					className="absolute inset-0 opacity-[0.015]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
						backgroundSize: "100px 100px",
					}}
				/>

				<FloatingElements />
			</motion.div>

			{/* Hero Section */}
			<div className="relative z-10">
				<HeroSection />
			</div>

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

			{/* How It Works Section */}
			<AnimatedSection direction="up" delay={0.2} className="relative z-10">
				<div className="relative overflow-hidden">
					<motion.div
						className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.5 }}
						viewport={{ once: true }}
					/>
					<HowItWorksSection />
				</div>
			</AnimatedSection>

			{/* Creative Integrations Section */}
			<AnimatedSection direction="up" delay={0.1} className="relative z-10">
				<div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 py-20">
					{/* Animated Grid Background */}
					<motion.div
						className="absolute inset-0 opacity-5"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.05 }}
						transition={{ duration: 2 }}
					>
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `
									linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
									linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
								`,
								backgroundSize: "50px 50px",
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
				<div className="relative bg-gradient-to-b from-gray-950 to-gray-900 py-20">
					<motion.div
						className="absolute top-10 left-10 h-20 w-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
						animate={{
							x: [0, 100, 0],
							y: [0, -50, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 8,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					/>
					<ProblemSolutionSection />
				</div>
			</AnimatedSection>

			{/* Pointer Highlight with Magnetic Effect */}
			<AnimatedSection direction="up" delay={0.4} className="relative z-10">
				<motion.div
					className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
					whileInView={{
						background: [
							"linear-gradient(135deg, rgb(243 244 246) 0%, rgb(243 244 246) 100%)",
							"linear-gradient(135deg, rgb(243 244 246) 0%, rgb(249 250 251) 50%, rgb(243 244 246) 100%)",
							"linear-gradient(135deg, rgb(243 244 246) 0%, rgb(243 244 246) 100%)",
						],
					}}
					transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
					viewport={{ once: true }}
				>
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
						initial={{ x: "-100%" }}
						whileInView={{ x: "100%" }}
						transition={{ duration: 2, delay: 0.5 }}
						viewport={{ once: true }}
					/>
					<OveremployedRedditSection />
				</motion.div>
			</AnimatedSection>

			{/* FAQ Section */}
			<AnimatedSection direction="up" delay={0.2} className="relative z-10">
				<div className="relative overflow-hidden">
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.5 }}
						viewport={{ once: true }}
					/>
					<FAQSection />
				</div>
			</AnimatedSection>

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
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: 2,
							ease: "easeInOut",
						}}
					/>
					<WaitlistSection />
				</motion.div>
			</AnimatedSection>
		</main>
	);
}

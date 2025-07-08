"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useEffect } from "react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { Skeleton } from "~/components/ui/skeleton";
import SplitText from "~/components/ui/split-text";

// Lazy load the heavy Orb component
const Orb = dynamic(() => import("~/components/Orb"), {
	loading: () => (
		<div className="absolute inset-0 z-0">
			<Skeleton className="h-full w-full" animation="wave" />
		</div>
	),
	ssr: false, // Disable SSR for WebGL component
});

export function HeroSection() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
	const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			// Use window dimensions instead of currentTarget
			const rect = {
				left: 0,
				top: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
			const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
			const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
			mouseX.set(x * 20);
			mouseY.set(y * 20);
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);

	return (
		<section className="relative h-screen overflow-hidden bg-black text-white">
			{/* Orb Background - Covering entire section */}
			<div className="absolute inset-0 z-0">
				<Orb
					hue={240}
					hoverIntensity={1.2}
					rotateOnHover={false}
					forceHoverState={true}
				/>
			</div>

			{/* Premium Background with enhanced depth - softer colors */}
			<div className="pointer-events-none absolute inset-0 z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black/50 to-purple-950/30" />
				<motion.div
					className="absolute top-1/3 left-1/3 h-32 w-32 rounded-full bg-blue-600/5 blur-2xl sm:h-48 sm:w-48 sm:blur-3xl md:h-64 md:w-64 lg:h-96 lg:w-96"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.02, 0.05, 0.02],
					}}
					transition={{
						duration: 8,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute right-1/3 bottom-1/3 h-32 w-32 rounded-full bg-purple-600/5 blur-2xl sm:h-48 sm:w-48 sm:blur-3xl md:h-64 md:w-64 lg:h-96 lg:w-96"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.02, 0.05, 0.02],
					}}
					transition={{
						duration: 10,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-24 w-24 transform rounded-full bg-indigo-600/2 blur-xl sm:h-32 sm:w-32 sm:blur-2xl md:h-48 md:w-48 lg:h-64 lg:w-64"
					animate={{
						rotate: 360,
						scale: [1, 1.3, 1],
					}}
					transition={{
						rotate: {
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						},
						scale: {
							duration: 6,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						},
					}}
				/>
			</div>

			{/* Minimal Floating Elements */}
			<div className="pointer-events-none absolute inset-0">
				{/* Simple network lines */}
				<svg className="absolute inset-0 h-full w-full opacity-10">
					<line
						x1="20%"
						y1="30%"
						x2="80%"
						y2="70%"
						stroke="white"
						strokeWidth="1"
					/>
					<line
						x1="80%"
						y1="30%"
						x2="20%"
						y2="70%"
						stroke="white"
						strokeWidth="1"
					/>
				</svg>

				{/* Premium floating cards with glassmorphism */}
				<motion.div
					className="absolute top-24 left-8 hidden rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl lg:block"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					whileHover={{
						scale: 1.05,
						y: -5,
						boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
					}}
				>
					<div className="mb-2 flex items-center space-x-2">
						<motion.div
							className="h-2 w-2 rounded-full bg-green-400"
							animate={{
								scale: [1, 1.3, 1],
								opacity: [0.7, 1, 0.7],
							}}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						/>
						<span className="font-medium text-white/90 text-xs">Active</span>
					</div>
					<div className="mb-1 font-bold text-lg text-white">2,847</div>
					<div className="text-white/70 text-xs">Employees Verified</div>
				</motion.div>

				<motion.div
					className="absolute right-8 bottom-24 hidden rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl lg:block"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					whileHover={{
						scale: 1.05,
						y: -5,
						boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
					}}
				>
					<div className="mb-2 flex items-center space-x-2">
						<motion.div
							className="h-2 w-2 rounded-full bg-yellow-400"
							animate={{
								scale: [1, 1.3, 1],
								opacity: [0.7, 1, 0.7],
							}}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						/>
						<span className="font-medium text-white/90 text-xs">Alert</span>
					</div>
					<div className="mb-1 font-bold text-lg text-white">14</div>
					<div className="text-white/70 text-xs">Potential Matches</div>
				</motion.div>
			</div>

			{/* Hero Content */}
			<div className="relative z-20 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
				{/* Centered Content */}
				<div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
					{/* Premium badge with magnetic hover - Mobile optimized */}
					<motion.div
						className="group mb-4 flex cursor-pointer items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-2xl backdrop-blur-xl sm:mb-6 sm:px-4 sm:py-2 md:mb-8 md:px-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						whileHover={{
							scale: 1.05,
							y: -2,
							boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
						}}
					>
						<motion.div
							className="h-2 w-2 rounded-full bg-blue-400"
							animate={{
								scale: [1, 1.3, 1],
								opacity: [0.7, 1, 0.7],
							}}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						/>
						<span className="font-medium text-white/90 text-xs transition-colors group-hover:text-white sm:text-sm">
							Employee Verification Platform
						</span>
					</motion.div>

					{/* Premium Main Heading with magnetic effect */}
					<motion.div
						className="relative mb-4 w-full text-center sm:mb-6 md:mb-8"
						style={{ x: springX, y: springY }}
					>
						<div className="relative">
							{/* Glow effect behind text - smaller on mobile */}
							<div className="absolute inset-0 scale-50 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl sm:scale-75 sm:blur-2xl md:scale-100 md:blur-3xl" />

							<div className="text-center">
								<SplitText
									text="Are We Hiring the Same"
									className="relative z-10 block px-2 font-bold text-3xl text-white leading-[1.1] sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
									delay={80}
									duration={1.0}
									ease="power3.out"
									splitType="chars"
									from={{ opacity: 0, y: 60, rotationX: -90 }}
									to={{ opacity: 1, y: 0, rotationX: 0 }}
									threshold={0.8}
									rootMargin="0px"
									textAlign="center"
								/>
								<SplitText
									text="Guy?"
									className="relative z-10 mt-1 block font-bold text-3xl text-white leading-[1.1] sm:mt-2 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
									delay={120}
									duration={1.0}
									ease="power3.out"
									splitType="chars"
									from={{ opacity: 0, y: 60, rotationX: -90 }}
									to={{ opacity: 1, y: 0, rotationX: 0 }}
									threshold={0.8}
									rootMargin="0px"
									textAlign="center"
								/>
							</div>
						</div>
					</motion.div>

					{/* Premium subtitle with enhanced typography */}
					<motion.p
						className="mb-6 max-w-3xl px-2 text-center font-light text-sm text-white/80 leading-relaxed tracking-wide sm:mb-8 sm:px-4 sm:text-base md:mb-12 md:text-lg lg:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
					>
						Detect dual employment conflicts with advanced verification
						technology
					</motion.p>

					{/* Premium CTA buttons with advanced interactions */}
					<div className="flex w-full flex-col items-center justify-center gap-4 px-2 sm:px-4">
						<HoverBorderGradient
							as="a"
							containerClassName="rounded-xl"
							className="bg-white px-8 py-3 text-center font-medium text-black text-sm transition-colors hover:bg-gray-50 sm:px-10 sm:py-4 sm:text-base"
							duration={1}
							clockwise={true}
							{...{ href: "/waitlist" }}
						>
							Join Waitlist
						</HoverBorderGradient>
					</div>
				</div>
			</div>

			{/* Premium bottom elements with subtle animations */}
			<motion.div
				className="absolute bottom-4 left-4 font-medium text-[10px] text-white/60 sm:left-8 sm:text-xs"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1 }}
			>
				<motion.span
					animate={{ opacity: [0.6, 1, 0.6] }}
					transition={{
						duration: 2,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				>
					Scroll to explore
				</motion.span>
			</motion.div>

			<motion.div
				className="absolute right-4 bottom-4 font-medium text-[10px] text-white/60 sm:right-8 sm:text-xs"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.2, duration: 1 }}
			>
				Enterprise Solution
			</motion.div>
		</section>
	);
}

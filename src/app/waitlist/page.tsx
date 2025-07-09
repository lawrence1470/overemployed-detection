"use client";

import {
	ArrowRight,
	Building2,
	CheckCircle,
	Eye,
	EyeOff,
	Shield,
	Sparkles,
	Users,
	Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Navigation } from "~/components/navigation";
import { WaitlistForm } from "~/components/waitlist-form";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

// Floating elements that represent detected employees
function FloatingEmployees() {
	const employees = [
		{ id: 1, x: "10%", y: "20%", delay: 0, duration: 15, name: "J.D." },
		{ id: 2, x: "80%", y: "15%", delay: 2, duration: 18, name: "S.M." },
		{ id: 3, x: "85%", y: "70%", delay: 4, duration: 20, name: "A.P." },
		{ id: 4, x: "15%", y: "75%", delay: 1, duration: 17, name: "M.R." },
		{ id: 5, x: "50%", y: "10%", delay: 3, duration: 19, name: "K.L." },
		{ id: 6, x: "45%", y: "85%", delay: 5, duration: 16, name: "R.T." },
	];

	return (
		<>
			{employees.map((emp) => (
				<motion.div
					key={emp.id}
					className="pointer-events-none absolute"
					style={{ left: emp.x, top: emp.y }}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: [0, 0.3, 0],
						scale: [0.8, 1.2, 0.8],
						y: [-20, 20, -20],
					}}
					transition={{
						delay: emp.delay,
						duration: emp.duration,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				>
					<div className="relative">
						<div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 bg-gradient-to-br from-gray-700 to-gray-900">
							<span className="font-medium text-gray-300 text-xs">
								{emp.name}
							</span>
						</div>
						<motion.div
							className="-top-1 -right-1 absolute h-3 w-3 rounded-full bg-red-500"
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
						/>
					</div>
				</motion.div>
			))}
		</>
	);
}

// Stats ticker showing platform capabilities
function StatsTicker() {
	const stats = [
		{ label: "Detection Accuracy", value: "99.7%", icon: Shield },
		{ label: "Average Detection Time", value: "< 24hrs", icon: Zap },
		{ label: "HRIS Integrations", value: "10+", icon: Building2 },
		{ label: "Data Security", value: "SOC 2", icon: Users },
	];

	return (
		<div className="pointer-events-none w-full overflow-hidden">
			<motion.div
				className="flex gap-4 whitespace-nowrap sm:gap-8"
				animate={{ x: [0, -1920] }}
				transition={{
					duration: 30,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
			>
				{[...stats, ...stats, ...stats].map((stat, index) => {
					const Icon = stat.icon;
					return (
						<div
							key={index}
							className="flex items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900/50 px-3 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2"
						>
							<Icon className="h-3 w-3 text-blue-400 sm:h-4 sm:w-4" />
							<span className="text-gray-400 text-xs sm:text-sm">
								{stat.label}:
							</span>
							<span className="font-bold text-white text-xs sm:text-sm">
								{stat.value}
							</span>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
}

// Interactive security scanner effect
function SecurityScanner() {
	const [isScanning, setIsScanning] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsScanning(true);
			setTimeout(() => setIsScanning(false), 3000);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	return (
		<AnimatePresence>
			{isScanning && (
				<motion.div
					className="pointer-events-none fixed inset-0 z-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)",
							height: "200px",
						}}
						animate={{
							y: [-200, window.innerHeight + 200],
						}}
						transition={{
							duration: 3,
							ease: "linear",
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default function WaitlistPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<main className="relative bg-black">
			{/* Navigation */}
			<Navigation />

			{/* Background Effects */}
			<div className="pointer-events-none fixed inset-0">
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
			</div>

			{/* Animated Elements */}
			<FloatingEmployees />
			<SecurityScanner />

			{/* Stats Ticker - now in normal flow */}
			<div className="relative z-10 pt-24 pb-8">
				<StatsTicker />
			</div>

			{/* Main Content */}
			<div className="relative z-10 flex items-center justify-center px-4 pb-8">
				<div className="mx-auto w-full max-w-6xl">
					<div className="grid w-full items-center gap-8 lg:grid-cols-2">
						{/* Left side - Hero content */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							{/* Badge */}
							<motion.div
								className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2"
								animate={{
									boxShadow: [
										"0 0 0 0 rgba(59, 130, 246, 0)",
										"0 0 0 10px rgba(59, 130, 246, 0.1)",
										"0 0 0 0 rgba(59, 130, 246, 0)",
									],
								}}
								transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
							>
								<Sparkles className="h-4 w-4 text-blue-400" />
								<span className="text-blue-300 text-sm">
									Limited Early Access
								</span>
							</motion.div>

							{/* Headline */}
							<div>
								<h1
									className={cn(
										getComponentClasses.heading("xl"),
										"mb-4 text-5xl text-white lg:text-6xl",
									)}
								>
									Stop paying
									<span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-normal">
										ghost employees
									</span>
								</h1>
								<p
									className={cn(
										getComponentClasses.body("lg"),
										"text-gray-400",
									)}
								>
									Join other companies using AI to detect employees working
									multiple jobs. Save millions in fraudulent payroll.
								</p>
							</div>

							{/* Features */}
							<div className="space-y-3">
								{[
									{ icon: Eye, text: "Real-time employment verification" },
									{ icon: Shield, text: "99.7% detection accuracy" },
									{ icon: Zap, text: "Results in under 24 hours" },
									{ icon: CheckCircle, text: "SOC 2 Type II certified" },
								].map((feature, index) => {
									const Icon = feature.icon;
									return (
										<motion.div
											key={index}
											className="flex items-center gap-3"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.3 + index * 0.1 }}
										>
											<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
												<Icon className="h-5 w-5 text-blue-400" />
											</div>
											<span className="text-gray-300">{feature.text}</span>
										</motion.div>
									);
								})}
							</div>
						</motion.div>

						{/* Right side - Simplified form */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<div className="relative mx-auto max-w-md">
								{/* Glow effect */}
								<div className="-inset-2 absolute rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg" />

								{/* Form container */}
								<div className="relative overflow-visible rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-xl">
									<WaitlistForm />
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</main>
	);
}

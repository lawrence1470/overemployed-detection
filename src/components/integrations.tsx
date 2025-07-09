"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

export default function IntegrationsSection() {
	const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(
		null,
	);

	return (
		<section className="relative py-16 lg:py-24">
			<div className={cn(getComponentClasses.container(), "relative z-10")}>
				{/* Header */}
				<motion.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2
						className={cn(getComponentClasses.heading("lg"), "mb-4 text-white")}
					>
						Works With Your Stack
					</h2>
					<p
						className={cn(
							getComponentClasses.body("lg"),
							"mx-auto max-w-2xl text-white/70",
						)}
					>
						One-click integration with leading HR platforms. Set up in minutes.
					</p>
				</motion.div>

				{/* Animated Logo Display */}
				<motion.div
					className="mx-auto max-w-4xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
						<AnimatedLogos
							hoveredIntegration={hoveredIntegration}
							setHoveredIntegration={setHoveredIntegration}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

// Animated Logos Component
const AnimatedLogos = ({
	hoveredIntegration,
	setHoveredIntegration,
}: {
	hoveredIntegration: string | null;
	setHoveredIntegration: (name: string | null) => void;
}) => {
	const scale = [1, 1.1, 1];
	const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

	// Generate animation sequence
	const sequence = hrSystems.map((_, index) => [
		`.logo-${index}`,
		{ scale, transform },
		{ duration: 0.8 },
	]);

	useEffect(() => {
		animate(sequence, {
			// @ts-ignore
			repeat: Number.POSITIVE_INFINITY,
			repeatDelay: 1,
		});
	}, []);

	return (
		<div className="relative h-40">
			{/* Animated connection lines */}
			<svg
				className="absolute inset-0 h-full w-full opacity-10"
				viewBox="0 0 400 160"
			>
				<motion.line
					x1="50"
					y1="80"
					x2="350"
					y2="80"
					stroke="white"
					strokeWidth="1"
					strokeDasharray="5,5"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
				/>
			</svg>

			{/* Logo Grid */}
			<div className="relative grid h-full grid-cols-3 items-center justify-center gap-4 md:grid-cols-6">
				{hrSystems.map((system, index) => {
					const LogoComponent = system.logo;
					const isHovered = hoveredIntegration === system.name;

					return (
						<motion.div
							key={system.name}
							className={`logo-${index} flex justify-center`}
							whileHover={{ scale: 1.15 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							<div
								className={cn(
									"relative flex h-14 w-14 items-center justify-center rounded-full",
									"cursor-pointer border border-white/10 bg-white/5 backdrop-blur-sm",
									"transition-all duration-300",
									isHovered && "border-white/30 bg-white/10",
								)}
								onMouseEnter={() => setHoveredIntegration(system.name)}
								onMouseLeave={() => setHoveredIntegration(null)}
							>
								<LogoComponent className="h-8 w-8 opacity-80 transition-opacity hover:opacity-100" />

								{/* Tooltip */}
								{isHovered && (
									<motion.div
										className="-top-10 -translate-x-1/2 absolute left-1/2 z-50 transform whitespace-nowrap rounded bg-black/90 px-2 py-1 text-white text-xs"
										initial={{ opacity: 0, y: 5 }}
										animate={{ opacity: 1, y: 0 }}
									>
										{system.name}
									</motion.div>
								)}
							</div>
						</motion.div>
					);
				})}
			</div>

			{/* Sparkles Effect */}
			<Sparkles />
		</div>
	);
};

// Sparkles Component
const Sparkles = () => {
	const randomMove = () => Math.random() * 2 - 1;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();

	return (
		<div className="pointer-events-none absolute inset-0">
			{[...Array(6)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.5, 0],
					}}
					transition={{
						duration: random() * 3 + 3,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: "3px",
						height: "3px",
						borderRadius: "50%",
					}}
					className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500"
				/>
			))}
		</div>
	);
};

// Logo Components
const WorkdayLogo = ({ className }: { className?: string }) => (
	<img
		src="/assets/optimized/Workday Logo.webp"
		alt="Workday"
		className={cn("object-contain", className)}
	/>
);

const ADPLogo = ({ className }: { className?: string }) => (
	<img
		src="/assets/optimized/ADP Image.webp"
		alt="ADP"
		className={cn("object-contain", className)}
	/>
);

const PaychexLogo = ({ className }: { className?: string }) => (
	<img
		src="/assets/optimized/Paychex Landing Page.webp"
		alt="Paychex"
		className={cn("object-contain", className)}
	/>
);

const BambooLogo = ({ className }: { className?: string }) => (
	<img
		src="/assets/optimized/BambooHR Image.webp"
		alt="BambooHR"
		className={cn("object-contain", className)}
	/>
);

const GustoLogo = ({ className }: { className?: string }) => (
	<img
		src="/assets/Gusto Inc Logo.svg"
		alt="Gusto"
		className={cn("object-contain", className)}
	/>
);

const JustWorksLogo = ({ className }: { className?: string }) => (
	<img
		src="/assets/optimized/JW Logo.webp"
		alt="JustWorks"
		className={cn("object-contain", className)}
	/>
);

const RipplingLogo = ({ className }: { className?: string }) => (
	<img
		src="/assets/optimized/Rippling Logo.jpg"
		alt="Rippling"
		className={cn("object-contain", className)}
	/>
);

// HR Systems data
const hrSystems = [
	{ name: "Workday", logo: WorkdayLogo },
	{ name: "BambooHR", logo: BambooLogo },
	{ name: "Paychex", logo: PaychexLogo },
	{ name: "ADP", logo: ADPLogo },
	{ name: "Gusto", logo: GustoLogo },
	{ name: "JustWorks", logo: JustWorksLogo },
	{ name: "Rippling", logo: RipplingLogo },
];

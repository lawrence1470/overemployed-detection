"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import VerifyHireLogo from "~/components/ui/verifyhire-logo";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollY } = useScroll();
	const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
	const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

	const updateScrolled = useCallback(() => {
		setIsScrolled(window.scrollY > 50);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", updateScrolled);
		return () => window.removeEventListener("scroll", updateScrolled);
	}, [updateScrolled]);

	return (
		<motion.nav
			className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-8 ${
				isScrolled
					? "border-white/10 border-b bg-black/90 shadow-xl backdrop-blur-xl"
					: "bg-transparent"
			}`}
			style={{
				backgroundColor: isScrolled ? undefined : `rgba(0,0,0,${navOpacity})`,
				backdropFilter: `blur(${navBlur}px)`,
			}}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
		>
			{/* Enhanced Logo */}
			<motion.a
				href="/"
				className="group flex cursor-pointer items-center space-x-3"
				whileHover={{ scale: 1.02 }}
				transition={{ type: "spring", stiffness: 400, damping: 30 }}
			>
				<motion.div
					className="relative flex h-9 w-9 items-center justify-center"
					whileHover={{ rotate: [0, -10, 10, 0] }}
					transition={{ duration: 0.6, type: "spring" }}
				>
					<VerifyHireLogo className="h-9 w-9" />
				</motion.div>

				<div className="flex flex-col">
					<span className="font-bold text-white text-xl tracking-tight transition-all duration-300 group-hover:text-white/90">
						VerifyHire
					</span>
					<span className="font-medium text-white/50 text-xs tracking-wide">
						Employee Verification
					</span>
				</div>
			</motion.a>

			{/* Enhanced CTA Button */}
			<div className="flex items-center space-x-4">
				{/* Access Site CTA Button */}
				<HoverBorderGradient
					as="a"
					containerClassName="rounded-xl"
					className="whitespace-nowrap border border-white/20 bg-white/10 px-6 py-3 font-medium text-sm text-white transition-all duration-300 hover:bg-white/20 md:text-base"
					duration={1}
					clockwise={true}
					{...{ href: "/waitlist" }}
				>
					Get Started
				</HoverBorderGradient>
			</div>
		</motion.nav>
	);
}

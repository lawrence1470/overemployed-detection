"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface OptimizedAnimationWrapperProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
	threshold?: number;
	animation?: "fadeIn" | "slideUp" | "slideDown" | "scale" | "none";
}

export function OptimizedAnimationWrapper({
	children,
	className = "",
	delay = 0,
	duration = 0.6,
	threshold = 0.1,
	animation = "fadeIn",
}: OptimizedAnimationWrapperProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [threshold]);

	const getAnimationConfig = () => {
		if (shouldReduceMotion || animation === "none") {
			return {
				initial: { opacity: 1 },
				animate: { opacity: 1 },
				transition: { duration: 0 },
			};
		}

		const configs = {
			fadeIn: {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
			},
			slideUp: {
				initial: { opacity: 0, y: 20 },
				animate: { opacity: 1, y: 0 },
			},
			slideDown: {
				initial: { opacity: 0, y: -20 },
				animate: { opacity: 1, y: 0 },
			},
			scale: {
				initial: { opacity: 0, scale: 0.95 },
				animate: { opacity: 1, scale: 1 },
			},
		};

		return {
			...configs[animation],
			transition: { duration, delay },
		};
	};

	return (
		<motion.div
			ref={ref}
			className={className}
			{...getAnimationConfig()}
			animate={
				isVisible ? getAnimationConfig().animate : getAnimationConfig().initial
			}
		>
			{children}
		</motion.div>
	);
}

"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-8 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-xl"
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
      <motion.div
        className="flex items-center space-x-3 group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-lg border border-white/20"
          whileHover={{
            rotate: [0, -10, 10, 0],
            boxShadow: "0 12px 30px rgba(255,255,255,0.25)",
          }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            className="h-5 w-5 rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-inner"
            whileHover={{ scale: 1.1 }}
          >
            {/* Subtle inner detail */}
            <div className="absolute inset-1 rounded bg-gradient-to-br from-white/10 to-transparent" />
          </motion.div>

          {/* Ambient glow effect */}
          <div className="absolute inset-0 rounded-xl bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        <div className="flex flex-col">
          <span className="font-bold text-xl text-white tracking-tight group-hover:text-white/90 transition-all duration-300">
            VerifyHire
          </span>
          <span className="text-xs text-white/50 font-medium tracking-wide">
            Employee Verification
          </span>
        </div>
      </motion.div>

      {/* Enhanced CTA Button */}
      <div className="flex items-center space-x-4">
        {/* Premium CTA Button */}
        <HoverBorderGradient
          as="a"
          containerClassName="rounded-xl"
          className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-50 transition-all duration-200 text-sm md:text-base whitespace-nowrap shadow-lg"
          duration={1}
          clockwise={true}
          {...{ href: "/waitlist" }}
        >
          <span className="flex items-center space-x-2">
            <span>Join Waitlist</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </HoverBorderGradient>
      </div>
    </motion.nav>
  );
}

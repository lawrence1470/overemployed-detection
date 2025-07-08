"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import SplitText from "~/components/ui/split-text";
import Orb from "~/components/Orb";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      {/* Orb Background - Covering entire section */}
      <div className="absolute inset-0">
        <Orb
          hue={240}
          hoverIntensity={1.0}
          rotateOnHover={false}
          forceHoverState={true}
        />
      </div>

      {/* Premium Background with enhanced depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80" />
        <motion.div
          className="absolute top-1/3 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-cyan-500/5 blur-2xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
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
          className="absolute top-24 left-8 hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-2xl lg:block"
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
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-white/90 text-xs font-medium">Active</span>
          </div>
          <div className="font-bold text-lg text-white mb-1">2,847</div>
          <div className="text-white/70 text-xs">Employees Verified</div>
        </motion.div>

        <motion.div
          className="absolute right-8 bottom-24 hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-2xl lg:block"
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
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-white/90 text-xs font-medium">Alert</span>
          </div>
          <div className="font-bold text-lg text-white mb-1">14</div>
          <div className="text-white/70 text-xs">Potential Matches</div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 items-center justify-center px-4 pt-24">
        {/* Left Content */}
        <div className="flex flex-col items-center justify-center lg:items-start">
          {/* Premium badge with magnetic hover */}
          <motion.div
            className="mb-6 flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-xl shadow-2xl cursor-pointer group"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <motion.div
              className="h-2 w-2 rounded-full bg-blue-400"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-white/90 text-sm font-medium group-hover:text-white transition-colors">
              Employee Verification Platform
            </span>
          </motion.div>

          {/* Premium Main Heading with magnetic effect */}
          <motion.div
            className="mb-4 text-center lg:text-left relative"
            style={{ x: springX, y: springY }}
          >
            <div className="relative">
              {/* Glow effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-lg" />

              <SplitText
                text="Are We Hiring the Same Guy?"
                className="block font-bold text-5xl text-white leading-tight md:text-7xl relative z-10"
                delay={80}
                duration={1.0}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 60, rotationX: -90 }}
                to={{ opacity: 1, y: 0, rotationX: 0 }}
                threshold={0.8}
                rootMargin="0px"
                textAlign="left"
              />
              <SplitText
                text="the Same Guy?"
                className="block font-bold text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight md:text-7xl relative z-10"
                delay={60}
                duration={1.0}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 60, rotationX: -90 }}
                to={{ opacity: 1, y: 0, rotationX: 0 }}
                threshold={0.8}
                rootMargin="0px"
                textAlign="left"
              />
            </div>
          </motion.div>

          {/* Premium subtitle with enhanced typography */}
          <motion.p
            className="mb-8 max-w-2xl text-center text-white/80 text-lg leading-relaxed lg:text-left font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Detect dual employment conflicts with advanced verification
            technology
          </motion.p>

          {/* Premium CTA buttons with advanced interactions */}
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <HoverBorderGradient
              as="a"
              containerClassName="rounded-xl"
              className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-50 transition-colors"
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
        className="absolute bottom-4 left-8 text-white/60 text-xs font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to explore
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute right-8 bottom-4 text-white/60 text-xs font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        Enterprise Solution
      </motion.div>
    </section>
  );
}

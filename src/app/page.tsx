"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef, useEffect, useState } from "react";
import { HeroSection } from "~/components/hero-section";
import { FeaturesSection } from "~/components/features-section";
import { HowItWorksSection } from "~/components/how-it-works";
import { GlowingFeaturesSection } from "~/components/glowing-features-section";
import { MoonlightingSection } from "~/components/moonlighting-section";
import { SohamSection } from "~/components/soham-section";
import { FAQSection } from "~/components/faq-section";
import { WaitlistSection } from "~/components/waitlist-section";
import IntegrationsSection from "~/components/integrations";
import ProblemSolutionSection from "~/components/problem-solution-section";
import OveremployedRedditSection from "~/components/overemployed-reddit-section";

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
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Premium Glass Cards */}
      <motion.div
        style={{ y: y1, rotate, scale }}
        className="absolute top-20 left-10 w-24 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
        <div className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/40 rounded-full" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full" />
        <motion.div
          className="absolute inset-2 bg-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        style={{
          y: y1,
          rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
        }}
        className="absolute bottom-20 left-1/4 w-16 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl" />
        <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
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
            repeat: Infinity,
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
    [0.3, 0.1, 0.3]
  );
  const hue = useTransform(scrollYProgress, [0, 1], [240, 300]);

  return (
    <main ref={containerRef} className="relative overflow-hidden">
      {/* Enhanced Global Parallax Background */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
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
								hsl(${latest + 90}, 40%, 4%) 100%)`
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

      {/* Features Section */}
      <AnimatedSection className="relative z-10">
        <FeaturesSection />
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

      {/* Glowing Features with Parallax */}
      <AnimatedSection direction="left" delay={0.2} className="relative z-10">
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"
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
        <div className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
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
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <ProblemSolutionSection />
        </div>
      </AnimatedSection>

      {/* Pointer Highlight with Magnetic Effect */}
      <AnimatedSection direction="up" delay={0.4} className="relative z-10">
        <motion.div
          className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center relative overflow-hidden"
          whileInView={{
            background: [
              "linear-gradient(135deg, rgb(243 244 246) 0%, rgb(243 244 246) 100%)",
              "linear-gradient(135deg, rgb(243 244 246) 0%, rgb(249 250 251) 50%, rgb(243 244 246) 100%)",
              "linear-gradient(135deg, rgb(243 244 246) 0%, rgb(243 244 246) 100%)",
            ],
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
          <OveremployedRedditSection />
        </motion.div>
      </AnimatedSection>

      {/* Moonlighting with Floating Animation */}
      <AnimatedSection direction="left" delay={0.2} className="relative z-10">
        <div className="relative">
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-orange-600/5 to-orange-500/5 rounded-full blur-2xl"
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <MoonlightingSection />
        </div>
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
              repeat: Infinity,
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

"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const steps = [
  {
    number: "01",
    title: "Connect in 2 Min.",
    subtitle: "Connect Your HRIS",
    description:
      "Easily connect & manage your employee data using our secure OAuth integration platform.",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/5 to-blue-600/5",
  },
  {
    number: "02",
    title: "Let Us Monitor",
    subtitle: "We Scan 24/7",
    description:
      "Save hours of manual checking. We'll monitor 10,000+ companies & provide real-time detection service.",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-500/5 to-purple-600/5",
  },
  {
    number: "03",
    title: "Your Company Stays Protected",
    subtitle: "Get Instant Alerts",
    description:
      "Feel the peace of mind knowing your company is protected from dual employment fraud 24/7.",
    color: "green",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-500/5 to-green-600/5",
  },
];

export function HowItWorksSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden"
    >
      <motion.div className="relative z-10" style={{ opacity }}>
        <div className={cn(getComponentClasses.container(), "max-w-7xl")}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={cn(
                getComponentClasses.heading("xl"),
                "text-white mb-6"
              )}
            >
              How it Works
            </h2>
            <p
              className={cn(
                getComponentClasses.body("lg"),
                "text-white/70 max-w-3xl mx-auto"
              )}
            >
              It's never been easier to protect your company from dual employment.
              <br />
              You won't even have to leave your desk.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number Badge */}
                <motion.div
                  className={cn(
                    "absolute -top-6 left-8 z-20 w-16 h-16 rounded-full",
                    "bg-gradient-to-br flex items-center justify-center",
                    "text-white font-bold text-2xl shadow-2xl",
                    step.gradient
                  )}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {step.number}
                </motion.div>

                {/* Card Container */}
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 lg:h-72 rounded-t-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/5">
                    {/* Illustrations */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      {index === 0 && (
                        // Connect illustration
                        <div className="relative w-full h-full flex items-center justify-center">
                          <motion.div
                            className="absolute w-32 h-32 rounded-2xl bg-blue-500/10 border border-blue-500/20"
                            animate={{
                              rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute w-24 h-24 rounded-xl bg-blue-500/20 border border-blue-500/30"
                            style={{ top: "20%", right: "25%" }}
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          />
                          <svg
                            className="relative z-10 w-20 h-20 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          {/* Connection lines */}
                          <motion.div
                            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
                            style={{ left: "50%", top: "-30%" }}
                            animate={{
                              opacity: [0, 1, 0],
                              scaleY: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      )}
                      {index === 1 && (
                        // Monitor illustration
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Scanning radar effect */}
                          <motion.div
                            className="absolute w-40 h-40 rounded-full border-2 border-purple-500/20"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                          <motion.div
                            className="absolute w-32 h-32 rounded-full border-2 border-purple-500/30"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.6, 0, 0.6],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeOut",
                              delay: 0.5,
                            }}
                          />
                          <div className="relative w-24 h-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                            <svg
                              className="w-12 h-12 text-purple-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </div>
                          {/* Scanning line */}
                          <motion.div
                            className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                            animate={{
                              y: [-60, 60, -60],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      )}
                      {index === 2 && (
                        // Alert illustration
                        <div className="relative w-full h-full flex items-center justify-center">
                          <motion.div
                            className="absolute w-32 h-32 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <svg
                              className="w-16 h-16 text-green-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </motion.div>
                          {/* Notification badges */}
                          <motion.div
                            className="absolute top-10 right-10 w-12 h-12 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center"
                            animate={{
                              opacity: [0, 1, 1, 0],
                              scale: [0.8, 1, 1, 0.8],
                              y: [0, -5, -5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          >
                            <span className="text-green-400 text-xs font-bold">!</span>
                          </motion.div>
                          <motion.div
                            className="absolute bottom-10 left-10 w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center"
                            animate={{
                              opacity: [0, 1, 1, 0],
                              scale: [0.8, 1, 1, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeOut",
                              delay: 1,
                            }}
                          >
                            <span className="text-green-400 text-xs">✓</span>
                          </motion.div>
                        </div>
                      )}
                    </div>
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-b-2xl border border-white/5 border-t-0 p-8 pt-10">
                    <h3 className="text-white font-bold text-xl mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "bg-gradient-to-br pointer-events-none blur-2xl",
                      step.bgGradient
                    )}
                    style={{ transform: "scale(0.95)" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#waitlist"
              className={cn(
                "inline-flex items-center px-8 py-4 rounded-xl",
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "text-white font-medium",
                "hover:bg-white/20 hover:border-white/30",
                "transition-all duration-200"
              )}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
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
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
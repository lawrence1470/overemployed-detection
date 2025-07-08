"use client";

import React from "react";
import { motion } from "motion/react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { designSystem } from "~/lib/design-system";

export function DeploymentHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-blue-800 to-black text-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-800/95 to-black/100" />

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
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
          className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-cyan-400/10 blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Top pill button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-gray-800/30 text-gray-300 hover:text-white px-6 py-2 text-sm font-medium backdrop-blur-sm"
          >
            <span className="flex items-center space-x-2">
              <span>Flexible Plans for You</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </HoverBorderGradient>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="mb-6 max-w-4xl font-bold leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Deploy your website{" "}
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            in seconds, not hours
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          With our state of the art, cutting edge, we are so back kinda hosting
          services, you can deploy your website in seconds.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Start a project button */}
          <motion.button
            className="rounded-xl bg-gray-800/50 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a project
          </motion.button>

          {/* Book a call button */}
          <motion.button
            className="rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

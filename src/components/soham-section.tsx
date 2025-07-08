"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

export function SohamSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white overflow-hidden">
      {/* Premium Minimal Background with smooth transition */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black/80 to-purple-950/20" />
        <motion.div
          className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Floating Elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-20 right-12 hidden lg:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60" />
              <span className="text-xs text-white/40 font-medium">
                PORTFOLIO
              </span>
            </div>
            <div className="text-2xl font-light text-white/90">4</div>
            <div className="text-xs text-white/30">Companies</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-12 hidden lg:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60" />
              <span className="text-xs text-white/40 font-medium">
                EFFICIENCY
              </span>
            </div>
            <div className="text-2xl font-light text-white/90">10%</div>
            <div className="text-xs text-white/30">Per Role</div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className={cn(getComponentClasses.container(), "relative z-10")}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Large Profile */}
          <motion.div
            className="flex flex-col items-center lg:items-start space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl"
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(255,255,255,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full bg-orange-400/80" />
              <span className="text-sm text-white/70 font-medium">
                SERIAL OPTIMIZATION
              </span>
            </motion.div>

            {/* Large Profile Image */}
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/assets/soham.JPG"
                  alt="Soham Parekh"
                  width={400}
                  height={400}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Minimal Stats Row */}
            <div className="flex space-x-6 pt-4">
              {[
                { value: "10%", label: "attention" },
                { value: "4x", label: "dilution" },
                { value: "$250K", label: "wasted" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-xl font-light text-white/90 mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Clean Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight">
                Don't Hire Another{" "}
                <span className="relative">
                  <span className="relative z-10 font-medium border-b border-orange-400/50 pb-1">
                    Soham Parekh
                  </span>
                </span>
              </h2>

              <p className="text-xl text-white/60 font-light leading-relaxed max-w-lg">
                He's smart. Too smart. For all four of your competitors.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <motion.p
                className="text-lg text-white/70 font-light"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                You thought you hired a 10x engineer.
              </motion.p>
              <motion.p
                className="text-lg text-white/70 font-light"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Turns out you hired 10% of a 10x engineer.
              </motion.p>
              <motion.p
                className="text-base text-orange-400/80 font-light pt-2"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Stop funding a man's entire Series A portfolio with your
                payroll.
              </motion.p>
            </div>

            {/* Premium CTA */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#waitlist"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-xl text-white font-medium transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Join Waitlist</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

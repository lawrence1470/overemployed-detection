"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getComponentClasses, designSystem } from "~/lib/design-system";
import { cn } from "~/lib/utils";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";

export function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist"
        className="min-h-screen bg-black text-white flex items-center justify-center px-4"
      >
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 300,
              }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h2
              className={cn(
                getComponentClasses.heading("xl"),
                "text-white mb-6"
              )}
            >
              You're in!
            </h2>
            <p className={cn(getComponentClasses.body("lg"), "text-white/70")}>
              Thanks for joining our waitlist. We'll keep you updated on our
              progress.
            </p>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={cn(
              designSystem.typography.display.lg,
              "text-white mb-6"
            )}
          >
            Join the waitlist
          </h1>
          <p
            className={cn(
              getComponentClasses.body("lg"),
              "text-white/70 max-w-xl mx-auto"
            )}
          >
            Receive all the latest news and updates,
            <br />
            as well as early access to the beta.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center">
            <HoverBorderGradient
              as="button"
              containerClassName="rounded-xl"
              className="bg-gray-800/50 text-white hover:bg-gray-700/50 px-8 py-4 font-semibold backdrop-blur-sm transition-all duration-300 whitespace-nowrap relative overflow-hidden"
              onClick={(e) => handleSubmit(e as any)}
            >
              <motion.span
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Join waitlist</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </motion.span>
            </HoverBorderGradient>
          </div>
        </motion.form>

        <motion.div
          className="border-t border-white/10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p
            className={cn(
              designSystem.typography.label.md,
              "text-white/50 mb-8"
            )}
          >
            Backed by
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            {/* Unified investor logos */}
            <motion.div
              className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <span className="text-white font-bold text-xl">M</span>
            </motion.div>
            <div className="text-white/80 text-xl font-light">ventures*</div>
            <motion.div
              className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <motion.div
              className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <div className="w-6 h-6 bg-white/80 rounded-sm"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

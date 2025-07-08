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
    image: "/api/placeholder/600/400", // Replace with actual image
    color: "orange",
    gradient: "from-orange-500 to-red-500",
  },
  {
    number: "02",
    title: "Let Us Monitor",
    subtitle: "We Scan 24/7",
    description:
      "Save hours of manual checking. We'll monitor 10,000+ companies & provide real-time detection service.",
    image: "/api/placeholder/600/400", // Replace with actual image
    color: "orange",
    gradient: "from-orange-500 to-red-500",
  },
  {
    number: "03",
    title: "Your Company Stays Protected",
    subtitle: "Get Instant Alerts",
    description:
      "Feel the peace of mind knowing your company is protected from dual employment fraud 24/7.",
    image: "/api/placeholder/600/400", // Replace with actual image
    color: "orange",
    gradient: "from-orange-500 to-red-500",
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
      className="relative py-20 lg:py-32 bg-black overflow-hidden"
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
                  <div className="relative h-64 lg:h-72 rounded-t-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Placeholder for actual images/illustrations */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {index === 0 && (
                        <svg
                          className="w-32 h-32 text-white/20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg
                          className="w-32 h-32 text-white/20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg
                          className="w-32 h-32 text-white/20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      )}
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-b-2xl border border-white/10 border-t-0 p-8 pt-10">
                    <h3 className="text-white font-bold text-xl mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "bg-gradient-to-br pointer-events-none blur-xl",
                      step.gradient
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
                "inline-flex items-center px-8 py-4 rounded-full",
                "bg-gradient-to-r from-orange-500 to-red-500",
                "text-white font-semibold text-lg",
                "hover:from-orange-600 hover:to-red-600",
                "transition-all duration-200 shadow-2xl"
              )}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
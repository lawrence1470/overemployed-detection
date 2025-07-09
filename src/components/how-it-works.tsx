"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const steps = [
  {
    number: "01",
    title: "Integrate Your Payroll",
    subtitle: "Connect Your HRIS",
    description:
      "Connect your HRIS/payroll system to sync employee information.",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/5 to-blue-600/5",
  },
  {
    number: "02",
    title: "Monitor Your Employees",
    subtitle: "We Scan 24/7",
    description:
      "We will compare your employees to our (growing) network of thousands of companies.",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-500/5 to-purple-600/5",
  },
  {
    number: "03",
    title: "Get notified!",
    subtitle: "Get Instant Alerts",
    description:
      "If a match pops up, you will be immediately notified. Stay protected from dual employment fraud.",
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
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 py-20 lg:py-32"
    >
      <motion.div className="relative z-10" style={{ opacity }}>
        <div className={cn(getComponentClasses.container(), "max-w-7xl")}>
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={cn(
                getComponentClasses.heading("xl"),
                "mb-6 text-white"
              )}
            >
              How it Works
            </h2>
            <p
              className={cn(
                getComponentClasses.body("lg"),
                "mx-auto max-w-3xl text-white/70"
              )}
            >
              It's never been easier to protect your company from dual
              employment.
              <br />
              You won't even have to leave your desk.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Step Number Badge */}
                <motion.div
                  className={cn(
                    "-top-6 absolute left-8 z-20 h-16 w-16 rounded-full",
                    "flex items-center justify-center bg-gradient-to-br",
                    "font-bold text-2xl text-white shadow-2xl",
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
                  <div className="relative h-64 overflow-hidden rounded-t-2xl border border-white/5 bg-gradient-to-br from-gray-900 to-black lg:h-72">
                    {/* Illustrations */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      {index === 0 && (
                        // Payroll/HRIS integration illustration
                        <div className="relative flex h-full w-full items-center justify-center">
                          {/* Main Rippling Logo */}
                          <motion.div
                            className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            <img
                              src="/assets/optimized/Rippling Logo.jpg"
                              alt="Rippling"
                              className="h-16 w-16 rounded-lg object-cover"
                            />
                          </motion.div>

                          {/* Other HRIS logos - placeholder circles */}
                          <motion.div
                            className="absolute top-8 left-8 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/20"
                            animate={{
                              y: [0, -5, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          >
                            <span className="font-bold text-blue-400 text-xs">
                              HR
                            </span>
                          </motion.div>

                          <motion.div
                            className="absolute right-8 bottom-8 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/20"
                            animate={{
                              y: [0, 5, 0],
                            }}
                            transition={{
                              duration: 2.8,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 1,
                            }}
                          >
                            <span className="font-bold text-blue-400 text-xs">
                              ERP
                            </span>
                          </motion.div>

                          {/* Connection lines */}
                          <motion.div
                            className="absolute h-20 w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
                            style={{ left: "50%", top: "-30%" }}
                            animate={{
                              opacity: [0, 1, 0],
                              scaleY: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      )}
                      {index === 1 && (
                        // Monitor illustration
                        <div className="relative flex h-full w-full items-center justify-center">
                          {/* Scanning radar effect */}
                          <motion.div
                            className="absolute h-40 w-40 rounded-full border-2 border-purple-500/20"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeOut",
                            }}
                          />
                          <motion.div
                            className="absolute h-32 w-32 rounded-full border-2 border-purple-500/30"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.6, 0, 0.6],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeOut",
                              delay: 0.5,
                            }}
                          />
                          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10">
                            <svg
                              className="h-12 w-12 text-purple-400"
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
                            className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                            animate={{
                              y: [-60, 60, -60],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      )}
                      {index === 2 && (
                        // Alert illustration
                        <div className="relative flex h-full w-full items-center justify-center">
                          <motion.div
                            className="absolute flex h-32 w-32 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            <svg
                              className="h-16 w-16 text-green-400"
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
                            className="absolute top-10 right-10 flex h-12 w-12 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20"
                            animate={{
                              opacity: [0, 1, 1, 0],
                              scale: [0.8, 1, 1, 0.8],
                              y: [0, -5, -5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeOut",
                            }}
                          >
                            <span className="font-bold text-green-400 text-xs">
                              !
                            </span>
                          </motion.div>
                          <motion.div
                            className="absolute bottom-10 left-10 flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20"
                            animate={{
                              opacity: [0, 1, 1, 0],
                              scale: [0.8, 1, 1, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
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
                  <div className="relative rounded-b-2xl border border-white/5 border-t-0 bg-gray-900/50 p-8 pt-10 backdrop-blur-xl">
                    <h3 className="mb-4 font-bold text-white text-xl">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      "pointer-events-none bg-gradient-to-br blur-2xl",
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
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#waitlist"
              className={cn(
                "inline-flex items-center rounded-xl px-8 py-4",
                "border border-white/20 bg-white/10 backdrop-blur-sm",
                "font-medium text-white",
                "hover:border-white/30 hover:bg-white/20",
                "transition-all duration-200"
              )}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg
                className="ml-2 h-5 w-5"
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

          {/* Security Certifications Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-sm text-white/50">
              Trusted by enterprises with industry-leading security
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {securityCertifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <cert.component className="h-12 w-auto transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Security Certification Components
const ISO27001Logo = ({ className }: { className?: string }) => (
  <img
    src="/assets/optimized/ISO 27001 Certification (1).webp"
    alt="ISO 27001 Certified"
    className={className}
    loading="lazy"
  />
);

const HIPAALogo = ({ className }: { className?: string }) => (
  <img
    src="/assets/optimized/HIPAA Compliant Image.webp"
    alt="HIPAA Compliant"
    className={className}
    loading="lazy"
  />
);

const AICPALogo = ({ className }: { className?: string }) => (
  <img
    src="/assets/optimized/AICPA Logo.webp"
    alt="AICPA Certified"
    className={className}
    loading="lazy"
  />
);

const GDPRLogo = ({ className }: { className?: string }) => (
  <img
    src="/assets/optimized/GDPR Compliant.webp"
    alt="GDPR Compliant"
    className={className}
    loading="lazy"
  />
);

// Security Certifications data (using available certifications)
const securityCertifications = [
  { name: "ISO 27001", component: ISO27001Logo },
  { name: "HIPAA Compliant", component: HIPAALogo },
  { name: "AICPA Certified", component: AICPALogo },
  { name: "GDPR Compliant", component: GDPRLogo },
];

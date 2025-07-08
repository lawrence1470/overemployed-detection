"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const steps = [
  {
    number: "01",
    title: "Connect Your HRIS",
    description: "Seamlessly integrate with 100+ HR platforms in under 5 minutes",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    features: ["OAuth 2.0", "SOC 2 Compliant", "Auto-sync"],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    platforms: ["BambooHR", "Gusto", "Workday", "Rippling", "ADP"],
  },
  {
    number: "02",
    title: "AI Monitors 24/7",
    description: "Our network scans 10,000+ companies and job boards continuously",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    features: ["10K+ Companies", "Real-time", "99.9% Accuracy"],
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    sources: ["LinkedIn", "Indeed", "Company DBs", "Public Records"],
  },
  {
    number: "03",
    title: "Instant Alerts",
    description: "Get notified immediately with evidence and action plans",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    features: ["Email/Slack/SMS", "Detailed Reports", "Legal Guidance"],
    color: "red",
    gradient: "from-red-500 to-orange-500",
    deliverables: ["Evidence Report", "Risk Score", "Action Plan"],
  },
];

export function HowItWorksSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10"
        style={{ opacity, scale }}
      >
        <div className={cn(getComponentClasses.container())}>
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </motion.div>

            <h2 className={cn(getComponentClasses.heading('xl'), "text-white mb-6")}>
              Three Simple Steps to
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Protect Your Company
              </span>
            </h2>
            <p className={cn(getComponentClasses.body('lg'), "text-white/70 max-w-3xl mx-auto")}>
              Our automated system works seamlessly in the background, 
              protecting your company from dual employment fraud 24/7.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent -z-10" />
                )}

                {/* Step Card */}
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Glow Effect */}
                  <div className={cn(
                    "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r",
                    step.gradient
                  )} />

                  {/* Card Content */}
                  <div className="relative h-full bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 overflow-hidden">
                    {/* Step Number */}
                    <div className="absolute top-8 right-8 text-6xl font-bold text-white/5">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-6",
                        step.gradient
                      )}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className={cn(getComponentClasses.heading('md'), "text-white mb-3")}>
                      {step.title}
                    </h3>
                    <p className={cn(getComponentClasses.body('sm'), "text-white/70 mb-6")}>
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {step.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full bg-gradient-to-r",
                            step.gradient
                          )} />
                          <span className="text-sm text-white/60">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-6 border-t border-white/10">
                      {step.platforms && (
                        <div className="flex flex-wrap gap-2">
                          {step.platforms.map((platform, i) => (
                            <motion.span
                              key={platform}
                              className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + i * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                scale: 1.05, 
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderColor: "rgba(255,255,255,0.3)"
                              }}
                            >
                              {platform}
                            </motion.span>
                          ))}
                        </div>
                      )}

                      {step.sources && (
                        <div className="grid grid-cols-2 gap-2">
                          {step.sources.map((source, i) => (
                            <motion.div
                              key={source}
                              className="text-xs px-3 py-2 rounded-lg bg-white/5 text-white/50 border border-white/10 text-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + i * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderColor: "rgba(255,255,255,0.3)"
                              }}
                            >
                              {source}
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {step.deliverables && (
                        <div className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <motion.div
                              key={item}
                              className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-white/5 text-white/50 border border-white/10"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + i * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderColor: "rgba(255,255,255,0.3)"
                              }}
                            >
                              <span>{item}</span>
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Interactive Demo */}
            <motion.div 
              className="inline-flex items-center gap-2 text-sm text-white/60 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>See it in action</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#waitlist"
                className="group relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Start Free Trial</span>
                <svg className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <motion.button
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Demo
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
            </div>

            {/* Trust Badges */}
            <motion.div 
              className="flex items-center justify-center gap-8 mt-8 text-xs text-white/40"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5-minute setup
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SOC 2 compliant
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
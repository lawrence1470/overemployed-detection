"use client";
import React from "react";
import { motion } from "motion/react";
import { StickyScroll } from "~/components/ui/sticky-scroll-reveal";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const content = [
  {
    title: "Connect Your HR Systems",
    description:
      "Seamlessly integrate with your existing HRIS platforms using OAuth 2.0 authentication. Connect Workday, ADP, BambooHR, Paychex, Gusto, and JustWorks in under 5 minutes with enterprise-grade security.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] text-white p-8">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🔗</div>
          <h3 className="text-xl font-bold">HR Integration</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-white/20 rounded px-2 py-1">Workday</div>
            <div className="bg-white/20 rounded px-2 py-1">ADP</div>
            <div className="bg-white/20 rounded px-2 py-1">BambooHR</div>
            <div className="bg-white/20 rounded px-2 py-1">Paychex</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Real-Time Data Analysis",
    description:
      "Our AI-powered engine continuously monitors employee work patterns, calendar overlaps, and schedule conflicts across all connected systems. Advanced algorithms detect anomalies that indicate potential dual employment.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] p-8">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🧠</div>
          <h3 className="text-xl font-bold">AI Detection</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between bg-white/20 rounded px-3 py-2">
              <span>Calendar Analysis</span>
              <span className="text-green-300">✓</span>
            </div>
            <div className="flex items-center justify-between bg-white/20 rounded px-3 py-2">
              <span>Pattern Recognition</span>
              <span className="text-green-300">✓</span>
            </div>
            <div className="flex items-center justify-between bg-white/20 rounded px-3 py-2">
              <span>Anomaly Detection</span>
              <span className="text-yellow-300">⚡</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Instant Alerts & Reporting",
    description:
      "Get immediate notifications when suspicious employment patterns are detected. Comprehensive reports provide actionable insights for HR teams with detailed evidence and risk assessments.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] text-white p-8">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🚨</div>
          <h3 className="text-xl font-bold">Smart Alerts</h3>
          <div className="space-y-2 text-sm">
            <div className="bg-red-500/30 border border-red-400/50 rounded px-3 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span>High Risk Detected</span>
              </div>
            </div>
            <div className="bg-yellow-500/30 border border-yellow-400/50 rounded px-3 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Schedule Conflict</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Compliance & Documentation",
    description:
      "Generate detailed compliance reports with evidence chains for legal teams. All data handling follows SOC 2 standards with end-to-end encryption. Export reports in multiple formats for audit trails.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] text-white p-8">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-bold">Compliance Ready</h3>
          <div className="space-y-2 text-sm">
            <div className="bg-white/20 rounded px-3 py-2">SOC 2 Compliant</div>
            <div className="bg-white/20 rounded px-3 py-2">Audit Trail</div>
            <div className="bg-white/20 rounded px-3 py-2">Legal Documentation</div>
            <div className="bg-white/20 rounded px-3 py-2">Export Options</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className={cn(getComponentClasses.container(), "relative z-10")}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ⚡ How It Works
          </motion.div>

          <h2 className={cn(getComponentClasses.heading('xl'), "text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text")}>
            Catch Moonlighters in 4 Simple Steps
          </h2>
          <p className={cn(getComponentClasses.body('lg'), "text-white/70 max-w-3xl mx-auto leading-relaxed")}>
            From integration to detection in minutes. Our platform automates the entire process of identifying dual employment patterns across your organization.
          </p>
        </motion.div>

        {/* Sticky Scroll Content */}
        <motion.div 
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <StickyScroll content={content} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#waitlist"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm border border-white/10 transition-all duration-200 group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Free Trial</span>
            <motion.svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
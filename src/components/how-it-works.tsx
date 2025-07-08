"use client";
import React from "react";
import { motion } from "motion/react";
import { HorizontalTimeline } from "~/components/ui/horizontal-timeline";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const timelineData = [
  {
    title: "Connect your HRIS",
    subtitle: "Sync your payroll data to load all your employees and identifying information.",
    content: (
      <motion.div 
        className="max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center">
            <span className="text-4xl">🔗</span>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">Quick Integration</h3>
            <p className="text-white/70 leading-relaxed">
              One-click OAuth setup with BambooHR, Gusto, Workday, and 100+ other HR platforms. 
              Enterprise-ready with SOC 2 compliance.
            </p>
          </div>
          <div className="pt-4 w-full">
            <div className="text-sm text-white/50">Takes just 5 minutes</div>
          </div>
        </div>
      </motion.div>
    ),
  },
  {
    title: "VerifyHire monitors",
    subtitle: "We compare your data to our network, job boards, LinkedIn, and more.",
    content: (
      <motion.div 
        className="max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center">
            <span className="text-4xl">🔍</span>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">AI-Powered Detection</h3>
            <p className="text-white/70 leading-relaxed">
              Our network scans 10,000+ companies, major job boards, and LinkedIn profiles. 
              Advanced pattern matching identifies dual employment instantly.
            </p>
          </div>
          <div className="pt-4 w-full">
            <div className="flex items-center justify-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <span className="text-green-400">●</span> Real-time
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">●</span> 24/7 monitoring
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Get notified",
    subtitle: "Receive instant alerts with detailed reports and recommended actions.",
    content: (
      <motion.div 
        className="max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
            <motion.span 
              className="text-4xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚨
            </motion.span>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">Instant Alerts</h3>
            <p className="text-white/70 leading-relaxed">
              Get notified via email, Slack, or SMS when we detect a match. 
              Detailed reports include evidence and legal guidance for next steps.
            </p>
          </div>
          <div className="pt-4 w-full">
            <div className="text-sm text-white/50">Average detection time: &lt;24 hours</div>
          </div>
        </div>
      </motion.div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
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

      <div className="relative z-10">
        {/* Section Header */}
        <div className={cn(getComponentClasses.container())}>
          <motion.div 
            className="text-center mb-0"
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
              ⚡ Simple Process
            </motion.div>

            <h2 className={cn(getComponentClasses.heading('xl'), "text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text")}>
              How VerifyHire Works
            </h2>
            <p className={cn(getComponentClasses.body('lg'), "text-white/70 max-w-3xl mx-auto leading-relaxed")}>
              Three simple steps to protect your company from dual employment fraud. Get started in minutes, see results immediately.
            </p>
          </motion.div>
        </div>

        {/* Timeline Content */}
        <motion.div 
          className="relative w-full -mx-8 md:-mx-12 lg:-mx-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <HorizontalTimeline data={timelineData} />
        </motion.div>

        {/* Bottom CTA */}
        <div className={cn(getComponentClasses.container())}>
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#waitlist"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium transition-all duration-200 group shadow-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Free Trial</span>
              <motion.svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.a>
            <p className="mt-4 text-sm text-white/60">
              No credit card required • Setup in 5 minutes
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
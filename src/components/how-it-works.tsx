"use client";
import React from "react";
import { motion } from "motion/react";
import { Timeline } from "~/components/ui/timeline";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const timelineData = [
  {
    title: "Step 1",
    content: (
      <div>
        <h3 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200 md:text-xl">
          Connect your HRIS
        </h3>
        <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
          Sync your payroll data to load all your employees and identifying information. One-click integration with major HR platforms.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* HRIS Integration Visual */}
          <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-white shadow-xl">
            <div className="text-center space-y-3">
              <div className="text-4xl mb-2">🔗</div>
              <h4 className="font-bold">Quick Setup</h4>
              <p className="text-xs opacity-90">5-minute OAuth flow</p>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-white shadow-xl">
            <div className="text-center space-y-3">
              <div className="text-4xl mb-2">🏢</div>
              <h4 className="font-bold">100+ Integrations</h4>
              <p className="text-xs opacity-90">BambooHR, Gusto, Workday...</p>
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold mb-1">Enterprise Ready</h4>
                <p className="text-sm opacity-90">SOC 2 compliant, end-to-end encryption</p>
              </div>
              <div className="text-3xl">🛡️</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div>
        <h3 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200 md:text-xl">
          VerifyHire monitors
        </h3>
        <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
          We'll compare your employment data to thousands of other companies in our network, job boards, LinkedIn, and more.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Monitoring Visuals */}
          <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white shadow-xl">
            <div className="space-y-3">
              <div className="text-3xl">🔍</div>
              <h4 className="font-bold">Network Scan</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span>Companies</span>
                  <span className="text-green-300">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Job Boards</span>
                  <span className="text-green-300">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>LinkedIn</span>
                  <span className="text-green-300">✓</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-6 text-white shadow-xl">
            <div className="space-y-3">
              <div className="text-3xl">🤖</div>
              <h4 className="font-bold">AI Analysis</h4>
              <p className="text-xs opacity-90">Pattern matching across millions of profiles</p>
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 p-6 text-white shadow-xl">
            <div className="text-center space-y-3">
              <div className="text-3xl">⚡</div>
              <h4 className="font-bold">Real-Time Detection</h4>
              <p className="text-sm opacity-90">Continuous monitoring with instant results</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div>
        <h3 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200 md:text-xl">
          Get notified
        </h3>
        <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
          If we find a potential match, you'll be notified immediately with detailed information to help you take action.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Alert Visuals */}
          <div className="rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-xl">
            <div className="space-y-3">
              <div className="text-3xl animate-pulse">🚨</div>
              <h4 className="font-bold">Instant Alerts</h4>
              <p className="text-xs opacity-90">Email, Slack, SMS notifications</p>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-red-500 to-pink-500 p-6 text-white shadow-xl">
            <div className="space-y-3">
              <div className="text-3xl">📊</div>
              <h4 className="font-bold">Detailed Reports</h4>
              <p className="text-xs opacity-90">Evidence & recommendations</p>
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold mb-1">Take Action</h4>
                <p className="text-sm opacity-90">Clear next steps with legal guidance</p>
              </div>
              <div className="text-3xl">⚖️</div>
            </div>
          </div>
        </div>
      </div>
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
          className="relative w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Timeline data={timelineData} />
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
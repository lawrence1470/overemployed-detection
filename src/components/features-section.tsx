"use client";

import { motion } from "motion/react";
import FeaturesSectionDemo from "~/components/ui/features-section-demo-2";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

export function FeaturesSection() {
  return (
    <section className={cn(getComponentClasses.section(), "relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden")}>
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
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ⚡ Powerful Detection Engine
          </motion.div>

          <h2 className={cn(getComponentClasses.heading('xl'), "text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text")}>
            Platform Features
          </h2>
          <p className={cn(getComponentClasses.body('lg'), "text-white/70 max-w-3xl mx-auto leading-relaxed")}>
            Everything you need to detect dual employment with enterprise-grade accuracy and speed. 
            <span className="text-white/90 font-medium"> Built for HR teams who demand precision.</span>
          </p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          
          <FeaturesSectionDemo />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm border border-white/10 transition-all duration-200 group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore All Features</span>
            <motion.svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import FeaturesSectionDemo from "~/components/ui/features-section-demo-2";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

export function FeaturesSection() {
  return (
    <section className={cn(getComponentClasses.section(), "bg-black text-white")}>
      <div className={getComponentClasses.container()}>
        {/* Unified Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={cn(getComponentClasses.heading('xl'), "text-white mb-6")}>
            Platform Features
          </h2>
          <p className={cn(getComponentClasses.body('lg'), "text-white/70 max-w-3xl mx-auto")}>
            Everything you need to detect dual employment with enterprise-grade accuracy and speed
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeaturesSectionDemo />
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Navigation } from "~/components/navigation";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { designSystem, getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20" />
        
        <motion.div
          className="absolute top-20 right-20 h-72 w-72 rounded-full bg-green-600/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Success Icon */}
            <motion.div
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
            >
              <Check className="h-10 w-10 text-white" />
            </motion.div>

            {/* Success Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 font-medium text-green-300 text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Payment Authorized Successfully
            </div>

            <h1
              className={cn(
                designSystem.typography.display.lg,
                "mb-6 text-white"
              )}
            >
              You're All Set!
            </h1>

            <p
              className={cn(
                getComponentClasses.body("lg"),
                "mb-8 text-white/70"
              )}
            >
              Your $100 deposit has been authorized and you've been moved to the top of our priority waitlist. 
              You'll be the first to know when we launch!
            </p>

            {/* What happens next */}
            <motion.div
              className="mb-8 rounded-xl border border-white/10 bg-white/5 p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="mb-4 font-semibold text-white">What happens next:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                  Your card has been authorized for $100 (not charged yet)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                  You'll receive priority early access when we launch
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                  Request a full refund anytime before we launch
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                  We'll email you with updates and launch information
                </li>
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <HoverBorderGradient
                as="a"
                containerClassName="inline-block rounded-xl"
                className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-green-700 hover:to-blue-700"
                {...{ href: "/" }}
              >
                <span className="flex items-center gap-2">
                  Back to Home
                  <ArrowRight className="h-4 w-4" />
                </span>
              </HoverBorderGradient>
            </motion.div>

            {/* Contact Info */}
            <motion.p
              className="mt-8 text-xs text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Questions? Email us at support@yourcompany.com
            </motion.p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
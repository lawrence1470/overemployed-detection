"use client";

import { ArrowRight, Check, Clock, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Navigation } from "~/components/navigation";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { designSystem, getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const benefits = [
  {
    icon: Zap,
    title: "Priority Access",
    description: "Jump to the front of the waitlist and get notified first",
  },
  {
    icon: Shield,
    title: "Fully Refundable",
    description: "100% refundable deposit - no risk, just priority",
  },
  {
    icon: Clock,
    title: "Early Adopter Benefits",
    description: "Special pricing and features when we launch",
  },
];

export default function EarlyAccessPage() {
  const handleCheckout = () => {
    // This would integrate with Stripe checkout
    console.log("Redirecting to Stripe checkout...");
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

        <motion.div
          className="absolute top-20 right-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 font-medium text-green-300 text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Thank You for Joining Our Waitlist
            </div>

            <h1
              className={cn(
                designSystem.typography.display.lg,
                "mb-6 text-white"
              )}
            >
              Priority Access Available
            </h1>
            <p
              className={cn(
                getComponentClasses.body("lg"),
                "mx-auto max-w-2xl text-white/70"
              )}
            >
              We are only prioritizing serious customers. If you'd like early
              access, please commit a fully refundable deposit to bump you to
              the top of the list.
            </p>
          </motion.div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8"
            >
              <h2
                className={cn(
                  getComponentClasses.heading("lg"),
                  "mb-4 text-white"
                )}
              >
                Priority Waitlist Position
              </h2>

              <div className="mb-6">
                <span className="font-bold text-5xl text-white">$100</span>
                <span className="ml-2 text-white/60">
                  fully refundable deposit
                </span>
              </div>

              <ul className="mb-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{benefit.title}</p>
                      <p className="text-sm text-white/60">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <HoverBorderGradient
                as="button"
                onClick={handleCheckout}
                containerClassName="w-full rounded-xl"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                <span className="flex items-center justify-center gap-2">
                  Secure My Priority Position
                  <ArrowRight className="h-4 w-4" />
                </span>
              </HoverBorderGradient>
            </motion.div>

            {/* What You Get */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h3
                className={cn(
                  getComponentClasses.heading("md"),
                  "mb-6 text-white"
                )}
              >
                What's Included
              </h3>

              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-white/60">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-sm text-white/80">
                  <strong className="text-white">
                    100% Refundable Deposit:
                  </strong>{" "}
                  Your $100 deposit is fully refundable at any time. This simply
                  ensures we're working with serious customers and helps us
                  prioritize our waitlist effectively.
                </p>
                <p className="text-white/60 text-xs">
                  By placing a deposit, you agree to our Terms of Service and
                  Privacy Policy. Refunds processed within 24 hours upon
                  request.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-white/10 border-t pt-8 text-center"
          >
            <p className="mb-4 text-sm text-white/60">
              Secure payment powered by
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="font-bold text-white/40 text-xl">Stripe</div>
              <div className="flex gap-2">
                <div className="h-6 w-10 rounded bg-white/10" />
                <div className="h-6 w-10 rounded bg-white/10" />
                <div className="h-6 w-10 rounded bg-white/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

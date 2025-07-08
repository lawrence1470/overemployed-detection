"use client";

import { motion } from "motion/react";
import { Navigation } from "~/components/navigation";
import { cn } from "~/lib/utils";
import { getComponentClasses, designSystem } from "~/lib/design-system";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { Check, Shield, Zap, Clock, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Immediate Access",
    description: "Start using VerifyHire today, no waiting required"
  },
  {
    icon: Shield,
    title: "Priority Support",
    description: "Get dedicated support from our team within 24 hours"
  },
  {
    icon: Clock,
    title: "Lifetime Early Adopter Pricing",
    description: "Lock in special pricing forever as an early supporter"
  }
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
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Limited Time Offer
            </div>
            
            <h1 className={cn(designSystem.typography.display.lg, "text-white mb-6")}>
              Get Early Access to VerifyHire
            </h1>
            <p className={cn(getComponentClasses.body("lg"), "text-white/70 max-w-2xl mx-auto")}>
              Join forward-thinking companies protecting their workforce integrity. 
              Skip the waitlist and start using VerifyHire immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30"
            >
              <h2 className={cn(getComponentClasses.heading("lg"), "text-white mb-4")}>
                Early Access Pass
              </h2>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$499</span>
                <span className="text-white/60 ml-2">one-time payment</span>
              </div>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{benefit.title}</p>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <HoverBorderGradient
                as="button"
                onClick={handleCheckout}
                containerClassName="w-full rounded-xl"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-8 py-4 font-semibold transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Continue to Checkout
                  <ArrowRight className="w-4 h-4" />
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
              <h3 className={cn(getComponentClasses.heading("md"), "text-white mb-6")}>
                What's Included
              </h3>
              
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-white/80 text-sm mb-4">
                  <strong className="text-white">100% Satisfaction Guarantee:</strong> If you're not completely satisfied within the first 30 days, we'll refund your payment in full.
                </p>
                <p className="text-white/60 text-xs">
                  By purchasing early access, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center pt-8 border-t border-white/10"
          >
            <p className="text-white/60 text-sm mb-4">Secure payment powered by</p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-white/40 font-bold text-xl">Stripe</div>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-white/10 rounded"></div>
                <div className="w-10 h-6 bg-white/10 rounded"></div>
                <div className="w-10 h-6 bg-white/10 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
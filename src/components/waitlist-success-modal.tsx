"use client";

import { motion, AnimatePresence } from "motion/react";
import { Check, Mail, X, Sparkles } from "lucide-react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { cn } from "~/lib/utils";
import { getComponentClasses } from "~/lib/design-system";

interface WaitlistSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  isExistingUser?: boolean;
}

export function WaitlistSuccessModal({ isOpen, onClose, email, isExistingUser = false }: WaitlistSuccessModalProps) {
  const handleEarlyAccess = () => {
    // Store form data in sessionStorage for the payment page
    if (typeof window !== "undefined") {
      window.location.href = "/early-access";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-gray-900/95 backdrop-blur-xl rounded-xl p-6 max-w-sm w-full border border-gray-700/50 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Success Animation */}
            <div className="text-center mb-4">
              <motion.div
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
              >
                <Check className="w-6 h-6 text-white" />
              </motion.div>

              <motion.h2
                className="text-xl font-semibold text-white mb-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {isExistingUser ? "You're already on the list!" : "You're on the list!"}
              </motion.h2>
            </div>

            {/* Email Confirmation */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <p className="text-sm text-gray-400 mb-2">
                {isExistingUser ? (
                  <>
                    You're already registered with{" "}
                    <span className="text-white font-medium">{email}</span>
                  </>
                ) : (
                  <>
                    Confirmation sent to{" "}
                    <span className="text-white font-medium">{email}</span>
                  </>
                )}
              </p>
              <p className="text-xs text-gray-500">
                {isExistingUser ? (
                  "We'll notify you when we're ready!"
                ) : (
                  "Check your email for next steps"
                )}
              </p>
            </motion.div>

            {/* Early Access Offer */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-1 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  <Sparkles className="w-3 h-3" />
                  Limited Offer
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Skip the line with Early Access
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Get immediate access today. Limited spots available.
                </p>
              </div>

              <div className="space-y-2">
                <HoverBorderGradient
                  as="button"
                  onClick={handleEarlyAccess}
                  containerClassName="w-full rounded-lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-4 py-3 font-semibold text-sm transition-all duration-300"
                >
                  Get Early Access - $499
                </HoverBorderGradient>

                <button
                  onClick={onClose}
                  className="w-full text-gray-400 hover:text-white text-sm transition-colors py-2"
                >
                  No thanks, I'll wait
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
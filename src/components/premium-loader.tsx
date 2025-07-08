"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "~/lib/utils";

const loadingStates = [
  {
    text: "Connecting to HR systems...",
  },
  {
    text: "Analyzing employee work patterns...",
  },
  {
    text: "Scanning for schedule conflicts...",
  },
  {
    text: "Cross-referencing employment data...",
  },
  {
    text: "Detecting moonlighting indicators...",
  },
  {
    text: "Validating dual employment signals...",
  },
  {
    text: "Generating compliance report...",
  },
  {
    text: "Welcome to VerifyHire - Catch the Same Guy Twice",
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
};

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export function PremiumLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setCurrentState(0);
      return;
    }
    
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        Math.min(prevState + 1, loadingStates.length - 1)
      );
    }, 250);

    return () => clearTimeout(timeout);
  }, [currentState, isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-black/50"
      >
        {/* Premium background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80" />
          <motion.div
            className="absolute top-1/3 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Logo and branding */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            className="mb-8 flex items-center space-x-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-lg border border-white/20">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-inner">
                <div className="absolute inset-1 rounded bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-white tracking-tight">
                VerifyHire
              </span>
              <span className="text-sm text-white/70 font-medium tracking-wide">
                Employee Verification Platform
              </span>
            </div>
          </motion.div>

          {/* Loading states */}
          <div className="flex relative justify-start max-w-xl mx-auto flex-col">
            {loadingStates.map((loadingState, index) => {
              const distance = Math.abs(index - currentState);
              const opacity = Math.max(1 - distance * 0.3, 0.1);

              return (
                <motion.div
                  key={index}
                  className="text-left flex gap-3 mb-4"
                  initial={{ opacity: 0, y: -(currentState * 40) }}
                  animate={{ opacity: opacity, y: -(currentState * 40) }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    {index > currentState && (
                      <CheckIcon className="text-white/50" />
                    )}
                    {index <= currentState && (
                      <CheckFilled
                        className={cn(
                          "text-white/70",
                          currentState === index && "text-blue-400 opacity-100"
                        )}
                      />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-white/70 font-medium",
                      currentState === index && "text-white opacity-100"
                    )}
                  >
                    {loadingState.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-transparent h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,black)]" />
      </motion.div>
    </AnimatePresence>
  );
}
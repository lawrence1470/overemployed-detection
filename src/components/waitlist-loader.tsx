"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "~/lib/utils";
import { Mail, Check, Users, Building2, Shield, Zap } from "lucide-react";

const loadingStates = [
  {
    text: "Validating your information...",
    icon: Shield,
  },
  {
    text: "Securing your spot on the waitlist...",
    icon: Users,
  },
  {
    text: "Analyzing your company profile...",
    icon: Building2,
  },
  {
    text: "Preparing your welcome email...",
    icon: Mail,
  },
  {
    text: "Finalizing your registration...",
    icon: Zap,
  },
  {
    text: "Welcome to the VerifyHire family!",
    icon: Check,
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

interface WaitlistLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
  duration?: number;
  email?: string;
}

export function WaitlistLoader({ 
  isLoading, 
  onComplete, 
  duration = 3000,
  email 
}: WaitlistLoaderProps) {
  const [currentState, setCurrentState] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setCurrentState(0);
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // Progress through loading states
    const stateInterval = duration / loadingStates.length;
    
    const timeout = setTimeout(() => {
      if (currentState < loadingStates.length - 1) {
        setCurrentState((prevState) => prevState + 1);
      } else {
        // Complete loading
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 800);
      }
    }, stateInterval);

    return () => clearTimeout(timeout);
  }, [currentState, isLoading, duration, onComplete]);

  // Reset state when loading starts
  useEffect(() => {
    if (isLoading) {
      setCurrentState(0);
    }
  }, [isLoading]);

  if (!isVisible || !isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-black/80"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black/90 to-blue-900/20" />
          
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/3 bottom-1/3 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-white mb-2">
              Joining Waitlist
            </h2>
            {email && (
              <p className="text-white/70 text-sm">
                Setting up your account for {email}
              </p>
            )}
          </motion.div>

          {/* Loading States */}
          <div className="flex relative justify-center items-center w-full flex-col">
            {loadingStates.map((loadingState, index) => {
              const distance = Math.abs(index - currentState);
              const opacity = Math.max(1 - distance * 0.4, 0.2);
              const isActive = index === currentState;
              const isCompleted = index < currentState;
              const Icon = loadingState.icon;

              return (
                <motion.div
                  key={index}
                  className="flex gap-4 mb-4 items-center w-full max-w-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: opacity, 
                    x: 0,
                    scale: isActive ? 1.02 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  <div className="flex-shrink-0">
                    {isCompleted ? (
                      <CheckFilled className="text-green-400 w-6 h-6" />
                    ) : isActive ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="text-blue-400 w-6 h-6" />
                      </motion.div>
                    ) : (
                      <CheckIcon className="text-white/30 w-6 h-6" />
                    )}
                  </div>
                  
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-300",
                      isActive && "text-white",
                      isCompleted && "text-green-300",
                      !isActive && !isCompleted && "text-white/50"
                    )}
                  >
                    {loadingState.text}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      className="ml-auto flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <motion.div
            className="w-full max-w-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between text-xs text-white/60 mb-2">
              <span>Processing...</span>
              <span>{Math.round(((currentState + 1) / loadingStates.length) * 100)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((currentState + 1) / loadingStates.length) * 100}%` 
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Gradient overlay */}
        <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-transparent h-full absolute [mask-image:radial-gradient(800px_at_center,transparent_40%,black)]" />
      </motion.div>
    </AnimatePresence>
  );
}
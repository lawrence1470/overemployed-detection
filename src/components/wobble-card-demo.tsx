"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { WobbleCard } from "~/components/ui/wobble-card";

export default function WobbleCardDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Powerful Features for Modern Teams
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Discover our cutting-edge platform capabilities designed to transform your workflow
        </p>
      </div>

      {/* Enhanced Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-pink-800 via-pink-700 to-rose-800 min-h-[400px] lg:min-h-[350px] xl:min-h-[300px] shadow-2xl shadow-pink-500/20"
          className="p-8 md:p-10 lg:p-12"
        >
          <div className="max-w-lg relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              ✨ AI Powered
            </div>
            <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
              Gippity AI powers the entire universe
            </h2>
            <p className="text-left text-base md:text-lg text-white/80 leading-relaxed">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <img
            src="/linear.webp"
            width={500}
            height={500}
            alt="AI platform interface"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl opacity-60 hover:opacity-80 transition-opacity duration-300"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-gradient-to-br from-indigo-800 via-purple-700 to-violet-800 shadow-2xl shadow-purple-500/20">
          <div className="p-8 md:p-10 relative z-10 h-full flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20 w-fit">
              🛡️ Security First
            </div>
            <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="text-left text-base md:text-lg text-white/80 leading-relaxed">
              If someone yells "stop!", goes limp, or taps out, the fight is over.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 min-h-[400px] lg:min-h-[350px] xl:min-h-[300px] shadow-2xl shadow-blue-500/20">
          <div className="p-8 md:p-10 lg:p-12 relative z-10 flex items-center h-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                🚀 Get Started
              </div>
              <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                Signup for blazing-fast cutting-edge state of the art Gippity AI
                wrapper today!
              </h2>
              <p className="text-left text-base md:text-lg text-white/80 leading-relaxed mb-8">
                With over 100,000 monthly active bot users, Gippity AI is the most
                popular AI platform for developers.
              </p>
              <motion.button
                onClick={handleGetStarted}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm border border-white/20 transition-all duration-200 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Getting Started...</span>
                  </div>
                ) : (
                  <>
                    <span>Get Started Today</span>
                    <motion.svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </>
                )}
              </motion.button>
            </div>
          </div>
          <img
            src="/linear.webp"
            width={500}
            height={500}
            alt="Platform dashboard"
            className="absolute -right-10 md:-right-[30%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl opacity-40 hover:opacity-60 transition-opacity duration-300"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
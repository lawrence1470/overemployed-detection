"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { WobbleCard } from "~/components/ui/wobble-card";
import { PointerHighlight } from "~/components/ui/pointer-highlight";

export default function ProblemSolutionSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Stop Hiring Ghosts. Start Detecting Reality.
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          451,000+ professionals are secretly juggling multiple jobs. Your next
          hire might be one of them.
        </p>
      </div>

      {/* Enhanced Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-red-900 via-red-800 to-orange-900 min-h-[400px] lg:min-h-[350px] xl:min-h-[300px] shadow-2xl shadow-red-500/20"
          className="p-8 md:p-10 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full relative z-10">
            <div className="max-w-lg">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                🚨 Workforce Crisis
              </div>
              <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
                451K+ members actively share overemployment strategies
              </h2>
              <p className="text-left text-base md:text-lg text-white/80 leading-relaxed">
                A thriving community openly discusses how to juggle multiple
                full-time positions, avoid detection, and maximize income
                through deception.
              </p>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src="/assets/reddit.png"
                  width={300}
                  height={200}
                  alt="Overemployed community screenshot"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-gradient-to-br from-indigo-800 via-purple-700 to-violet-800 shadow-2xl shadow-purple-500/20">
          <div className="p-8 md:p-10 relative z-10 h-full flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20 w-fit">
              💰 Hidden Costs
            </div>
            <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
              $17K to replace each mis-hire
            </h2>
            <p className="text-left text-base md:text-lg text-white/80 leading-relaxed">
              <PointerHighlight
                pointerClassName="text-purple-400"
                rectangleClassName="border-purple-400/50"
              >
                42 days + $4.7K to hire
              </PointerHighlight>
              , then months to discover the truth. The real cost of overemployed
              hires is devastating.
            </p>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}

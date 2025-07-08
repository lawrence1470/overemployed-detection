"use client";

import GlowingEffectDemoSecond from "~/components/ui/glowing-effect-demo-2";

export function GlowingFeaturesSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex items-center justify-center space-x-2 rounded-full border border-gray-800 bg-gray-900/50 px-6 py-2 backdrop-blur-sm w-fit mx-auto">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-gray-300 text-sm">
              ✨ Interactive Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Detection Capabilities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hover over the cards to see the glowing effect in action
          </p>
        </div>

        {/* Glowing Features Grid */}
        <GlowingEffectDemoSecond />
      </div>
    </section>
  );
}

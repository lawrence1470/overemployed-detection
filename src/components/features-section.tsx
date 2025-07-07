"use client";

import FeaturesSectionDemo from "~/components/ui/features-section-demo-2";

export function FeaturesSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to detect dual employment
          </p>
        </div>

        {/* Features Grid */}
        <FeaturesSectionDemo />
      </div>
    </section>
  );
}
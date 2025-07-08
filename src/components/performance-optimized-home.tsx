"use client";

import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { HeroSection } from "~/components/hero-section";
import { HowItWorksSection } from "~/components/how-it-works";
import { OptimizedAnimationWrapper } from "~/components/optimized-animation-wrapper";
import { SohamSection } from "~/components/soham-section";
import { Skeleton, SkeletonText } from "~/components/ui/skeleton";

// Lazy load below-the-fold components with reduced loading components
const FAQSection = dynamic(
  () =>
    import("~/components/faq-section").then((mod) => ({
      default: mod.FAQSection,
    })),
  {
    loading: () => <Skeleton height="200px" className="mx-auto max-w-3xl" />,
  }
);

const WaitlistSection = dynamic(
  () =>
    import("~/components/waitlist-section").then((mod) => ({
      default: mod.WaitlistSection,
    })),
  {
    loading: () => <Skeleton height="400px" className="mx-auto max-w-2xl" />,
  }
);

const IntegrationsSection = dynamic(() => import("~/components/integrations"), {
  loading: () => <Skeleton height="300px" className="mx-auto max-w-4xl" />,
});

const ProblemSolutionSection = dynamic(
  () => import("~/components/problem-solution-section"),
  {
    loading: () => <Skeleton height="400px" className="mx-auto max-w-7xl" />,
  }
);

const OveremployedRedditSection = dynamic(
  () => import("~/components/overemployed-reddit-section"),
  {
    loading: () => <Skeleton height="500px" className="mx-auto max-w-7xl" />,
  }
);

// Memoized background component
const OptimizedFloatingElements = memo(function OptimizedFloatingElements() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Reduced floating elements for performance */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 h-16 w-24 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 h-20 w-20 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl"
      />

      {/* Reduced particles for performance */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

// Memoized background component
const OptimizedParallaxBackground = memo(function OptimizedParallaxBackground({
  backgroundY,
  backgroundOpacity,
  hue,
}: {
  backgroundY: any;
  backgroundOpacity: any;
  hue: any;
}) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        y: backgroundY,
        opacity: backgroundOpacity,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: useTransform(
            hue,
            (latest: number) => `linear-gradient(135deg, 
							hsl(${latest}, 40%, 4%) 0%, 
							hsl(${latest + 30}, 30%, 3%) 25%, 
							hsl(${latest + 60}, 35%, 2%) 75%, 
							hsl(${latest + 90}, 40%, 4%) 100%)`
          ),
        }}
      />
      <OptimizedFloatingElements />
    </motion.div>
  );
});

export default function PerformanceOptimizedHome() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.1, 0.3]
  );
  const hue = useTransform(scrollYProgress, [0, 1], [240, 300]);

  // Memoized product schema
  const productSchema = useCallback(
    () => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "VerifyHire",
      description:
        "Advanced employee verification and overemployment detection platform",
      brand: {
        "@type": "Brand",
        name: "VerifyHire",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        priceValidUntil: "2025-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "189",
      },
    }),
    []
  );

  return (
    <main ref={containerRef} className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema()) }}
      />

      <OptimizedParallaxBackground
        backgroundY={backgroundY}
        backgroundOpacity={backgroundOpacity}
        hue={hue}
      />

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Soham Section */}
      <OptimizedAnimationWrapper
        animation="slideUp"
        delay={0.1}
        className="relative z-10"
      >
        <SohamSection />
      </OptimizedAnimationWrapper>

      {/* How It Works Section */}
      <OptimizedAnimationWrapper
        animation="slideUp"
        delay={0.2}
        className="relative z-10"
      >
        <HowItWorksSection />
      </OptimizedAnimationWrapper>

      {/* Integrations Section */}
      <OptimizedAnimationWrapper
        animation="fadeIn"
        delay={0.1}
        className="relative z-10"
      >
        <div className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-900 dark:to-gray-950">
          <IntegrationsSection />
        </div>
      </OptimizedAnimationWrapper>

      {/* Problem Solution Section */}
      <OptimizedAnimationWrapper
        animation="slideUp"
        delay={0.3}
        className="relative z-10"
      >
        <div className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-950 dark:to-gray-900">
          <ProblemSolutionSection />
        </div>
      </OptimizedAnimationWrapper>

      {/* Reddit Section */}
      <OptimizedAnimationWrapper
        animation="slideUp"
        delay={0.4}
        className="relative z-10"
      >
        <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
          <OveremployedRedditSection />
        </div>
      </OptimizedAnimationWrapper>

      {/* FAQ Section */}
      <OptimizedAnimationWrapper
        animation="slideUp"
        delay={0.2}
        className="relative z-10"
      >
        <FAQSection />
      </OptimizedAnimationWrapper>

      {/* Waitlist Section */}
      <OptimizedAnimationWrapper
        animation="slideUp"
        delay={0.3}
        className="relative z-10"
      >
        <WaitlistSection />
      </OptimizedAnimationWrapper>
    </main>
  );
}

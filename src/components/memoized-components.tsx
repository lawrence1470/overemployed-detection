"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { HeroSection } from "~/components/hero-section";
import { SohamSection } from "~/components/soham-section";
import { HowItWorksSection } from "~/components/how-it-works";

// Memoized components to prevent unnecessary re-renders
export const MemoizedHeroSection = memo(HeroSection);
export const MemoizedSohamSection = memo(SohamSection);
export const MemoizedHowItWorksSection = memo(HowItWorksSection);

// Memoized motion components
export const MemoizedMotionDiv = memo(motion.div);
export const MemoizedMotionSection = memo(motion.section);

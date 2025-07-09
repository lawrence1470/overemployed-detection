"use client";

import { motion } from "motion/react";
import { memo } from "react";
import { HeroSection } from "~/components/hero-section";
import { HowItWorksSection } from "~/components/how-it-works";
import { SohamSection } from "~/components/soham-section";

// Memoized components to prevent unnecessary re-renders
export const MemoizedHeroSection = memo(HeroSection);
export const MemoizedSohamSection = memo(SohamSection);
export const MemoizedHowItWorksSection = memo(HowItWorksSection);

// Memoized motion components
export const MemoizedMotionDiv = memo(motion.div);
export const MemoizedMotionSection = memo(motion.section);

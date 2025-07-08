"use client";

import { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "~/components/ui/multi-step-loader";

const loadingStates = [
  {
    text: "Analyzing remote work patterns...",
  },
  {
    text: "Scanning calendar overlaps...",
  },
  {
    text: "Detecting dual employment signals...",
  },
  {
    text: "Cross-referencing work schedules...",
  },
  {
    text: "Validating employment status...",
  },
  {
    text: "Generating risk assessment...",
  },
  {
    text: "Finalizing security report...",
  },
  {
    text: "Welcome to VerifyHire Intelligence",
  },
];

export function PremiumLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <Loader 
      loadingStates={loadingStates} 
      loading={isLoading} 
      duration={250}
      loop={false}
    />
  );
}
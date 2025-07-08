"use client";

import { useState, useEffect } from "react";
import { ComingSoon } from "./coming-soon";

interface ComingSoonWrapperProps {
  children: React.ReactNode;
  comingSoonMode: boolean;
  isDevelopment: boolean;
}

export function ComingSoonWrapper({ children, comingSoonMode, isDevelopment }: ComingSoonWrapperProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if coming soon mode is enabled
    if (!comingSoonMode) {
      setShowComingSoon(false);
      setIsLoading(false);
      return;
    }

    // Check if admin has bypassed
    const hasBypass = sessionStorage.getItem("admin-bypass") === "true";
    
    setShowComingSoon(!hasBypass);
    setIsLoading(false);
  }, [comingSoonMode, isDevelopment]);

  const handleBypass = () => {
    setShowComingSoon(false);
  };

  // Show loading or nothing during hydration
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (showComingSoon) {
    return <ComingSoon onBypass={handleBypass} />;
  }

  return <>{children}</>;
}
import React from "react";
import { cn } from "~/lib/utils";

export default function VerifyHireLogo({ className }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      {/* Outer shield */}
      <path
        d="M32 4L56 14V34C56 46.15 45.6 57.01 32 60C18.4 57.01 8 46.15 8 34V14L32 4Z"
        fill="url(#gradOuter)"
      />
      {/* Inner tick */}
      <path
        d="M22 31.5L28.5 38L42 24.5"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="gradOuter"
          x1="8"
          y1="4"
          x2="56"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { motion } from "motion/react";
import { cn } from "~/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (currentDirection: Direction): Direction => {
      const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex] || "TOP";
    },
    [clockwise]
  );

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #6366f1 0%, rgba(99, 102, 241, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #8b5cf6 0%, rgba(139, 92, 246, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, #f59e0b 0%, rgba(245, 158, 11, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3b82f6 0%, rgba(59, 130, 246, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);
  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex items-center justify-center overflow-hidden p-[2px] transition duration-500",
        containerClassName
      )}
      {...props}
    >
      <motion.div
        className={cn("absolute inset-0 rounded-[inherit] z-0")}
        style={{
          filter: "blur(0.5px)",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className={cn("relative z-10 rounded-[inherit]", className)}>
        {children}
      </div>
    </Tag>
  );
}

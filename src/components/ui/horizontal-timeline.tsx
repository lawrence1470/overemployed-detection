"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { cn } from "~/lib/utils";

interface TimelineEntry {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export const HorizontalTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        // Set container height to create scroll space for timeline progression
        const viewportHeight = window.innerHeight;
        const totalHeight = viewportHeight * (data.length + 1); // Extra space for smooth ending
        setContainerHeight(totalHeight);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to timeline progress
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, data.length - 1]);

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ height: `${containerHeight}px` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        {/* Content Display */}
        <div className="flex-1 flex flex-col justify-center px-8">
          <div className="max-w-6xl w-full mx-auto">
            {/* Timeline Progress Bar */}
            <div className="relative h-1 bg-white/10 mb-16 max-w-2xl mx-auto">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500"
                style={{
                  width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                }}
              />
              
              {/* Timeline Steps */}
              <div className="absolute inset-0 flex justify-between items-center">
                {data.map((item, index) => (
                  <TimelineStep
                    key={index}
                    index={index}
                    progress={timelineProgress}
                    total={data.length}
                    title={item.title}
                  />
                ))}
              </div>
            </div>

            {/* Content Cards */}
            <div className="relative">
              {data.map((item, index) => (
                <TimelineContent
                  key={index}
                  item={item}
                  index={index}
                  progress={timelineProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineStep = ({ 
  index, 
  progress, 
  total,
  title 
}: { 
  index: number; 
  progress: MotionValue<number>; 
  total: number;
  title: string;
}) => {
  const isActive = useTransform(progress, (latest) => {
    return latest >= index - 0.5 && latest <= index + 0.5;
  });

  const isComplete = useTransform(progress, (latest) => latest > index);

  return (
    <motion.div
      className="relative z-10"
      initial={{ scale: 1 }}
      animate={{ scale: isActive.get() ? 1.2 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={cn(
          "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-300",
          "bg-black"
        )}
        style={{
          borderColor: useTransform(
            progress,
            [index - 0.5, index, index + 0.5],
            ["rgba(255,255,255,0.2)", "rgb(59, 130, 246)", "rgba(255,255,255,0.2)"]
          ),
          backgroundColor: useTransform(
            isComplete,
            (latest) => latest ? "rgb(59, 130, 246)" : "transparent"
          ),
        }}
      >
        <motion.span 
          className="text-white font-semibold text-sm"
          style={{
            opacity: useTransform(isComplete, (latest) => latest ? 1 : 0.5),
          }}
        >
          {index + 1}
        </motion.span>
      </motion.div>
      
      {/* Step Label */}
      <motion.div
        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
        style={{
          opacity: useTransform(
            progress,
            [index - 0.5, index, index + 0.5],
            [0.5, 1, 0.5]
          ),
        }}
      >
        <span className="text-xs text-white/70 font-medium">{title}</span>
      </motion.div>
    </motion.div>
  );
};

const TimelineContent = ({ 
  item, 
  index, 
  progress 
}: { 
  item: TimelineEntry; 
  index: number; 
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(
    progress,
    [index - 0.5, index, index + 0.5],
    [0, 1, 0]
  );

  const scale = useTransform(
    progress,
    [index - 0.5, index, index + 0.5],
    [0.9, 1, 0.9]
  );

  const y = useTransform(
    progress,
    [index - 0.5, index, index + 0.5],
    [30, 0, -30]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4"
      style={{ opacity, scale, y }}
    >
      <div className="w-full">
        {item.content}
      </div>
    </motion.div>
  );
};
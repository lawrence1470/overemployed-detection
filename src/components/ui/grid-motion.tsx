"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

interface GridMotionProps {
  items: (string | React.ReactNode)[];
  className?: string;
  columns?: number;
  gap?: string;
}

export const GridMotion: React.FC<GridMotionProps> = ({
  items,
  className,
  columns = 4,
  gap = "gap-4"
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const renderItem = (item: string | React.ReactNode, index: number) => {
    if (typeof item === 'string') {
      // Check if it's an image URL
      if (item.startsWith('http') && (item.includes('images.unsplash.com') || item.includes('jpg') || item.includes('png') || item.includes('jpeg'))) {
        return (
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={item} 
              alt={`Grid item ${index}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        );
      }
      // Regular text item
      return (
        <div className="flex aspect-square items-center justify-center rounded-lg border border-gray-800 bg-gray-900/50 p-4 backdrop-blur-sm">
          <span className="text-center text-white text-sm font-medium">{item}</span>
        </div>
      );
    }
    
    // Custom JSX content
    return (
      <div className="aspect-square overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        {item}
      </div>
    );
  };

  return (
    <motion.div
      className={cn(
        `grid grid-cols-2 ${gap} md:grid-cols-3 lg:grid-cols-${columns}`,
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group cursor-pointer"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GridMotion;
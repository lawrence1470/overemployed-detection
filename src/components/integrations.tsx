"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { getComponentClasses } from "~/lib/design-system";

export default function IntegrationsSection() {
  return (
    <div className={cn(getComponentClasses.container(), "grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16")}>
      {/* Card on the left */}
      <motion.div 
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <UnifiedCard>
          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
          <UnifiedCardTitle>Trusted by Enterprise HR Teams</UnifiedCardTitle>
          <UnifiedCardDescription>
            Connect instantly with the HR platforms your team already uses.
          </UnifiedCardDescription>
        </UnifiedCard>
      </motion.div>
      
      {/* Text content on the right */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className={getComponentClasses.badge('info')}>
          🔗 Enterprise Integrations
        </span>
        
        <h2 className={cn(getComponentClasses.heading('xl'), "text-white")}>
          Plug Into Your Existing HR Stack
        </h2>
        
        <p className={cn(getComponentClasses.body('lg'), "text-white/80")}>
          Our platform seamlessly connects with your current HR tools to automatically detect dual employment patterns.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className={cn(getComponentClasses.body('md'), "text-white/90")}>
              Lightning-fast OAuth setup
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className={cn(getComponentClasses.body('md'), "text-white/90")}>
              Real-time data synchronization
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className={cn(getComponentClasses.body('md'), "text-white/90")}>
              Enterprise-grade security
            </span>
          </div>
        </div>
        
        <motion.button 
          className={getComponentClasses.button('primary')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Integrations
        </motion.button>
      </motion.div>
    </div>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  
  // Generate animation sequence for all HR systems
  const sequence = hrSystems.map((_, index) => [
    `.circle-${index + 1}`,
    { scale, transform },
    { duration: 0.8 },
  ]);

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      {/* Main row of HR systems - all 5 authentic logos */}
      <div className="flex flex-row shrink-0 justify-center items-center gap-3 flex-wrap max-w-lg">
        {hrSystems.map((system, index) => {
          const LogoComponent = system.logo;
          return (
            <Container key={system.name} className={system.className}>
              <LogoComponent className={`${system.logoClassName} dark:text-white`} />
            </Container>
          );
        })}
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

// Unified Card Components using Design System
export const UnifiedCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        getComponentClasses.card('glass'),
        "w-full max-w-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export const UnifiedCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        getComponentClasses.heading('sm'),
        "text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const UnifiedCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        getComponentClasses.body('sm'),
        "text-white/70",
        className
      )}
    >
      {children}
    </p>
  );
};

// Legacy Card Components (kept for compatibility)
export const Card = UnifiedCard;
export const CardTitle = UnifiedCardTitle;
export const CardDescription = UnifiedCardDescription;

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const WorkdayLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* Workday blue circle background */}
      <circle cx="12" cy="12" r="11" fill="#1f4e79"/>
      
      {/* Orange arc */}
      <path 
        d="M 12 4 A 8 8 0 0 1 20 12" 
        fill="none" 
        stroke="#ff6b35" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* White "W" letter */}
      <g fill="white">
        <path d="M 7.5 8 L 8.8 8 L 10.2 14 L 11.5 8 L 12.5 8 L 13.8 14 L 15.2 8 L 16.5 8 L 14.5 16 L 13.2 16 L 12 10.5 L 10.8 16 L 9.5 16 L 7.5 8 Z"/>
      </g>
    </svg>
  );
};

export const ADPLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* Red background */}
      <rect x="1" y="1" width="22" height="22" rx="2" fill="#D52B1E"/>
      
      {/* ADP lettering - recreated based on the actual logo */}
      <g fill="white">
        {/* Letter A */}
        <path d="M3.5 18.5 L3.5 16.8 L4.2 16.8 L6.8 11.2 L8.4 11.2 L11 16.8 L11.7 16.8 L11.7 18.5 L8.8 18.5 L8.8 16.8 L9.2 16.8 L8.8 15.8 L6.4 15.8 L6 16.8 L6.4 16.8 L6.4 18.5 L3.5 18.5 ZM7.6 13.2 L6.8 14.9 L8.4 14.9 L7.6 13.2 Z"/>
        
        {/* Letter D */}
        <path d="M12.2 18.5 L12.2 11.2 L15.8 11.2 C17.4 11.2 18.5 12.4 18.5 14.8 C18.5 17.2 17.4 18.5 15.8 18.5 L12.2 18.5 ZM14.2 16.8 L15.5 16.8 C16.2 16.8 16.5 16.2 16.5 14.8 C16.5 13.4 16.2 12.9 15.5 12.9 L14.2 12.9 L14.2 16.8 Z"/>
        
        {/* Letter P */}
        <path d="M19.2 18.5 L19.2 11.2 L22.2 11.2 C23.2 11.2 23.8 11.8 23.8 13.1 C23.8 14.4 23.2 14.9 22.2 14.9 L21.2 14.9 L21.2 16.8 L21.8 16.8 L21.8 18.5 L19.2 18.5 ZM21.2 12.9 L21.2 13.8 L21.8 13.8 C22.1 13.8 22.2 13.6 22.2 13.4 C22.2 13.1 22.1 12.9 21.8 12.9 L21.2 12.9 Z"/>
      </g>
      
      {/* Registered trademark symbol */}
      <circle cx="20.5" cy="19.5" r="1.2" fill="none" stroke="white" strokeWidth="0.15"/>
      <text x="20.5" y="20" textAnchor="middle" fill="white" fontSize="0.8" fontWeight="bold">®</text>
    </svg>
  );
};

export const PaychexLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* Paychex blue background */}
      <rect x="1" y="1" width="22" height="22" rx="2" fill="#1e5a96"/>
      
      {/* PAYCHEX lettering - recreated based on the actual logo */}
      <g fill="white">
        {/* Simplified "PAYCHEX" text optimized for small sizes */}
        <text 
          x="12" 
          y="13.5" 
          textAnchor="middle" 
          fill="white" 
          fontSize="4.5" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
          letterSpacing="0.2"
        >
          PAYCHEX
        </text>
      </g>
      
      {/* Registered trademark symbol */}
      <text 
        x="20.5" 
        y="8" 
        textAnchor="middle" 
        fill="white" 
        fontSize="1.5" 
        fontWeight="bold"
      >
        ®
      </text>
    </svg>
  );
};

export const BambooLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* BambooHR green background */}
      <rect x="1" y="1" width="22" height="22" rx="2" fill="#68B25B"/>
      
      {/* Bamboo leaves */}
      <g fill="white">
        {/* Left leaf */}
        <path d="M4 8 C4 8 6 6 8 7 C10 8 9 10 7 11 C5 12 4 10 4 8 Z"/>
        
        {/* Right leaf */}
        <path d="M8 6 C8 6 10 4 12 5 C14 6 13 8 11 9 C9 10 8 8 8 6 Z"/>
      </g>
      
      {/* Letter "b" - recreated based on the actual logo */}
      <g fill="white">
        {/* Vertical stem of "b" */}
        <rect x="11" y="5" width="2.5" height="14" rx="1"/>
        
        {/* Top circular part of "b" */}
        <circle cx="16" cy="11" r="4" fill="none" stroke="white" strokeWidth="2.5"/>
        
        {/* Connection between stem and circle */}
        <rect x="11" y="10" width="6" height="2.5" rx="1"/>
      </g>
    </svg>
  );
};

export const GustoLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* Gusto orange background */}
      <rect x="1" y="1" width="22" height="22" rx="2" fill="#f45d48"/>
      
      {/* Simplified "gusto" text based on the original logo */}
      <g fill="white">
        {/* Letter g */}
        <path d="M3.5 11.5 C3.5 10.5 4.2 9.8 5.2 9.8 C6.2 9.8 6.9 10.5 6.9 11.5 L6.9 13.5 C6.9 14.5 6.2 15.2 5.2 15.2 C4.2 15.2 3.5 14.5 3.5 13.5 L3.5 11.5 Z M5.2 13.8 C5.7 13.8 6.1 13.4 6.1 12.9 L6.1 12.1 C6.1 11.6 5.7 11.2 5.2 11.2 C4.7 11.2 4.3 11.6 4.3 12.1 L4.3 12.9 C4.3 13.4 4.7 13.8 5.2 13.8 Z"/>
        
        {/* Letter u */}
        <path d="M7.5 9.8 L8.3 9.8 L8.3 13.2 C8.3 13.7 8.7 14.1 9.2 14.1 C9.7 14.1 10.1 13.7 10.1 13.2 L10.1 9.8 L10.9 9.8 L10.9 13.2 C10.9 14.2 10.2 14.9 9.2 14.9 C8.2 14.9 7.5 14.2 7.5 13.2 L7.5 9.8 Z"/>
        
        {/* Letter s */}
        <path d="M11.5 11.2 C11.5 10.6 12.0 10.1 12.6 10.1 C13.2 10.1 13.7 10.6 13.7 11.2 C13.7 11.8 13.2 12.3 12.6 12.3 C12.0 12.3 11.5 11.8 11.5 11.2 Z M11.5 13.8 C11.5 13.2 12.0 12.7 12.6 12.7 C13.2 12.7 13.7 13.2 13.7 13.8 C13.7 14.4 13.2 14.9 12.6 14.9 C12.0 14.9 11.5 14.4 11.5 13.8 Z"/>
        
        {/* Letter t */}
        <path d="M14.5 9.8 L15.3 9.8 L15.3 10.6 L16.1 10.6 L16.1 11.4 L15.3 11.4 L15.3 13.2 C15.3 13.7 15.7 14.1 16.2 14.1 L16.1 14.9 C15.1 14.9 14.5 14.2 14.5 13.2 L14.5 11.4 L13.9 11.4 L13.9 10.6 L14.5 10.6 L14.5 9.8 Z"/>
        
        {/* Letter o */}
        <path d="M17.5 11.5 C17.5 10.5 18.2 9.8 19.2 9.8 C20.2 9.8 20.9 10.5 20.9 11.5 L20.9 13.5 C20.9 14.5 20.2 15.2 19.2 15.2 C18.2 15.2 17.5 14.5 17.5 13.5 L17.5 11.5 Z M19.2 13.8 C19.7 13.8 20.1 13.4 20.1 12.9 L20.1 12.1 C20.1 11.6 19.7 11.2 19.2 11.2 C18.7 11.2 18.3 11.6 18.3 12.1 L18.3 12.9 C18.3 13.4 18.7 13.8 19.2 13.8 Z"/>
      </g>
    </svg>
  );
};

// HR Systems data for easy expansion - defined after logo components
const hrSystems = [
  { name: "Workday", className: "h-12 w-12 circle-1", logoClassName: "h-6 w-6", logo: WorkdayLogo },
  { name: "BambooHR", className: "h-16 w-16 circle-2", logoClassName: "h-8 w-8", logo: BambooLogo },
  { name: "Paychex", className: "h-14 w-14 circle-3", logoClassName: "h-7 w-7", logo: PaychexLogo },
  { name: "ADP", className: "h-12 w-12 circle-4", logoClassName: "h-6 w-6", logo: ADPLogo },
  { name: "Gusto", className: "h-14 w-14 circle-5", logoClassName: "h-7 w-7", logo: GustoLogo },
];


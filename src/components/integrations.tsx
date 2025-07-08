"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { GoCopilot } from "react-icons/go";

export default function IntegrationsSection() {
  return (
    <div className="flex items-center gap-16 max-w-6xl mx-auto px-4">
      {/* Card on the left */}
      <div className="flex-shrink-0 w-96">
        <Card>
          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
          <CardTitle>Trusted by Enterprise HR Teams</CardTitle>
          <CardDescription>
            Connect instantly with the HR platforms your team already uses.
          </CardDescription>
        </Card>
      </div>
      
      {/* Text content on the right */}
      <div className="flex-1">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-4">
          🔗 Enterprise Integrations
        </span>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Plug Into Your Existing HR Stack
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Our platform seamlessly connects with your current HR tools to automatically detect dual employment patterns.
        </p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Lightning-fast OAuth setup</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Real-time data synchronization</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Enterprise-grade security</span>
          </div>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          View All Integrations
        </button>
      </div>
    </div>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <WorkdayLogo className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <BambooLogo className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <SuccessFactorsLogo className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <PaychexLogo className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <ADPLogo className="h-4 w-4 " />
        </Container>
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

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

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
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#FF6B35"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">W</text>
    </svg>
  );
};

export const SuccessFactorsLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#0073E6"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SF</text>
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
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#D52B1E"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">ADP</text>
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
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#00A651"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">P</text>
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
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#68B25B"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">B</text>
    </svg>
  );
};
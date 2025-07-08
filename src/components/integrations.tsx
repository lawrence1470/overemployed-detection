"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { getComponentClasses } from "~/lib/design-system";

export default function IntegrationsSection() {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className={cn(getComponentClasses.container(), "relative z-10")}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            🔗 Enterprise Integrations
          </motion.div>

          <h2 className={cn(getComponentClasses.heading('xl'), "text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text")}>
            Seamless HR Platform Integration
          </h2>
          <p className={cn(getComponentClasses.body('lg'), "text-white/70 max-w-3xl mx-auto leading-relaxed")}>
            Connect with the HR systems you already trust. Our platform integrates seamlessly with leading HRIS platforms to detect dual employment patterns across your entire tech stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Enhanced Interactive Logo Display */}
          <motion.div 
            className="flex-shrink-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <EnhancedCard>
              <CardSkeletonContainer>
                <EnhancedSkeleton 
                  hoveredIntegration={hoveredIntegration}
                  setHoveredIntegration={setHoveredIntegration}
                />
              </CardSkeletonContainer>
              <UnifiedCardTitle>Trusted by Enterprise HR Teams</UnifiedCardTitle>
              <UnifiedCardDescription>
                One-click setup with OAuth 2.0 security. Connect in minutes, not months.
              </UnifiedCardDescription>
            </EnhancedCard>
          </motion.div>
          
          {/* Enhanced Content Section */}
          <motion.div 
            className="flex-1 space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h3 
                className={cn(getComponentClasses.heading('lg'), "text-white leading-tight")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Zero-Friction Integration
              </motion.h3>
              
              <motion.p 
                className={cn(getComponentClasses.body('lg'), "text-white/80 leading-relaxed")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Plug into your existing HR infrastructure without disrupting workflows. Our API-first approach ensures seamless data flow and real-time synchronization.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: "⚡", 
                  color: "from-blue-500/20 to-cyan-500/20", 
                  title: "Lightning Setup",
                  desc: "OAuth 2.0 authentication in under 5 minutes"
                },
                { 
                  icon: "🔄", 
                  color: "from-green-500/20 to-emerald-500/20", 
                  title: "Real-Time Sync",
                  desc: "Instant data updates across all connected systems"
                },
                { 
                  icon: "🛡️", 
                  color: "from-purple-500/20 to-violet-500/20", 
                  title: "Enterprise Security",
                  desc: "SOC 2 compliant with end-to-end encryption"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-lg",
                      feature.color
                    )}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-white/90 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm border border-white/10 transition-all duration-200 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore All Integrations</span>
                <motion.svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const EnhancedSkeleton = ({ 
  hoveredIntegration, 
  setHoveredIntegration 
}: { 
  hoveredIntegration: string | null;
  setHoveredIntegration: (name: string | null) => void;
}) => {
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
      {/* Enhanced grid layout for better visual balance */}
      <div className="grid grid-cols-3 gap-4 items-center justify-center max-w-lg">
        {hrSystems.map((system, index) => {
          const LogoComponent = system.logo;
          const isHovered = hoveredIntegration === system.name;
          
          return (
            <motion.div
              key={system.name}
              className="flex justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <EnhancedContainer 
                className={system.className}
                isHovered={isHovered}
                onMouseEnter={() => setHoveredIntegration(system.name)}
                onMouseLeave={() => setHoveredIntegration(null)}
              >
                <LogoComponent className={`${system.logoClassName} transition-all duration-300 ${
                  isHovered ? 'scale-110' : ''
                }`} />
                
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-md backdrop-blur-sm border border-white/10 whitespace-nowrap z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {system.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
                  </motion.div>
                )}
              </EnhancedContainer>
            </motion.div>
          );
        })}
      </div>

      {/* Enhanced connection visualization */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 400 300">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          
          {/* Animated connection lines */}
          <motion.path
            d="M100,150 Q200,100 300,150"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M100,150 Q200,200 300,150"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <EnhancedSparkles />
        </div>
      </div>
    </div>
  );
};

// Legacy Skeleton for compatibility
const Skeleton = () => {
  return <EnhancedSkeleton hoveredIntegration={null} setHoveredIntegration={() => {}} />;
};
const EnhancedSparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.5, 0],
          }}
          transition={{
            duration: random() * 3 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `3px`,
            height: `3px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500"
        ></motion.span>
      ))}
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

// Enhanced Card Components
export const EnhancedCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        getComponentClasses.card('glass'),
        "w-full max-w-lg relative overflow-hidden group",
        className
      )}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
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

const EnhancedContainer = ({
  className,
  children,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return (
    <motion.div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        cursor-pointer relative transition-all duration-300 border border-white/10
        hover:border-white/30 hover:shadow-[0px_0px_16px_0px_rgba(248,248,248,0.4)_inset,0px_16px_32px_-8px_rgba(0,0,0,0.6)]`,
        isHovered && "border-white/40 shadow-[0px_0px_20px_0px_rgba(248,248,248,0.5)_inset,0px_20px_40px_-10px_rgba(0,0,0,0.7)]",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Enhanced glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
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
    <img
      src="/assets/Workday Logo.jpeg"
      alt="Workday"
      className={cn("object-contain", className)}
    />
  );
};

export const ADPLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/assets/ADP Image.png"
      alt="ADP"
      className={cn("object-contain", className)}
    />
  );
};

export const PaychexLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/assets/Paychex Landing Page.jpg"
      alt="Paychex"
      className={cn("object-contain", className)}
    />
  );
};

export const BambooLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/assets/BambooHR Image.png"
      alt="BambooHR"
      className={cn("object-contain", className)}
    />
  );
};

export const GustoLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/assets/Gusto Inc Logo.svg"
      alt="Gusto"
      className={cn("object-contain", className)}
    />
  );
};

export const JustWorksLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/assets/JW Logo.png"
      alt="JustWorks"
      className={cn("object-contain", className)}
    />
  );
};

// HR Systems data for easy expansion - defined after logo components
const hrSystems = [
  { name: "Workday", className: "h-14 w-14 circle-1", logoClassName: "h-8 w-8", logo: WorkdayLogo },
  { name: "BambooHR", className: "h-16 w-16 circle-2", logoClassName: "h-10 w-10", logo: BambooLogo },
  { name: "Paychex", className: "h-14 w-14 circle-3", logoClassName: "h-8 w-8", logo: PaychexLogo },
  { name: "ADP", className: "h-14 w-14 circle-4", logoClassName: "h-8 w-8", logo: ADPLogo },
  { name: "Gusto", className: "h-14 w-14 circle-5", logoClassName: "h-8 w-8", logo: GustoLogo },
  { name: "JustWorks", className: "h-14 w-14 circle-6", logoClassName: "h-8 w-8", logo: JustWorksLogo },
];


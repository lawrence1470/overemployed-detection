"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "~/lib/utils";
import { useAnimationPreloader } from "~/lib/animation-preloader";
import { 
  Users, 
  Fingerprint, 
  AlertTriangle, 
  Shield, 
  Database, 
  Sparkles,
  Search,
  CheckCircle
} from "lucide-react";

const loadingStates = [
  {
    text: "Initializing identity verification...",
    icon: Fingerprint,
    color: "text-blue-400",
  },
  {
    text: "Connecting to HR databases...",
    icon: Database,
    color: "text-green-400",
  },
  {
    text: "Scanning employment records...",
    icon: Search,
    color: "text-purple-400",
  },
  {
    text: "Analyzing work patterns...",
    icon: Users,
    color: "text-orange-400",
  },
  {
    text: "Detecting anomalies...",
    icon: AlertTriangle,
    color: "text-red-400",
  },
  {
    text: "Securing your workforce...",
    icon: Shield,
    color: "text-emerald-400",
  },
  {
    text: "Ready to catch them twice...",
    icon: CheckCircle,
    color: "text-cyan-400",
  },
];

// Animated DNA-like helix representing data analysis
function DNAHelix() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        width="200"
        height="400"
        viewBox="0 0 200 400"
        className="opacity-20"
      >
        {[...Array(20)].map((_, i) => {
          const y = i * 20;
          const phase = (i * Math.PI) / 5;
          const x1 = 100 + Math.sin(phase) * 40;
          const x2 = 100 - Math.sin(phase) * 40;
          
          return (
            <motion.g key={i}>
              <motion.circle
                cx={x1}
                cy={y}
                r="3"
                fill="currentColor"
                className="text-blue-400"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={x2}
                cy={y}
                r="3"
                fill="currentColor"
                className="text-purple-400"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1 + 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-600"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

// Animated employee cards being scanned
function ScanningCards() {
  const cards = [
    { id: 1, name: "John D.", status: "verified", delay: 0 },
    { id: 2, name: "Sarah M.", status: "suspicious", delay: 0.2 },
    { id: 3, name: "Mike R.", status: "verified", delay: 0.4 },
    { id: 4, name: "Alex P.", status: "duplicate", delay: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={cn(
            "absolute w-48 h-24 rounded-lg p-3 backdrop-blur-sm",
            "border flex items-center justify-between",
            card.status === "verified" && "bg-green-900/20 border-green-500/30",
            card.status === "suspicious" && "bg-yellow-900/20 border-yellow-500/30",
            card.status === "duplicate" && "bg-red-900/20 border-red-500/30"
          )}
          initial={{
            x: -200,
            y: Math.random() * 400 - 200,
            opacity: 0,
            rotate: -10,
          }}
          animate={{
            x: ["-100%", "50%", "200%"],
            opacity: [0, 1, 0],
            rotate: [-10, 0, 10],
          }}
          transition={{
            duration: 3,
            delay: card.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              card.status === "verified" && "bg-green-500/20",
              card.status === "suspicious" && "bg-yellow-500/20",
              card.status === "duplicate" && "bg-red-500/20"
            )}>
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-medium text-white/80">{card.name}</p>
              <p className={cn(
                "text-xs",
                card.status === "verified" && "text-green-400",
                card.status === "suspicious" && "text-yellow-400",
                card.status === "duplicate" && "text-red-400"
              )}>
                {card.status}
              </p>
            </div>
          </div>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {card.status === "verified" && <CheckCircle className="w-5 h-5 text-green-400" />}
            {card.status === "suspicious" && <AlertTriangle className="w-5 h-5 text-yellow-400" />}
            {card.status === "duplicate" && <Sparkles className="w-5 h-5 text-red-400" />}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function PremiumLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);
  const [currentState, setCurrentState] = useState(0);
  const [canSkip, setCanSkip] = useState(false);
  
  const {
    shouldShowLoader: checkShouldShow,
    completePreload,
    getOptimalDuration,
    prefersReducedMotion
  } = useAnimationPreloader();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    
    let skipTimer: NodeJS.Timeout | null = null;
    let completeTimer: NodeJS.Timeout | null = null;
    
    const initializeLoader = async () => {
      try {
        // Check if already aborted
        if (signal.aborted) return;
        
        const shouldShow = await checkShouldShow({
          timeout: 3000,
          enableCache: true,
          skipOnSlowConnection: true,
          signal
        });
        
        // Check again after async operation
        if (signal.aborted) return;
        
        if (!shouldShow) {
          // Skip loader entirely
          setIsLoading(false);
          setShouldShowLoader(false);
          return;
        }
        
        // Show loader with optimal duration
        setShouldShowLoader(true);
        const duration = getOptimalDuration();
        
        // Allow skipping after 1 second
        skipTimer = setTimeout(() => {
          if (!signal.aborted) {
            setCanSkip(true);
          }
        }, 1000);
        
        // Auto-complete after optimal duration
        completeTimer = setTimeout(() => {
          if (!signal.aborted) {
            completePreload();
            setIsLoading(false);
          }
        }, duration);
        
      } catch (error) {
        console.warn('Loader initialization error:', error);
        if (!signal.aborted) {
          setIsLoading(false);
          setShouldShowLoader(false);
        }
      }
    };
    
    initializeLoader();
    
    return () => {
      // Abort any pending async operations
      abortController.abort();
      
      // Clear timers
      if (skipTimer) clearTimeout(skipTimer);
      if (completeTimer) clearTimeout(completeTimer);
    };
  }, [checkShouldShow, getOptimalDuration, completePreload]);

  const handleSkip = () => {
    completePreload();
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading || !shouldShowLoader) {
      setCurrentState(0);
      return;
    }

    // Dynamic timing based on state
    const timings = [300, 400, 350, 450, 400, 500, 600];
    const currentTiming = timings[currentState] || 400;

    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        Math.min(prevState + 1, loadingStates.length - 1)
      );
    }, prefersReducedMotion() ? currentTiming * 1.5 : currentTiming);

    return () => clearTimeout(timeout);
  }, [currentState, isLoading, shouldShowLoader, prefersReducedMotion]);

  // Don't render anything if we shouldn't show the loader
  if (!isLoading || !shouldShowLoader) return null;

  const CurrentIcon = loadingStates[currentState]?.icon || Fingerprint;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center bg-black"
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <DNAHelix />
          <ScanningCards />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto px-6">
          {/* Logo animation */}
          <motion.div
            className="mb-12 relative"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CurrentIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* Scanning effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)",
                backgroundSize: "100% 50%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Loading states display */}
          <div className="space-y-3 mb-8">
            {loadingStates.map((state, index) => {
              const isActive = index === currentState;
              const isPast = index < currentState;
              const Icon = state.icon;
              
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isActive ? 1 : isPast ? 0.5 : 0.2,
                    x: 0,
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isActive && "bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50",
                    isPast && "bg-green-500/20 border border-green-500/50",
                    !isActive && !isPast && "bg-gray-800 border border-gray-700"
                  )}>
                    <Icon className={cn(
                      "w-4 h-4 transition-all duration-300",
                      isActive && "text-white",
                      isPast && "text-green-400",
                      !isActive && !isPast && "text-gray-600"
                    )} />
                  </div>
                  
                  <span className={cn(
                    "text-sm font-medium transition-all duration-300",
                    isActive && state.color,
                    isPast && "text-gray-500 line-through",
                    !isActive && !isPast && "text-gray-600"
                  )}>
                    {state.text}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      className="ml-auto"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-xs mb-8">
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((currentState + 1) / loadingStates.length) * 100}%` 
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut" 
                }}
              />
            </div>
          </div>
          
          {/* Skip button */}
          <AnimatePresence>
            {canSkip && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={handleSkip}
                className="px-6 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Skip verification
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </motion.div>
    </AnimatePresence>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "~/components/ui/input";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "~/lib/utils";

interface ComingSoonProps {
  onBypass: () => void;
}

export function ComingSoon({ onBypass }: ComingSoonProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "catsarecool") {
      // Store bypass in sessionStorage so they don't need to re-enter
      sessionStorage.setItem("admin-bypass", "true");
      onBypass();
    } else {
      setIsInvalid(true);
      setAttempts(prev => prev + 1);
      setPassword("");
      
      // Reset invalid state after animation
      setTimeout(() => setIsInvalid(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black/80 to-purple-950/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md w-full">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              VerifyHire
            </motion.div>

            {/* Coming Soon Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-8 backdrop-blur-sm border border-orange-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              🚀 Coming Soon
            </motion.div>

            <motion.h1
              className="text-3xl lg:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We're Building Something
              <br />
              <span className="text-orange-400">Revolutionary</span>
            </motion.h1>

            <motion.p
              className="text-white/70 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The most advanced dual employment detection platform is coming soon.
            </motion.p>
          </motion.div>

          {/* Admin Access */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-white/60" />
              <span className="text-white/80 font-medium">Admin Access</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(
                    "bg-white/5 border-white/20 text-white placeholder:text-white/40 pr-12",
                    isInvalid && "border-red-500/50 bg-red-500/5"
                  )}
                  containerClassName="w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button type="submit" className="w-full">
                <HoverBorderGradient
                  as="div"
                  containerClassName="w-full rounded-xl"
                  className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium transition-all duration-300 cursor-pointer"
                >
                  Access Site
                </HoverBorderGradient>
              </button>
            </form>

            <AnimatePresence>
              {isInvalid && (
                <motion.div
                  className="mt-3 text-red-400 text-sm text-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Invalid password. Try again.
                  {attempts > 2 && (
                    <div className="text-xs text-white/40 mt-1">
                      Hint: Felines are awesome
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-8 text-white/40 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            © 2025 VerifyHire. Launching soon.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
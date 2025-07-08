"use client";

import { motion } from "motion/react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";

export function Navigation() {
  return (
    <motion.nav
      className="relative z-50 flex items-center justify-between p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Premium Logo */}
      <motion.div
        className="flex items-center space-x-3 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white to-gray-200 shadow-lg"
          whileHover={{
            rotate: 360,
            boxShadow: "0 8px 25px rgba(255,255,255,0.2)",
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="h-4 w-4 rounded-sm bg-gradient-to-br from-gray-900 to-black"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
        <span className="font-bold text-lg text-white tracking-wide group-hover:text-white/90 transition-all duration-300">
          VerifyHire
        </span>
      </motion.div>

      {/* Premium CTA Button */}
      <HoverBorderGradient
        as="a"
        containerClassName="rounded-xl"
        className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-50 transition-colors"
        duration={1}
        clockwise={true}
        {...{ href: "/waitlist" }}
      >
        Join Waitlist
      </HoverBorderGradient>
    </motion.nav>
  );
}

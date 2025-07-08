"use client";

import { motion } from "motion/react";

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
      <motion.a
        href="/waitlist"
        className="group relative inline-block rounded-xl bg-gradient-to-r from-white to-gray-100 px-6 py-2 font-semibold text-black transition-all duration-300 overflow-hidden shadow-lg"
        whileHover={{
          scale: 1.05,
          y: -2,
          boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-xl"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10 group-hover:text-gray-900 transition-colors">
          Join Waitlist
        </span>
      </motion.a>
    </motion.nav>
  );
}

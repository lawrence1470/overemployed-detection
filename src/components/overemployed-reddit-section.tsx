"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { getComponentClasses } from "~/lib/design-system";

interface RedditThread {
  title: string;
  year: string;
  issue: string;
  quote: string;
  upvotes?: string;
}

const shockingThreads: RedditThread[] = [
  {
    title: "Is it time theft to be efficient?",
    year: "2022",
    issue: "Advocates time theft",
    quote: "I'm not eating anyone's a** to keep my job.",
    upvotes: "2.1k",
  },
  {
    title: "Accepting J3 and just do nothing?",
    year: "2023",
    issue: "Collecting paychecks with zero work",
    quote: "Could I simply take a J3...do absolutely nothing?",
    upvotes: "892",
  },
  {
    title: "Yes – It is Ethical to Lie",
    year: "2024",
    issue: "Promoting résumé fraud",
    quote: "Everyone should lie, there are ways to cover it up.",
    upvotes: "1.4k",
  },
  {
    title: "F*** employers, get money",
    year: "2024",
    issue: "Treat jobs like disposable ATMs",
    quote: "No loyalty, do the bare minimum, milk two jobs.",
    upvotes: "3.2k",
  },
];

export default function OveremployedRedditSection() {
  const [selectedThread, setSelectedThread] = useState<number | null>(null);

  return (
    <section className="relative h-full w-full py-12 lg:py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
      {/* Ominous Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-transparent to-orange-900/20" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div
        className={cn(getComponentClasses.container(), "relative z-10 w-full")}
      >
        <div className="max-w-6xl mx-auto">
          {/* Compact Header */}
          <motion.div
            className="text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium mb-4 backdrop-blur-sm border border-red-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ⚠️ HR Alert: Active Threat
            </motion.div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Inside the <span className="text-red-500">r/Overemployed</span>{" "}
              Cesspool
            </h2>
            <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
              451,000+ members openly plotting workplace deception
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Reddit Screenshot */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.reddit.com/r/overemployed/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden shadow-2xl border border-red-500/20 cursor-pointer group transition-all duration-300 hover:border-red-500/40 hover:shadow-red-500/20"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/assets/reddit.png"
                  alt="Reddit Overemployed Community"
                  width={600}
                  height={600}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center group-hover:bg-red-400 transition-colors duration-300">
                      <span className="text-lg font-bold">OE</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base group-hover:text-red-300 transition-colors duration-300">r/overemployed</h3>
                      <p className="text-white/80 text-xs">
                        451,827 members • 2,143 online
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-red-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Visit Subreddit
                </div>
              </motion.a>

              {/* Floating Warning Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                animate={{
                  y: [0, -5, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚨 Live
              </motion.div>
            </motion.div>

            {/* Shocking Threads List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                Most Toxic Threads:
              </h3>

              {shockingThreads.map((thread, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "p-3 rounded-lg border transition-all duration-300 cursor-pointer",
                    selectedThread === index
                      ? "bg-red-500/20 border-red-500/40"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() =>
                    setSelectedThread(selectedThread === index ? null : index)
                  }
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-white font-medium text-sm flex-1 pr-3">
                      "{thread.title}"{" "}
                      <span className="text-white/50 text-xs">({thread.year})</span>
                    </h4>
                    {thread.upvotes && (
                      <span className="text-orange-400 text-xs font-medium">
                        ⬆ {thread.upvotes}
                      </span>
                    )}
                  </div>

                  <p className="text-red-400 text-xs mb-1">{thread.issue}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: selectedThread === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-1.5 border-t border-white/10">
                      <p className="text-white/70 text-xs italic">
                        "{thread.quote}"
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Compact Call to Action */}
              <motion.div
                className="mt-6 p-4 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold text-sm mb-2">
                  Protect Your Company
                </h4>
                <p className="text-white/80 text-xs leading-relaxed mb-3">
                  These threads represent open advocacy for fraud and deception.
                </p>
                <motion.button
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Join Waitlist
                  <svg
                    className="ml-2 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Compact Bottom Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            {[
              {
                label: "Active Members",
                value: "451K+",
                color: "from-red-500 to-orange-500",
              },
              {
                label: "Daily Posts",
                value: "300+",
                color: "from-orange-500 to-yellow-500",
              },
              {
                label: "Success Stories",
                value: "1000s",
                color: "from-yellow-500 to-red-500",
              },
              {
                label: "Growing Monthly",
                value: "12%",
                color: "from-red-500 to-pink-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={cn(
                    "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1",
                    stat.color
                  )}
                >
                  {stat.value}
                </div>
                <p className="text-white/70 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

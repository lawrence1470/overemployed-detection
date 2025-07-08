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
    issue: "Advocates time theft & profane anti-employer rants",
    quote:
      "I'm not eating anyone's a** to keep my job. F*** you — you eat mine.",
    upvotes: "2.1k",
  },
  {
    title: "Accepting J3 and just do nothing until I get fired?",
    year: "2023",
    issue: "Bragging about collecting paychecks with zero work",
    quote: "Could I simply take a J3...literally do absolutely nothing?",
    upvotes: "892",
  },
  {
    title: "Yes – It is Ethical to Lie in Business",
    year: "2024",
    issue: "Promoting résumé fraud & background check deception",
    quote: "I believe everyone should lie, and there are ways to cover it up.",
    upvotes: "1.4k",
  },
  {
    title: "F*** employers, get money",
    year: "2024",
    issue: "Pure hostility: treat jobs like disposable ATMs",
    quote: "No loyalty, do the bare minimum, milk two jobs, repeat.",
    upvotes: "3.2k",
  },
  {
    title: "Anyone know of a next-gen mouse jiggler?",
    year: "2025",
    issue: "Seeking hardware to defeat activity monitoring",
    quote: "Need a device that moves, clicks and types to fool monitoring.",
    upvotes: "567",
  },
];

export default function OveremployedRedditSection() {
  const [selectedThread, setSelectedThread] = useState<number | null>(null);

  return (
    <section className="relative h-full w-full py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Ominous Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-orange-900/20" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
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
          {/* Shocking Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-8 backdrop-blur-sm border border-red-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ⚠️ HR Directors: Your Blood Pressure Will Spike
            </motion.div>

            <h2
              className={cn(
                getComponentClasses.heading("xl"),
                "text-white mb-6"
              )}
            >
              Inside the <span className="text-red-500">r/Overemployed</span>{" "}
              Cesspool
            </h2>
            <p
              className={cn(
                getComponentClasses.body("lg"),
                "text-white/80 max-w-3xl mx-auto"
              )}
            >
              451,000+ members openly plotting workplace deception. Here's their
              "greatest hits" — the posts that would make any employer's legal
              team panic.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reddit Screenshot */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-red-500/20">
                <Image
                  src="/assets/reddit.png"
                  alt="Reddit Overemployed Community"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-xl font-bold">OE</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">r/overemployed</h3>
                      <p className="text-white/80 text-sm">
                        451,827 deceptive employees • 2,143 online
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Warning Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚨 Active Threat
              </motion.div>
            </motion.div>

            {/* Shocking Threads List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className={cn(
                  getComponentClasses.heading("md"),
                  "text-white mb-6"
                )}
              >
                The Most Toxic Threads That Prove the Threat is Real:
              </h3>

              {shockingThreads.map((thread, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300 cursor-pointer",
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold flex-1 pr-4">
                      "{thread.title}"{" "}
                      <span className="text-white/60">({thread.year})</span>
                    </h4>
                    {thread.upvotes && (
                      <span className="text-orange-400 text-sm font-medium">
                        ⬆ {thread.upvotes}
                      </span>
                    )}
                  </div>

                  <p className="text-red-400 text-sm mb-2">{thread.issue}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: selectedThread === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-white/70 text-sm italic">
                        "{thread.quote}"
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Call to Action */}
              <motion.div
                className="mt-8 p-6 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold mb-3">
                  This is Just the Tip of the Iceberg
                </h4>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  These threads represent open advocacy for fraud, time theft,
                  résumé lies, and deliberate deception. Your employees are
                  reading this content daily, learning new ways to exploit your
                  trust.
                </p>
                <motion.button
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Protect Your Company Now
                  <svg
                    className="ml-2 w-4 h-4"
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

          {/* Bottom Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
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
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={cn(
                    "text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2",
                    stat.color
                  )}
                >
                  {stat.value}
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

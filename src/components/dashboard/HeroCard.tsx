"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="min-h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-zinc-900 to-cyan-500/10 p-6 relative overflow-hidden"
    >
      {/* glow blob */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />

      <h1 className="text-3xl font-semibold">
        Welcome back 👋
      </h1>

      <p className="text-zinc-400 mt-2 max-w-md">
        Your learning dashboard is active. Keep building consistency — small progress daily creates mastery.
      </p>

      <div className="mt-6 flex gap-4 text-sm">
        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          🔥 Streak: 7 days
        </div>

        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          📚 4 Active Courses
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function ActivityCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-5"
    >
      <h2 className="text-sm text-zinc-400 mb-3">
        Weekly Activity
      </h2>

      <div className="grid grid-cols-12 gap-1 h-24 items-end">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 10 }}
            animate={{ height: Math.random() * 60 + 10 }}
            transition={{ duration: 0.8 }}
            className="bg-purple-500/30 rounded-sm"
          />
        ))}
      </div>
    </motion.div>
  );
}
"use client";

import { Home, BookOpen, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { name: "Home", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Stats", icon: BarChart },
];

export default function MobileNav() {
  return (
    <motion.nav
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-zinc-950 border-t border-white/10 flex justify-around py-3"
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition"
          >
            <Icon size={18} />
            <span className="text-[10px]">{item.name}</span>
          </div>
        );
      })}
    </motion.nav>
  );
}
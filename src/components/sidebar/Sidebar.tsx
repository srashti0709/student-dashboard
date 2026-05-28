"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart } from "lucide-react";

const items = [
  { name: "Home", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <aside className="hidden lg:flex w-64 h-screen bg-zinc-950 border-r border-zinc-800 p-4 flex-col gap-4">
      
      <h2 className="text-xl font-semibold text-white mb-4">
        EduDash
      </h2>

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer"
          >
            
            {/* ACTIVE BACKGROUND ANIMATION */}
            {active === item.name && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 bg-purple-500/10 border border-purple-500/30 rounded-lg"
              />
            )}

            <Icon className="w-4 h-4 relative z-10" />
            <span className="relative z-10 text-sm text-zinc-300">
              {item.name}
            </span>

          </div>
        );
      })}
    </aside>
  );
}
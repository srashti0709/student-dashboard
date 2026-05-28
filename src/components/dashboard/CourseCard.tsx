"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Brain, Boxes } from "lucide-react";

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

type Props = {
  course: Course;
};

const iconMap = {
  Code2,
  Rocket,
  Brain,
  Boxes,
};

export default function CourseCard({ course }: Props) {
  const Icon = iconMap[course.icon_name as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 overflow-hidden transition-transform duration-300 hover:scale-[1.02]"    >
      {Icon && <Icon className="w-5 h-5 text-purple-400 mb-3" />}

      <h3 className="font-medium text-white">
        {course.title}
      </h3>

      <p className="text-sm text-zinc-400 mt-2">
        Progress: {course.progress}%
      </p>

      <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
  <div
    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
    style={{ width: `${course.progress}%` }}
  />
</div>
    </motion.div>
  );
}
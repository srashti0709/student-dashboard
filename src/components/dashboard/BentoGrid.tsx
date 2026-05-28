"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import HeroCard from "./HeroCard";
import ActivityCard from "./ActivityCard";

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};


export default function BentoGrid({ courses }: { courses: Course[] }) {
    if (!courses.length) {
  return (
    <div className="flex items-center justify-center h-64 text-zinc-400">
      No courses available yet — start learning something 🚀
    </div>
  );
}
  return (
    
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[190px]"
    >
      <div className="lg:col-span-2 lg:row-span-2">
        <HeroCard />
      </div>

      <div className="lg:col-span-2">
        <ActivityCard />
      </div>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </motion.section>
    
  );
}   
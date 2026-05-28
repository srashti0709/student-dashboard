"use client";

import BentoGrid from "./BentoGrid";

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

export default function DashboardClient({
  courses,
}: {
  courses: Course[];
}) {
  return (
<main className="flex-1 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          <div className="mb-8">
  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        📚 Student Dashboard
  </h1>
  <p className="text-zinc-400 mt-2 text-sm sm:text-base">
    Your learning dashboard is ready. Keep building momentum.
  </p>
</div>

      <BentoGrid courses={courses} />
    </main>
  );
}
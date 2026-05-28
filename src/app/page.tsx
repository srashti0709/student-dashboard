import { supabase } from "../lib/supabase";
import Sidebar from "@/components/sidebar/Sidebar";
import DashboardClient from "@/components/dashboard/DashboardClient";
import MobileNav from "@/components/mobile/MobileNav";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center space-y-2">
          <h1 className="text-red-400 text-xl font-semibold">
            Failed to load dashboard
          </h1>
          <p className="text-zinc-400 text-sm">
            {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
<div className="flex min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">      <Sidebar />
      <DashboardClient courses={courses || []} />
          <MobileNav />

    </div>
  );
}
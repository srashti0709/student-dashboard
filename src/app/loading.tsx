export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white flex">

      {/* Sidebar Skeleton */}
      <aside className="hidden lg:flex w-64 border-r border-white/10 p-4 flex-col gap-4">
        <div className="h-6 w-24 bg-white/5 rounded-md animate-pulse" />
        <div className="h-4 w-32 bg-white/5 rounded-md animate-pulse" />
        <div className="h-4 w-28 bg-white/5 rounded-md animate-pulse" />
        <div className="h-4 w-24 bg-white/5 rounded-md animate-pulse" />
      </aside>

      {/* Main Skeleton */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">

        {/* Header skeleton */}
        <div className="space-y-2">
          <div className="h-7 w-64 bg-white/5 rounded-md animate-pulse" />
          <div className="h-4 w-96 bg-white/5 rounded-md animate-pulse" />
        </div>

        {/* Bento Skeleton Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-[160px]">

          {/* Hero skeleton */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-2xl border border-white/10 bg-white/5 animate-pulse" />

          {/* Activity skeleton */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 animate-pulse" />

          {/* Course skeleton cards */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 animate-pulse"
            />
          ))}

        </div>

      </main>
    </div>
  );
}
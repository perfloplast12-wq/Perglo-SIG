export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="h-8 w-64 rounded-xl bg-card-muted/80 dark:bg-card-muted/30" />
          <div className="h-4 w-96 rounded-lg bg-card-muted/60 dark:bg-card-muted/20" />
        </div>
        <div className="h-10 w-32 rounded-xl bg-card-muted/80 dark:bg-card-muted/30" />
      </div>

      {/* KPI Cards Grid Skeleton */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border bg-card/50 p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-4 w-20 rounded bg-card-muted/80 dark:bg-card-muted/30" />
              <div className="h-8 w-8 rounded-full bg-card-muted/60 dark:bg-card-muted/20" />
            </div>
            <div className="h-8 w-24 rounded-lg bg-card-muted/90 dark:bg-card-muted/40" />
            <div className="h-3 w-32 rounded bg-card-muted/60 dark:bg-card-muted/20" />
          </div>
        ))}
      </div>

      {/* Main Content Grid Skeleton */}
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* Large Card */}
        <div className="rounded-2xl border bg-card/50 p-5 space-y-4">
          <div className="h-6 w-48 rounded bg-card-muted/80 dark:bg-card-muted/30" />
          <div className="h-64 w-full rounded-xl bg-card-muted/40 dark:bg-card-muted/10" />
        </div>

        {/* Small Card */}
        <div className="rounded-2xl border bg-card/50 p-5 space-y-4">
          <div className="h-6 w-36 rounded bg-card-muted/80 dark:bg-card-muted/30" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-xl bg-card-muted/20 dark:bg-card-muted/10">
                <div className="h-10 w-10 rounded-lg bg-card-muted/60 dark:bg-card-muted/20 shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-3/4 rounded bg-card-muted/80 dark:bg-card-muted/30" />
                  <div className="h-3 w-1/2 rounded bg-card-muted/60 dark:bg-card-muted/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

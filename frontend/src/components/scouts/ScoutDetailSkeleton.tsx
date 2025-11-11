export const ScoutDetailSkeleton = () => {
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="h-8 w-56 animate-pulse rounded-md bg-slate-200" />
        <div className="h-6 w-32 animate-pulse rounded-md bg-slate-200" />
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-6 w-24 animate-pulse rounded-full bg-slate-200"
          />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="h-4 w-32 animate-pulse rounded-md bg-slate-200" />
            <div className="h-3 w-24 animate-pulse rounded-md bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
};


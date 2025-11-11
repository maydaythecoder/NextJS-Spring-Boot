export const TeamDetailSkeleton = () => {
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="h-9 w-64 animate-pulse rounded-md bg-slate-200" />
        <div className="h-7 w-40 animate-pulse rounded-md bg-slate-200" />
      </div>
      <div className="h-4 w-full animate-pulse rounded-md bg-slate-200" />
      <div className="rounded-2xl border border-slate-200">
        <div className="h-12 w-full animate-pulse bg-slate-100" />
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-t border-slate-100 px-4 py-3"
          >
            <div className="h-4 w-48 animate-pulse rounded-md bg-slate-200" />
            <div className="h-4 w-28 animate-pulse rounded-md bg-slate-200" />
            <div className="h-4 w-32 animate-pulse rounded-md bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
};


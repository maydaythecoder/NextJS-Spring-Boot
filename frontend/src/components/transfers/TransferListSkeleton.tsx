export const TransferListSkeleton = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200" />
            <div className="h-3 w-24 animate-pulse rounded-md bg-slate-200" />
          </div>
          <div className="h-5 w-40 animate-pulse rounded-md bg-slate-200" />
          <div className="h-4 w-32 animate-pulse rounded-md bg-slate-200" />
          <div className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded-md bg-slate-200" />
            <div className="h-3 w-3/4 animate-pulse rounded-md bg-slate-200" />
          </div>
          <div className="flex gap-3">
            <div className="h-9 w-full animate-pulse rounded-lg bg-slate-200" />
            <div className="h-9 w-full animate-pulse rounded-lg bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
};


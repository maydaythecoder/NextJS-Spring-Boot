export const ScoutsListSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="h-9 w-48 animate-pulse rounded-md bg-slate-200" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="h-5 w-40 animate-pulse rounded-md bg-slate-200" />
            <div className="mt-2 h-4 w-48 animate-pulse rounded-md bg-slate-200" />
            <div className="mt-6 grid grid-cols-2 gap-2">
              {Array.from({ length: 3 }).map((__, regionIndex) => (
                <div
                  key={regionIndex}
                  className="h-4 w-full animate-pulse rounded-md bg-slate-200"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export const PlayerDetailSkeleton = () => {
  return (
    <div className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="h-9 w-56 animate-pulse rounded-md bg-slate-200" />
        <div className="h-6 w-32 animate-pulse rounded-md bg-slate-200" />
      </div>
      <div className="space-y-4">
        <div className="h-4 w-full animate-pulse rounded-md bg-slate-200" />
        <div className="grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="h-3 w-24 animate-pulse rounded-md bg-slate-200" />
              <div className="h-5 w-10 animate-pulse rounded-md bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[2fr,3fr]">
        <div className="space-y-6">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="h-5 w-40 animate-pulse rounded-md bg-slate-200" />
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded-md bg-slate-200" />
              <div className="h-3 w-5/6 animate-pulse rounded-md bg-slate-200" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {Array.from({ length: 2 }).map((_, column) => (
                <div key={column} className="space-y-3">
                  <div className="h-3 w-24 animate-pulse rounded-md bg-slate-200" />
                  {Array.from({ length: 3 }).map((__, row) => (
                    <div
                      key={row}
                      className="flex items-center justify-between rounded-xl bg-white px-3 py-4"
                    >
                      <div className="h-3 w-24 animate-pulse rounded-md bg-slate-200" />
                      <div className="h-4 w-8 animate-pulse rounded-md bg-slate-200" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="h-5 w-56 animate-pulse rounded-md bg-slate-200" />
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded-md bg-slate-200" />
              <div className="h-3 w-4/5 animate-pulse rounded-md bg-slate-200" />
            </div>
          </div>
        </div>
        <div className="h-80 rounded-3xl border border-slate-200 bg-slate-100" />
      </div>
      <div className="space-y-4">
        <div className="h-5 w-48 animate-pulse rounded-md bg-slate-200" />
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="h-3 w-20 animate-pulse rounded-md bg-slate-200" />
              <div className="h-6 w-12 animate-pulse rounded-md bg-slate-200" />
              <div className="h-2 w-full animate-pulse rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


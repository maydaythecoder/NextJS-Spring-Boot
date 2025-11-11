export const PlayersListSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="h-9 w-56 animate-pulse rounded-md bg-slate-200" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="h-5 w-28 animate-pulse rounded-md bg-slate-200" />
            <div className="mt-3 h-4 w-40 animate-pulse rounded-md bg-slate-200" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((__, statIndex) => (
                <div
                  key={statIndex}
                  className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="h-3 w-16 animate-pulse rounded-md bg-slate-200" />
                  <div className="h-6 w-10 animate-pulse rounded-md bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export function UserDetailSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="h-4 w-24 animate-pulse rounded-md bg-slate-200" />
        <div className="h-10 w-64 animate-pulse rounded-md bg-slate-200" />
        <div className="h-4 w-80 animate-pulse rounded-md bg-slate-200" />
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="grid gap-4 md:grid-cols-3">
              <div className="h-3 w-24 animate-pulse rounded-md bg-slate-200" />
              <div className="md:col-span-2">
                <div className="h-5 w-40 animate-pulse rounded-md bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


import Link from "next/link";

export const ScoutsEmptyState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-inner">
      <div className="mx-auto max-w-xl space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          No scouts on record
        </h2>
        <p className="text-sm leading-6 text-slate-500">
          Create scout profiles to coordinate watchlists and share player intel
          across your recruitment pipeline.
        </p>
        <Link
          href="/players"
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Review player pool
        </Link>
      </div>
    </div>
  );
};


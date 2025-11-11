import Link from "next/link";

export const TeamsEmptyState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-inner">
      <div className="mx-auto max-w-xl space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          No teams configured
        </h2>
        <p className="text-sm leading-6 text-slate-500">
          Synchronize squads from the backend JSON fixtures or create a new
          roster to start tracking assignments and transfer activity.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/players"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Review players
          </Link>
          <Link
            href="/transfers"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900/10 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Manage transfers
          </Link>
        </div>
      </div>
    </div>
  );
};


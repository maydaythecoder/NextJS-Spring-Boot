import Link from "next/link";
import type { Scout } from "@/lib";

export const ScoutCard = ({ scout }: { scout: Scout }) => {
  return (
    <Link
      href={`/scouts/${scout.id}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span>Scout</span>
          <span>{scout.trackedPlayerIds.length} players</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            {scout.name}
          </h3>
          <p className="mt-1 text-sm text-slate-500">{scout.email}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {scout.regions.map((region) => (
            <span
              key={region}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {region}
            </span>
          ))}
          {scout.regions.length === 0 && (
            <span className="text-xs font-medium text-slate-400">
              No regions assigned
            </span>
          )}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-600 transition group-hover:text-slate-900">
        <span>Open dossier</span>
        <span aria-hidden className="text-lg">
          →
        </span>
      </div>
    </Link>
  );
};


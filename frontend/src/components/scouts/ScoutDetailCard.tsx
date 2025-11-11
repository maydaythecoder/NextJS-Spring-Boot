import Link from "next/link";
import type { Player, Scout } from "@/lib";

export const ScoutDetailCard = ({
  scout,
  watchlist,
}: {
  scout: Scout;
  watchlist: Player[];
}) => {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              {scout.name}
            </h1>
            <p className="text-sm text-slate-500">{scout.email}</p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Scout ID: {scout.id}
          </div>
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
      </header>
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Watchlist
          </h2>
          <Link
            href="/players"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-slate-900/10 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Browse players
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {watchlist.map((player) => {
            const topStat = Object.entries(player.stats).sort(
              ([, valueA], [, valueB]) => valueB.value - valueA.value,
            )[0];
            return (
              <Link
                key={player.id}
                href={`/players/${player.id}`}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">
                    {player.name}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {player.position}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Top metric:{" "}
                  {topStat
                    ? `${topStat[0].replace(/_/g, " ")} · ${topStat[1].value}`
                    : "No stats available"}
                </p>
              </Link>
            );
          })}
          {watchlist.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
              No players are tracked yet. Add prospects from the player directory
              to build this scout&apos;s dossier.
            </div>
          )}
        </div>
      </section>
    </article>
  );
};


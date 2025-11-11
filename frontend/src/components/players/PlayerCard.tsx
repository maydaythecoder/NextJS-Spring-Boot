import Link from "next/link";
import type { Player } from "@/lib";

const POSITION_STYLES: Record<string, string> = {
  GOALKEEPER: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30",
  DEFENDER: "bg-sky-500/10 text-sky-400 ring-sky-500/30",
  MIDFIELDER: "bg-amber-500/10 text-amber-400 ring-amber-500/30",
  FORWARD: "bg-rose-500/10 text-rose-400 ring-rose-500/30",
};

function topStats(player: Player, limit = 3) {
  return Object.entries(player.stats)
    .sort(([, a], [, b]) => b.value - a.value)
    .slice(0, limit);
}

export const PlayerCard = ({ player }: { player: Player }) => {
  const stats = topStats(player);

  return (
    <Link
      href={`/players/${player.id}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${POSITION_STYLES[player.position] ?? "bg-slate-500/10 text-slate-400 ring-slate-500/30"}`}
          >
            {player.position}
          </span>
          <span className="text-xs font-medium text-slate-400">
            ID: {player.id}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            {player.name}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            View detailed metrics and scouting insights.
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-3 text-sm">
          {stats.map(([stat, value]) => (
            <div
              key={stat}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center"
            >
              <dt className="text-xs uppercase tracking-wide text-slate-500">
                {stat.replace(/_/g, " ")}
              </dt>
              <dd className="text-lg font-semibold text-slate-900">
                {value.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-600 transition group-hover:text-slate-900">
        <span>View profile</span>
        <span aria-hidden className="text-lg">
          →
        </span>
      </div>
    </Link>
  );
};


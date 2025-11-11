import type { Player } from "@/lib";

export const PlayerStatsGrid = ({ player }: { player: Player }) => {
  const entries = Object.entries(player.stats).sort(
    ([, valueA], [, valueB]) => valueB.value - valueA.value,
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {entries.map(([stat, value]) => (
        <div
          key={stat}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {stat.replace(/_/g, " ")}
          </p>
          <div className="mt-2 flex items-end justify-between text-3xl font-semibold text-slate-900">
            <span>{value.value}</span>
            <span className="text-xs font-medium text-slate-400">rating</span>
          </div>
        </div>
      ))}
    </div>
  );
};


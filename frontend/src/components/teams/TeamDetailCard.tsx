import type { Player, Team } from "@/lib";

export const TeamDetailCard = ({
  team,
  players,
}: {
  team: Team;
  players: Player[];
}) => {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              {team.name}
            </h1>
            <p className="text-sm text-slate-500">
              Managed by {team.manager}. {players.length} players in the
              rotation.
            </p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Team ID: {team.id}
          </div>
        </div>
      </header>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Active roster
        </h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Player
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Position
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Highlights
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {players.map((player) => {
                const topStats = Object.entries(player.stats)
                  .sort(([, a], [, b]) => b.value - a.value)
                  .slice(0, 3);
                return (
                  <tr key={player.id} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">
                      {player.name}
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {player.position}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      <div className="flex flex-wrap gap-2">
                        {topStats.map(([stat, value]) => (
                          <span
                            key={stat}
                            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                          >
                            {stat.replace(/_/g, " ")} · {value.value}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {players.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-sm text-slate-500"
                  >
                    This roster is empty. Assign players via the transfer portal
                    or scout watchlists.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
};


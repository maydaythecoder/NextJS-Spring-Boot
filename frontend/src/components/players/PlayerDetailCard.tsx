import type { Player } from "@/lib";
import { PlayerStatsGrid } from "./PlayerStatsGrid";

const POSITION_LABELS: Record<string, string> = {
  GOALKEEPER: "Goalkeeper",
  DEFENDER: "Defender",
  MIDFIELDER: "Midfielder",
  FORWARD: "Forward",
};

export const PlayerDetailCard = ({ player }: { player: Player }) => {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            {player.name}
          </h1>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600">
            {POSITION_LABELS[player.position] ?? player.position}
          </span>
        </div>
        <p className="text-sm text-slate-500">
          Comprehensive radar pulled from the Spring Boot CRM, helping managers,
          scouts, and analysts align on the player&apos;s readiness.
        </p>
        <dl className="grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Identifier
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900">
              {player.id}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Position group
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900">
              {POSITION_LABELS[player.position] ?? player.position}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Metrics tracked
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900">
              {Object.keys(player.stats).length}
            </dd>
          </div>
        </dl>
      </header>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Performance breakdown
        </h2>
        <PlayerStatsGrid player={player} />
      </section>
    </article>
  );
};


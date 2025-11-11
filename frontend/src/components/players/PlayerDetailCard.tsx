import type { Player } from "@/lib";
import { PlayerAttributeRadar } from "./PlayerAttributeRadar";
import { PlayerStatsGrid } from "./PlayerStatsGrid";

const POSITION_LABELS: Record<string, string> = {
  GOALKEEPER: "Goalkeeper",
  DEFENDER: "Defender",
  MIDFIELDER: "Midfielder",
  FORWARD: "Forward",
};

const TOP_ATTRIBUTE_COUNT = 3;

const formatLabel = (label: string) => label.replace(/_/g, " ");

const extractTopMetrics = (player: Player) => {
  const sorted = Object.entries(player.stats)
    .map(([key, stat]) => ({
      key,
      label: formatLabel(key),
      value: stat.value,
    }))
    .sort((a, b) => b.value - a.value);

  const strengths = sorted.slice(0, TOP_ATTRIBUTE_COUNT);
  const development = sorted.slice(-TOP_ATTRIBUTE_COUNT).reverse();

  return { strengths, development };
};

export const PlayerDetailCard = ({ player }: { player: Player }) => {
  const { strengths, development } = extractTopMetrics(player);

  return (
    <article className="space-y-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
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
      <section className="grid gap-8 lg:grid-cols-[2fr,3fr]">
        <div className="space-y-6">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Tactical profile
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              Radar reflects the player&apos;s weighted attributes. Use it to
              align match plans, recruitment decisions, and training workloads.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Strengths
                </h3>
                <ul className="mt-3 space-y-2">
                  {strengths.map((stat) => (
                    <li
                      key={stat.key}
                      className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm"
                    >
                      <span className="truncate uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </span>
                      <span className="text-base font-semibold text-emerald-600">
                        {stat.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  Development focus
                </h3>
                <ul className="mt-3 space-y-2">
                  {development.map((stat) => (
                    <li
                      key={stat.key}
                      className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm"
                    >
                      <span className="truncate uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </span>
                      <span className="text-base font-semibold text-amber-600">
                        {stat.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Applied scouting notes
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              Blend technical metrics with recent match context to decide next
              rotation steps. This view keeps coaches, physios, and recruitment
              aligned without touching the backend dataset.
            </p>
          </div>
        </div>
        <PlayerAttributeRadar player={player} />
      </section>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Attribute breakdown
        </h2>
        <PlayerStatsGrid player={player} />
      </section>
    </article>
  );
};


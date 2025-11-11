import Link from "next/link";
import type { Team } from "@/lib";

export const TeamCard = ({ team }: { team: Team }) => {
  return (
    <Link
      href={`/teams/${team.id}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Squad
          </span>
          <span className="text-xs font-medium text-slate-400">
            {team.playerIds.length} players
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            {team.name}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Managed by {team.manager}. Keep rosters in sync with transfer
            approvals and scouting reports.
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-600 transition group-hover:text-slate-900">
        <span>Open roster</span>
        <span aria-hidden className="text-lg">
          →
        </span>
      </div>
    </Link>
  );
};


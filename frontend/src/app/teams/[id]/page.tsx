import Link from "next/link";
import { ErrorState, TeamDetailCard } from "@/components";
import { fetchTeamWithPlayers } from "@/lib";

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let team = null;
  let fetchError: Error | null = null;

  try {
    team = await fetchTeamWithPlayers(id);
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load team"
          message={fetchError.message}
          action={
            <Link
              href="/teams"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to teams
            </Link>
          }
        />
      </div>
    );
  }

  if (!team) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Team not found"
          message="We couldn’t locate that team. It may have been removed."
          action={
            <Link
              href="/teams"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to teams
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <TeamDetailCard team={team} players={team.players} />
    </div>
  );
}


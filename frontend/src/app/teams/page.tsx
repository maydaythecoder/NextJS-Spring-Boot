import Link from "next/link";
import { ErrorState, TeamsEmptyState, TeamsList } from "@/components";
import { fetchTeams, type Team } from "@/lib";

export default async function TeamsPage() {
  let teams: Team[] = [];
  let fetchError: Error | null = null;

  try {
    teams = await fetchTeams();
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load teams"
          message={fetchError.message}
          action={
            <Link
              href="/teams"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Retry
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      {teams.length === 0 ? <TeamsEmptyState /> : <TeamsList teams={teams} />}
    </div>
  );
}


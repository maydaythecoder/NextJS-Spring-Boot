import Link from "next/link";
import {
  ErrorState,
  TransferCreateForm,
  TransferFilterBar,
  TransferList,
} from "@/components";
import {
  fetchPlayers,
  fetchTeams,
  fetchTransfers,
  type Player,
  type Team,
  type Transfer,
  type TransferStatus,
} from "@/lib";

function parseStatus(value?: string | string[]): TransferStatus | undefined {
  if (!value) {
    return undefined;
  }
  const candidate = Array.isArray(value) ? value.at(0) : value;
  if (!candidate) {
    return undefined;
  }
  const normalized = candidate.toUpperCase();
  if (
    normalized === "PENDING" ||
    normalized === "APPROVED" ||
    normalized === "REJECTED"
  ) {
    return normalized;
  }
  return undefined;
}

export default async function TransfersPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const status = parseStatus(resolvedSearchParams?.status);

  let transfers: Transfer[] = [];
  let players: Player[] = [];
  let teams: Team[] = [];
  let fetchError: Error | null = null;

  try {
    const [transferResults, playerResults, teamResults] = await Promise.all([
      fetchTransfers(status ? { status } : undefined),
      fetchPlayers(),
      fetchTeams(),
    ]);
    transfers = transferResults;
    players = playerResults;
    teams = teamResults;
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load transfer portal"
          message={fetchError.message}
          action={
            <Link
              href="/transfers"
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
      <TransferFilterBar />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
        <TransferList transfers={transfers} players={players} teams={teams} />
        <TransferCreateForm players={players} teams={teams} />
      </div>
    </div>
  );
}


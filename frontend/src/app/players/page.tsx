import Link from "next/link";
import {
  ErrorState,
  PlayersEmptyState,
  PlayersFilterBar,
  PlayersList,
} from "@/components";
import { fetchPlayers, type Player, type Position } from "@/lib";

function parsePosition(value?: string | string[]): Position | undefined {
  if (!value) {
    return undefined;
  }
  const candidate = Array.isArray(value) ? value.at(0) : value;
  if (!candidate) {
    return undefined;
  }
  const normalized = candidate.toUpperCase();
  if (
    normalized === "GOALKEEPER" ||
    normalized === "DEFENDER" ||
    normalized === "MIDFIELDER" ||
    normalized === "FORWARD"
  ) {
    return normalized;
  }
  return undefined;
}

export default async function PlayersPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const position = parsePosition(resolvedSearchParams?.position);
  const query =
    typeof resolvedSearchParams?.q === "string"
      ? resolvedSearchParams?.q
      : undefined;

  let players: Player[] = [];
  let fetchError: Error | null = null;

  try {
    players = await fetchPlayers({ position, q: query });
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load players"
          message={fetchError.message}
          action={
            <Link
              href="/players"
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
      <PlayersFilterBar />
      {players.length === 0 ? (
        <PlayersEmptyState />
      ) : (
        <PlayersList players={players} />
      )}
    </div>
  );
}


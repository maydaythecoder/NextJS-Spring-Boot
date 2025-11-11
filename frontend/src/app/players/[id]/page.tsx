import Link from "next/link";
import { ErrorState, PlayerDetailCard } from "@/components";
import { fetchPlayerById } from "@/lib";

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let player = null;
  let fetchError: Error | null = null;

  try {
    player = await fetchPlayerById(id);
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load player profile"
          message={fetchError.message}
          action={
            <Link
              href="/players"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to players
            </Link>
          }
        />
      </div>
    );
  }

  if (!player) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Player not found"
          message="We couldn’t locate the requested player. They may have moved clubs or been removed."
          action={
            <Link
              href="/players"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to players
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PlayerDetailCard player={player} />
    </div>
  );
}


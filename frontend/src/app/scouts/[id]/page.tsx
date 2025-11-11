import Link from "next/link";
import { ErrorState, ScoutDetailCard } from "@/components";
import { fetchScoutById, fetchScoutWatchlist, type Player } from "@/lib";

export default async function ScoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let scout = null;
  let watchlist: Player[] = [];
  let fetchError: Error | null = null;

  try {
    scout = await fetchScoutById(id);
    watchlist = scout ? await fetchScoutWatchlist(id) : [];
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load scout dossier"
          message={fetchError.message}
          action={
            <Link
              href="/scouts"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to scouts
            </Link>
          }
        />
      </div>
    );
  }

  if (!scout) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Scout not found"
          message="It looks like this scout profile no longer exists."
          action={
            <Link
              href="/scouts"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to scouts
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <ScoutDetailCard scout={scout} watchlist={watchlist} />
    </div>
  );
}


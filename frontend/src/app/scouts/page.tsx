import Link from "next/link";
import { ErrorState, ScoutsEmptyState, ScoutsList } from "@/components";
import { fetchScouts, type Scout } from "@/lib";

export default async function ScoutsPage() {
  let scouts: Scout[] = [];
  let fetchError: Error | null = null;

  try {
    scouts = await fetchScouts();
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load scouts"
          message={fetchError.message}
          action={
            <Link
              href="/scouts"
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
      {scouts.length === 0 ? <ScoutsEmptyState /> : <ScoutsList scouts={scouts} />}
    </div>
  );
}


import { ScoutDetailSkeleton } from "@/components";

export default function LoadingScoutDetail() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <ScoutDetailSkeleton />
    </div>
  );
}


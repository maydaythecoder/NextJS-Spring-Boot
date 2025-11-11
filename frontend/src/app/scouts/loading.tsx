import { ScoutsListSkeleton } from "@/components";

export default function LoadingScoutsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <ScoutsListSkeleton />
    </div>
  );
}


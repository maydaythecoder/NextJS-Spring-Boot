import { PlayerDetailSkeleton } from "@/components";

export default function LoadingPlayerDetail() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PlayerDetailSkeleton />
    </div>
  );
}


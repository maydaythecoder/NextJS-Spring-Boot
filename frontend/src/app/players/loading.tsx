import { PlayersListSkeleton } from "@/components";

export default function LoadingPlayersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <PlayersListSkeleton />
    </div>
  );
}


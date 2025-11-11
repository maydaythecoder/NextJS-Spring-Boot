import type { Player } from "@/lib";
import { PlayerCard } from "./PlayerCard";

export const PlayersList = ({ players }: { players: Player[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};


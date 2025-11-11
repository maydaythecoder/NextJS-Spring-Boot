import { TransferCard } from "./TransferCard";
import type { TransferListProps } from "@/lib/types/transfers";


export const TransferList = ({
  transfers,
  players,
  teams,
}: TransferListProps) => {
  const playerDictionary = new Map(players.map((player) => [player.id, player]));
  const teamDictionary = new Map(teams.map((team) => [team.id, team]));

  if (transfers.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-inner">
        <div className="mx-auto max-w-xl space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            No transfer requests yet
          </h2>
          <p className="text-sm leading-6 text-slate-500">
            Use the form to submit new transfer proposals. Requests will appear
            here for approval workflows.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {transfers.map((transfer) => {
        const player = playerDictionary.get(transfer.playerId);
        const fromTeam = transfer.fromTeamId
          ? teamDictionary.get(transfer.fromTeamId)
          : undefined;
        const toTeam = teamDictionary.get(transfer.toTeamId);
        return (
          <TransferCard
            key={transfer.id}
            transfer={transfer}
            playerName={player?.name ?? transfer.playerId}
            fromTeamName={fromTeam?.name}
            toTeamName={toTeam?.name ?? transfer.toTeamId}
          />
        );
      })}
    </div>
  );
};


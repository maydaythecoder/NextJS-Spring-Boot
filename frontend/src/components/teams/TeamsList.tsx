import type { Team } from "@/lib";
import { TeamCard } from "./TeamCard";

export const TeamsList = ({ teams }: { teams: Team[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};


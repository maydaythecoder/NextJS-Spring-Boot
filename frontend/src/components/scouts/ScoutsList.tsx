import type { Scout } from "@/lib";
import { ScoutCard } from "./ScoutCard";

export const ScoutsList = ({ scouts }: { scouts: Scout[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {scouts.map((scout) => (
        <ScoutCard key={scout.id} scout={scout} />
      ))}
    </div>
  );
};


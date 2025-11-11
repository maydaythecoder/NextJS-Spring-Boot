export type Position = "GOALKEEPER" | "DEFENDER" | "MIDFIELDER" | "FORWARD";

export type PlayerStats = Record<string, PlayerStatValue>;

export interface PlayerStatValue {
  value: number;
}

export interface PlayerBase {
  name: string;
  position: Position;
  stats: PlayerStats;
}

export interface Player extends PlayerBase {
  id: string;
}

export type CreatePlayerPayload = Partial<Pick<Player, "id">> & PlayerBase;

export type UpdatePlayerPayload = PlayerBase;

export interface PlayerQuery {
  position?: Position;
  q?: string;
}


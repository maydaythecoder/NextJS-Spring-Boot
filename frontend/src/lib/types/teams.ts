import type { Player } from "./players";

export interface TeamBase {
  name: string;
  manager: string;
  playerIds: string[];
}

export interface Team extends TeamBase {
  id: string;
}

export type CreateTeamPayload = Partial<Pick<Team, "id">> & TeamBase;

export type UpdateTeamPayload = TeamBase;

export interface TeamWithPlayers extends Team {
  players: Player[];
}


import { Team } from "./teams";
import { Player } from "./players";

export type TransferStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface Transfer {
  id: string;
  playerId: string;
  fromTeamId?: string;
  toTeamId: string;
  requestedBy: string;
  notes?: string;
  resolutionNote?: string;
  status: TransferStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTransferPayload {
  playerId: string;
  fromTeamId?: string;
  toTeamId: string;
  requestedBy: string;
  notes?: string;
}

export interface TransferDecisionPayload {
  note?: string;
}

export interface TransferQuery {
  status?: TransferStatus;
}

export type TransferListProps = {
  transfers: Transfer[];
  players: Player[];
  teams: Team[];
};

export type TransferCreateFormProps = {
  players: Player[];
  teams: Team[];
};

export type TransferCardProps = {
  transfer: Transfer;
  playerName: string;
  fromTeamName?: string;
  toTeamName: string;
};
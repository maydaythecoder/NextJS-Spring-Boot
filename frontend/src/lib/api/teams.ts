import type {
  CreateTeamPayload,
  FetchOptions,
  Player,
  Team,
  TeamWithPlayers,
  UpdateTeamPayload,
} from "../types";
import {
  API_BASE_URL,
  buildUrl,
  handleResponse,
  withDefaults,
} from "./client";

export async function fetchTeams(options?: FetchOptions) {
  const response = await fetch(buildUrl("/teams"), {
    ...withDefaults(options),
  });
  return handleResponse<Team[]>(response);
}

export async function fetchTeamById(id: string, options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/teams/${id}`, {
    ...withDefaults(options),
  });
  if (response.status === 404) {
    return null;
  }
  return handleResponse<Team>(response);
}

export async function fetchTeamWithPlayers(
  id: string,
  options?: FetchOptions,
) {
  const [team, players] = await Promise.all([
    fetchTeamById(id, options),
    fetchTeamPlayers(id, options),
  ]);

  if (!team) {
    return null;
  }

  return {
    ...team,
    players,
  } satisfies TeamWithPlayers;
}

export async function fetchTeamPlayers(
  id: string,
  options?: FetchOptions,
) {
  const response = await fetch(`${API_BASE_URL}/teams/${id}/players`, {
    ...withDefaults(options),
  });
  return handleResponse<Player[]>(response);
}

export async function createTeam(payload: CreateTeamPayload) {
  const response = await fetch(`${API_BASE_URL}/teams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  return handleResponse<Team>(response);
}

export async function updateTeam(id: string, payload: UpdateTeamPayload) {
  const response = await fetch(`${API_BASE_URL}/teams/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  return handleResponse<Team>(response);
}

export async function deleteTeam(id: string) {
  const response = await fetch(`${API_BASE_URL}/teams/${id}`, {
    method: "DELETE",
    ...withDefaults(),
  });
  if (!response.ok) {
    const message = `Request failed with status ${response.status}`;
    throw new Error(message);
  }
}

export async function addPlayerToTeam(teamId: string, playerId: string) {
  const response = await fetch(
    `${API_BASE_URL}/teams/${teamId}/players/${playerId}`,
    {
      method: "POST",
      ...withDefaults(),
    },
  );
  return handleResponse<Team>(response);
}

export async function removePlayerFromTeam(teamId: string, playerId: string) {
  const response = await fetch(
    `${API_BASE_URL}/teams/${teamId}/players/${playerId}`,
    {
      method: "DELETE",
      ...withDefaults(),
    },
  );
  return handleResponse<Team>(response);
}


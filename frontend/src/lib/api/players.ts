import type {
  CreatePlayerPayload,
  FetchOptions,
  Player,
  PlayerQuery,
  UpdatePlayerPayload,
} from "../types";
import {
  API_BASE_URL,
  buildUrl,
  handleResponse,
  withDefaults,
} from "./client";

export async function fetchPlayers(
  filters?: PlayerQuery,
  options?: FetchOptions,
) {
  const url = buildUrl("/players", {
    position: filters?.position,
    q: filters?.q,
  });
  const response = await fetch(url, {
    ...withDefaults(options),
  });
  return handleResponse<Player[]>(response);
}

export async function fetchPlayerById(id: string, options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/players/${id}`, {
    ...withDefaults(options),
  });
  if (response.status === 404) {
    return null;
  }
  return handleResponse<Player>(response);
}

export async function createPlayer(payload: CreatePlayerPayload) {
  const response = await fetch(`${API_BASE_URL}/players`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  return handleResponse<Player>(response);
}

export async function updatePlayer(
  id: string,
  payload: UpdatePlayerPayload,
) {
  const response = await fetch(`${API_BASE_URL}/players/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  return handleResponse<Player>(response);
}

export async function deletePlayer(id: string) {
  const response = await fetch(`${API_BASE_URL}/players/${id}`, {
    method: "DELETE",
    ...withDefaults(),
  });
  if (!response.ok) {
    const message = `Request failed with status ${response.status}`;
    throw new Error(message);
  }
}


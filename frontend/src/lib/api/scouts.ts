import type {
  CreateScoutPayload,
  FetchOptions,
  Player,
  Scout,
  UpdateScoutPayload,
} from "../types";
import {
  API_BASE_URL,
  buildUrl,
  handleResponse,
  withDefaults,
} from "./client";

export async function fetchScouts(options?: FetchOptions) {
  const response = await fetch(buildUrl("/scouts"), {
    ...withDefaults(options),
  });
  return handleResponse<Scout[]>(response);
}

export async function fetchScoutById(id: string, options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/scouts/${id}`, {
    ...withDefaults(options),
  });
  if (response.status === 404) {
    return null;
  }
  return handleResponse<Scout>(response);
}

export async function fetchScoutWatchlist(
  id: string,
  options?: FetchOptions,
) {
  const response = await fetch(`${API_BASE_URL}/scouts/${id}/watchlist`, {
    ...withDefaults(options),
  });
  return handleResponse<Player[]>(response);
}

export async function createScout(payload: CreateScoutPayload) {
  const response = await fetch(`${API_BASE_URL}/scouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  return handleResponse<Scout>(response);
}

export async function updateScout(id: string, payload: UpdateScoutPayload) {
  const response = await fetch(`${API_BASE_URL}/scouts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  return handleResponse<Scout>(response);
}

export async function deleteScout(id: string) {
  const response = await fetch(`${API_BASE_URL}/scouts/${id}`, {
    method: "DELETE",
    ...withDefaults(),
  });
  if (!response.ok) {
    const message = `Request failed with status ${response.status}`;
    throw new Error(message);
  }
}

export async function addPlayerToScoutWatchlist(
  scoutId: string,
  playerId: string,
) {
  const response = await fetch(
    `${API_BASE_URL}/scouts/${scoutId}/watchlist/${playerId}`,
    {
      method: "POST",
      ...withDefaults(),
    },
  );
  return handleResponse<Scout>(response);
}

export async function removePlayerFromScoutWatchlist(
  scoutId: string,
  playerId: string,
) {
  const response = await fetch(
    `${API_BASE_URL}/scouts/${scoutId}/watchlist/${playerId}`,
    {
      method: "DELETE",
      ...withDefaults(),
    },
  );
  return handleResponse<Scout>(response);
}


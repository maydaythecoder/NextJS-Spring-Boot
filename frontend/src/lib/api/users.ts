import type { CreateUserPayload, UserSummary, FetchOptions } from "../types";
import { API_BASE_URL, handleResponse, withDefaults } from "./client";

export async function fetchUsers(options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    ...withDefaults(options),
  });
  return handleResponse<UserSummary[]>(response);
}

export async function fetchUserById(id: string, options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    ...withDefaults(options),
  });

  if (response.status === 404) {
    return null;
  }

  return handleResponse<UserSummary>(response);
}

export async function createUser(payload: CreateUserPayload) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  if (response.status === 409) {
    const message = "Email already in use.";
    throw new Error(message);
  }
  await handleResponse<UserSummary>(response);
}


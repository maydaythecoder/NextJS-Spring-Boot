import type { CreateUserPayload, UserSummary, FetchOptions } from "../types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const message = `Request failed with status ${response.status}`;
    throw new Error(message);
  }
  return (await response.json()) as T;
}

export async function fetchUsers(options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    ...options,
    next: { revalidate: 0 },
  });
  return handleResponse<UserSummary[]>(response);
}

export async function fetchUserById(id: string, options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    ...options,
    next: { revalidate: 0 },
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
  });
  if (response.status === 409) {
    const message = "Email already in use.";
    throw new Error(message);
  }
  await handleResponse<UserSummary>(response);
}


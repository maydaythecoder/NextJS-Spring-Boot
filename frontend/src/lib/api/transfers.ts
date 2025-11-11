import type {
  CreateTransferPayload,
  FetchOptions,
  Transfer,
  TransferDecisionPayload,
  TransferQuery,
} from "../types";
import {
  API_BASE_URL,
  buildUrl,
  handleResponse,
  withDefaults,
} from "./client";

export async function fetchTransfers(
  query?: TransferQuery,
  options?: FetchOptions,
) {
  const response = await fetch(
    buildUrl("/transfers", { status: query?.status }),
    {
      ...withDefaults(options),
    },
  );
  return handleResponse<Transfer[]>(response);
}

export async function fetchTransferById(id: string, options?: FetchOptions) {
  const response = await fetch(`${API_BASE_URL}/transfers/${id}`, {
    ...withDefaults(options),
  });
  if (response.status === 404) {
    return null;
  }
  return handleResponse<Transfer>(response);
}

export async function requestTransfer(payload: CreateTransferPayload) {
  const response = await fetch(`${API_BASE_URL}/transfers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    ...withDefaults(),
  });
  return handleResponse<Transfer>(response);
}

export async function approveTransfer(
  id: string,
  payload?: TransferDecisionPayload,
) {
  const response = await fetch(`${API_BASE_URL}/transfers/${id}/approve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload ? JSON.stringify(payload) : undefined,
    ...withDefaults(),
  });
  return handleResponse<Transfer>(response);
}

export async function rejectTransfer(
  id: string,
  payload?: TransferDecisionPayload,
) {
  const response = await fetch(`${API_BASE_URL}/transfers/${id}/reject`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload ? JSON.stringify(payload) : undefined,
    ...withDefaults(),
  });
  return handleResponse<Transfer>(response);
}


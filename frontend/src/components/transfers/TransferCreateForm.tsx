"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { CreateTransferPayload } from "@/lib";
import { requestTransfer } from "@/lib";
import type { TransferCreateFormProps } from "@/lib/types/transfers";

const DEFAULT_REQUESTER = "Sporting Director";

export const TransferCreateForm = ({
  players,
  teams,
}: TransferCreateFormProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<CreateTransferPayload>({
    playerId: players[0]?.id ?? "",
    toTeamId: teams[0]?.id ?? "",
    requestedBy: DEFAULT_REQUESTER,
    fromTeamId: "",
    notes: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(async () => {
      await requestTransfer({
        ...formState,
        fromTeamId: formState.fromTeamId || undefined,
        notes: formState.notes?.trim() ? formState.notes.trim() : undefined,
      });
      router.refresh();
      setFormState((previous) => ({
        ...previous,
        notes: "",
      }));
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        Create transfer request
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Player
          <select
            value={formState.playerId}
            onChange={(event) =>
              setFormState((previous) => ({
                ...previous,
                playerId: event.target.value,
              }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            required
          >
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name} · {player.position}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Destination team
          <select
            value={formState.toTeamId}
            onChange={(event) =>
              setFormState((previous) => ({
                ...previous,
                toTeamId: event.target.value,
              }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            required
          >
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Origin team (optional)
          <select
            value={formState.fromTeamId ?? ""}
            onChange={(event) =>
              setFormState((previous) => ({
                ...previous,
                fromTeamId: event.target.value,
              }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          >
            <option value="">Unassigned</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Requested by
          <input
            value={formState.requestedBy}
            onChange={(event) =>
              setFormState((previous) => ({
                ...previous,
                requestedBy: event.target.value,
              }))
            }
            placeholder="Requester name"
            required
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        Notes (optional)
        <textarea
          value={formState.notes ?? ""}
          onChange={(event) =>
            setFormState((previous) => ({
              ...previous,
              notes: event.target.value,
            }))
          }
          rows={3}
          placeholder="Context for the transfer, contract situation, etc."
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending || !formState.playerId || !formState.toTeamId}
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isPending ? "Submitting..." : "Submit request"}
        </button>
      </div>
    </form>
  );
};


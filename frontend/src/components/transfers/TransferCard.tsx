"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  approveTransfer,
  rejectTransfer,
  type TransferDecisionPayload,
} from "@/lib";
import { TransferStatusBadge } from "./TransferStatusBadge";
import type { TransferCardProps } from "@/lib/types/transfers";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export const TransferCard = ({
  transfer,
  playerName,
  fromTeamName,
  toTeamName,
}: TransferCardProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const runAction = (action: () => Promise<unknown>) => {
    startTransition(async () => {
      await action();
      router.refresh();
    });
  };

  const handleApprove = () => {
    runAction(() => approveTransfer(transfer.id));
  };

  const handleReject = () => {
    const note = window.prompt("Add rejection note (optional)");
    const payload: TransferDecisionPayload | undefined = note
      ? { note }
      : undefined;
    runAction(() => rejectTransfer(transfer.id, payload));
  };

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <TransferStatusBadge status={transfer.status} />
          <span className="text-xs font-medium text-slate-400">
            #{transfer.id}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {playerName}
          </h3>
          <p className="text-sm text-slate-500">
            {fromTeamName ? `From ${fromTeamName}` : "Unassigned"} → {toTeamName}
          </p>
        </div>
        <dl className="space-y-1 text-xs text-slate-500">
          <div className="flex justify-between">
            <dt className="font-semibold uppercase tracking-wide">Requested</dt>
            <dd>{formatDate(transfer.createdAt)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold uppercase tracking-wide">Updated</dt>
            <dd>{formatDate(transfer.updatedAt)}</dd>
          </div>
        </dl>
        {transfer.notes && (
          <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            {transfer.notes}
          </p>
        )}
        {transfer.resolutionNote && transfer.status !== "PENDING" && (
          <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Resolution: {transfer.resolutionNote}
          </p>
        )}
      </div>
      {transfer.status === "PENDING" && (
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            disabled={isPending}
            onClick={handleApprove}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:bg-emerald-400"
          >
            Approve
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={handleReject}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-rose-400 px-3 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            Reject
          </button>
        </div>
      )}
    </article>
  );
};


import { TransferStatus } from "../types/transfers";

export const STATUS_STYLES: Record<TransferStatus, string> = {
    PENDING: "bg-amber-500/10 text-amber-500 ring-amber-500/30",
    APPROVED: "bg-emerald-500/10 text-emerald-500 ring-emerald-500/30",
    REJECTED: "bg-rose-500/10 text-rose-500 ring-rose-500/30",
  };
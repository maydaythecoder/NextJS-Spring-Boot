"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { TransferStatus } from "@/lib";

const STATUSES: (TransferStatus | "ALL")[] = ["ALL", "PENDING", "APPROVED", "REJECTED"];

export const TransferFilterBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeStatus = (searchParams.get("status") ?? "ALL").toUpperCase();

  const onSelect = (status: TransferStatus | "ALL") => {
    const params = new URLSearchParams(searchParams);
    if (status === "ALL") {
      params.delete("status");
    } else {
      params.set("status", status);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      {STATUSES.map((status) => {
        const isActive = activeStatus === status;
        return (
          <button
            key={status}
            type="button"
            onClick={() => onSelect(status)}
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? "border-slate-900 bg-slate-900 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            {status === "ALL" ? "All statuses" : status.toLowerCase()}
          </button>
        );
      })}
    </div>
  );
};


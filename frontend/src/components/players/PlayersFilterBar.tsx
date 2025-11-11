"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Position } from "@/lib";

const POSITIONS: (Position | "ALL")[] = [
  "ALL",
  "GOALKEEPER",
  "DEFENDER",
  "MIDFIELDER",
  "FORWARD",
];

export const PlayersFilterBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const activePosition = (searchParams.get("position") ?? "ALL").toUpperCase();

  const createQueryString = useMemo(
    () => (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      return params.toString();
    },
    [searchParams],
  );

  const applyPosition = (value: Position | "ALL") => {
    const queryString = createQueryString({
      position: value === "ALL" ? null : value,
    });
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const applySearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    const queryString = createQueryString({
      q: trimmed.length === 0 ? null : trimmed,
    });
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const resetFilters = () => {
    router.push(pathname);
    setQuery("");
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {POSITIONS.map((position) => {
            const isActive = activePosition === position;
            return (
              <button
                key={position}
                type="button"
                onClick={() => applyPosition(position)}
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {position === "ALL" ? "All roles" : position}
              </button>
            );
          })}
        </div>
        <form
          onSubmit={applySearch}
          className="flex w-full max-w-sm items-center gap-2"
        >
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search players..."
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-slate-900/10 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Reset
          </button>
        </form>
      </div>
    </section>
  );
};


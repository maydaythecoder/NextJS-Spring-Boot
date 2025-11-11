"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components";
import type { ScoutsErrorProps } from "@/lib";

export default function ScoutsError({ error, reset }: ScoutsErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <ErrorState
        title="Unable to load scouts"
        message="We ran into an issue fetching scout dossiers. Please try again."
        action={
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Retry
          </button>
        }
      />
    </div>
  );
}


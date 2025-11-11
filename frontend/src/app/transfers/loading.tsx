import { TransferListSkeleton } from "@/components";

export default function LoadingTransfersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-12 w-64 animate-pulse rounded-full bg-slate-200" />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
        <TransferListSkeleton />
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-5 w-48 animate-pulse rounded-md bg-slate-200" />
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-11 w-full animate-pulse rounded-lg bg-slate-200"
            />
          ))}
          <div className="h-10 w-32 animate-pulse rounded-lg bg-slate-200" />
        </div>
      </div>
    </div>
  );
}


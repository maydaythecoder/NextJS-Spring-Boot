import type { ErrorStateProps } from "@/lib";

export function ErrorState({ title, message, action }: ErrorStateProps) {
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-8 text-rose-900">
      {title ? (
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      ) : null}
      <p className="mt-2 text-sm leading-6">{message}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}


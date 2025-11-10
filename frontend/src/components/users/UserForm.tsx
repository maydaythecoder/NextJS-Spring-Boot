"use client";
import { ErrorState } from "../common";
import { useCreateUserForm } from "@/lib";

export const UserForm = () => {
  const {
    formState,
    fieldUpdater,
    handleSubmit,
    isSubmitting,
    error,
    dismissError,
    handleCancel,
  } = useCreateUserForm();
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={fieldUpdater("name")}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              placeholder="Jane Cooper"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={fieldUpdater("email")}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              placeholder="jane.cooper@example.com"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
          >
            {isSubmitting ? "Creating…" : "Create user"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
          >
            Cancel
          </button>
        </div>
        {error ? (
          <ErrorState
            title="Unable to save user"
            message={error}
            action={
              <button
                type="button"
                onClick={dismissError}
                className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-500 focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
              >
                Dismiss
              </button>
            }
          />
        ) : null}
      </form>
    </>
  );
};


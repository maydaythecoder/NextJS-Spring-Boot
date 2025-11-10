import Link from "next/link";
import { UserSvg } from "@/lib";

export function UsersEmptyState() {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-linear-to-b from-white to-slate-50 p-12 text-center">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
        <div className="rounded-full bg-slate-100 p-3">
            <UserSvg />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">
            Invite your first teammate
          </h2>
          <p className="text-sm leading-6 text-slate-500">
            Users created via the Spring Boot API populate this list. Get
            started by creating a profile so you can manage your team in one
            place.
          </p>
        </div>
        <Link
          href="/users/new"
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Create user
        </Link>
      </div>
    </section>
  );
}


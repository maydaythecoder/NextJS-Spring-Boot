import Link from "next/link";
import type { UserDetailCardProps } from "@/lib";

export function UserDetailCard({ user }: UserDetailCardProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Profile
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            {user.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Record synced from the Spring Boot API.
          </p>
        </div>
        <Link
          href="/users"
          className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Back to directory
        </Link>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <dl className="divide-y divide-slate-100">
          <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
            <dt className="text-sm font-medium leading-6 text-slate-500">
              Full name
            </dt>
            <dd className="md:col-span-2">
              <p className="text-base font-semibold text-slate-900">
                {user.name}
              </p>
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
            <dt className="text-sm font-medium leading-6 text-slate-500">
              Email address
            </dt>
            <dd className="md:col-span-2">
              <p className="text-base text-slate-900">{user.email}</p>
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
            <dt className="text-sm font-medium leading-6 text-slate-500">
              User ID
            </dt>
            <dd className="md:col-span-2">
              <p className="text-base text-slate-900">{user.id}</p>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}


import Link from "next/link";
import { UserCard } from "./UserCard";
import type { UsersListProps } from "@/lib";

export function UsersList({ users }: UsersListProps) {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Directory
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Team Directory
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Browse every user sourced from the Spring Boot API.
          </p>
        </div>
        <Link
          href="/users/new"
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Add User
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}


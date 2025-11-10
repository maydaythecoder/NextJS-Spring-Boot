import Link from "next/link";
import {getInitials, UserCardProps } from "@/lib";

export function UserCard({ user }: UserCardProps) {


  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-700">
          {getInitials(user.name)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{user.name}</h2>
          <p className="text-sm text-slate-500">{user.email}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>ID #{user.id}</span>
        <Link
          href={`/users/${user.id}`}
          className="inline-flex items-center font-semibold text-slate-900 underline-offset-2 hover:underline"
        >
          View profile
        </Link>
      </div>
    </article>
  );
}

export default UserCard;
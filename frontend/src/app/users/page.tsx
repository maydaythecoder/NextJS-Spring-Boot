import Link from "next/link";
import { UsersList, UsersEmptyState, ErrorState } from "@/components";
import { fetchUsers, UserSummary } from "@/lib";

export default async function UsersPage() {
  let users: UserSummary[] = [];
  let fetchError: Error | null = null;

  try {
    users = await fetchUsers();
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load users"
          message={fetchError.message}
          action={
            <Link
              href="/users"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Retry
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {users.length === 0 ? <UsersEmptyState /> : <UsersList users={users} />}
    </div>
  );
}

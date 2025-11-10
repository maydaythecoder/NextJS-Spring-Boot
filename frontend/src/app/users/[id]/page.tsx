import Link from "next/link";
import { fetchUserById, UserDetailPageProps } from "@/lib";
import { UserDetailCard, ErrorState } from "@/components";

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = params;

  let user = null;
  let fetchError: Error | null = null;

  try {
    user = await fetchUserById(id);
  } catch (error) {
    fetchError = error as Error;
  }

  if (fetchError) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="Unable to load profile"
          message={fetchError.message}
          action={
            <Link
              href="/users"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to directory
            </Link>
          }
        />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <ErrorState
          title="User not found"
          message="We couldn’t locate the requested user. It may have been removed."
          action={
            <Link
              href="/users"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Back to directory
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <UserDetailCard user={user} />
    </div>
  );
}

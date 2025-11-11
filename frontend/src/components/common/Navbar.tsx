import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Spring Boot + Next.js
        </Link>
        <nav className="flex flex-wrap items-center gap-3">
          <Link
            href="/users"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Users
          </Link>
          <Link
            href="/players"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Players
          </Link>
          <Link
            href="/teams"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Teams
          </Link>
          <Link
            href="/scouts"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Scouts
          </Link>
          <Link
            href="/transfers"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Transfers
          </Link>
          <Link
            href="/users/new"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Add user
          </Link>
        </nav>
      </div>
    </header>
  );
};
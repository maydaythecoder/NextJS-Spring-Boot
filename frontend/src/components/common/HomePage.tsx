import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="relative max-w-2xl space-y-6 text-white">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-100">
        Spring Boot ↔ Next.js
      </div>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Player CRM, scouting, and transfers in one workspace
      </h1>
      <p className="text-base leading-7 text-slate-200">
        Launch the in-memory Spring Boot API, hydrate it with JSON squads and
        scout dossiers, and steer everything from this Next.js interface—users,
        rosters, watchlists, and the transfer portal.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/players"
          className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Review players
        </Link>
        <Link
          href="/teams"
          className="inline-flex items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/50 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Manage teams
        </Link>
        <Link
          href="/scouts"
          className="inline-flex items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/50 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Scout network
        </Link>
        <Link
          href="/transfers"
          className="inline-flex items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/50 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Transfer portal
        </Link>
      </div>
    </div>
  );
};

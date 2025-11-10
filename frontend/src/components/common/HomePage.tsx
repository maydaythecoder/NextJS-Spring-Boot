import Link from 'next/link'

export const HomePage = () => {
  return (
    <div className="relative max-w-xl space-y-6 text-white">
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-100">
      Spring Boot ↔ Next.js
    </div>
    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
      Manage your team with a modern full-stack starter
    </h1>
    <p className="text-base leading-7 text-slate-200">
      This UI connects directly to the Spring Boot user API, showcasing
      how server components, client components, and Tailwind CSS play
      together inside Next.js App Router.
    </p>
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/users"
        className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        Explore directory
      </Link>
      <Link
        href="/users/new"
        className="inline-flex items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/50 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        Create user
      </Link>
    </div>
  </div>
  )
}


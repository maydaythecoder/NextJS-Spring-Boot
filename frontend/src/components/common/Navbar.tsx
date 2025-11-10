import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-slate-900"
      >
        Spring Boot + Next.js
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          href="/users"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          Users
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
  )
}
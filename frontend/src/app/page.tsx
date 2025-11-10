import { HomePage } from "@/components";
export default function App() {
  return (
    <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-4xl relative overflow-hidden border border-white/10 bg-white/5 px-8 py-16 shadow-2xl sm:px-16">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-linear-to-br from-slate-900/0 via-slate-900/20 to-slate-900/60 sm:block" />
          <HomePage />
        </div>
      </div>
    </div>
  );
}

import { Sparkles, Clock } from "lucide-react"

export function HeroSection() {
  // Server-side rendered dynamic dates
  const today = new Date()

  // Format: "December 2025"
  const currentMonthYear = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  // Format: "December 5, 2025"
  const fullDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <section className="relative overflow-hidden py-3 md:py-5">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 text-center">
        {/*
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-500">
          <Sparkles className="h-4 w-4" />
          <span>Updated daily</span>
        </div>
        */}

        <h1 className="mx-auto max-w-5xl text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          All Forge Codes Roblox{" "}
          <span className="text-amber-500">({currentMonthYear})</span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-gray-400 md:text-xl">
          The #1 source to find <span className="font-semibold text-amber-400">every code in the forge</span>.
          We track <span className="font-semibold text-emerald-400">new code in the forge</span>,{" "}
          <span className="font-semibold text-purple-400">redeem code the forge roblox</span>, and provide
          the best <span className="font-semibold text-blue-400">race tier list</span>.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>
            Last Checked: <span className="font-medium text-emerald-500">Today</span>, {fullDate}
          </span>
        </div>

        {/* Pro Tip Banner */}
        <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
          <p className="text-sm text-amber-200">
            <span className="font-bold text-amber-500">⚠️ PRO TIP:</span> The code{" "}
            <code className="rounded bg-gray-800 px-2 py-0.5 font-mono text-emerald-400">PEAK!</code> gives 10 Rerolls!
            Use it to try and get the <strong className="text-amber-300">Dwarf</strong> race if you want to mine
            Demonite ore fast!
          </p>
        </div>
      </div>
    </section>
  )
}

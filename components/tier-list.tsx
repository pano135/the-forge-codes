import { Crown, Star, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Accurate race data
const tiers = [
  {
    tier: "S",
    label: "S-Tier (Godly)",
    color: "gold",
    icon: Crown,
    races: ["Demon", "Angel", "Dwarf"],
    description:
      "The absolute meta. 'Demon' deals massive fire damage. 'Angel' has infinite stamina. 'Dwarf' is the #1 Mining Race (15% Speed Buff).",
  },
  {
    tier: "A",
    label: "A-Tier (Strong)",
    color: "purple",
    icon: Star,
    races: ["Dragonborn", "Elf", "Golem"],
    description: "Great choices. 'Elf' gives +7% Luck (essential for crafting). 'Dragonborn' is the best tank.",
  },
  {
    tier: "B",
    label: "B-Tier (Good)",
    color: "blue",
    icon: Shield,
    races: ["Orc", "Zombie", "Goblin"],
    description: "Solid for beginners. 'Goblin' gives shop discounts. 'Orc' has pure physical damage.",
  },
]

export function TierList() {
  return (
    <section className="py-12 md:py-16" id="tier-list">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Best Race <span className="text-amber-500">Tier List</span> & Reroll Guide
          </h2>
          <p className="mt-2 text-gray-400">
            Before you use your <strong className="text-amber-400">code redeem the forge roblox</strong>,
            check which race is the meta. Valid for the latest update.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon

            // Color configurations - S-Tier gets special golden treatment
            const borderColor =
              tier.color === "gold"
                ? "border-yellow-500"
                : tier.color === "purple"
                  ? "border-purple-500"
                  : "border-blue-500"

            const bgGlow =
              tier.color === "gold"
                ? "shadow-yellow-500/30"
                : tier.color === "purple"
                  ? "shadow-purple-500/20"
                  : "shadow-blue-500/20"

            const textColor =
              tier.color === "gold"
                ? "text-yellow-500"
                : tier.color === "purple"
                  ? "text-purple-500"
                  : "text-blue-500"

            const badgeBg =
              tier.color === "gold"
                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                : tier.color === "purple"
                  ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                  : "bg-blue-500/20 text-blue-400 border-blue-500/30"

            return (
              <Card
                key={tier.tier}
                className={`border-2 ${borderColor} bg-gray-900/50 shadow-lg ${bgGlow} ${
                  tier.color === "gold" ? "ring-1 ring-yellow-500/20" : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon className={`h-6 w-6 ${textColor}`} />
                    <span className={textColor}>{tier.label}</span>
                    {tier.color === "gold" && (
                      <span className="ml-auto text-xs font-normal text-yellow-500/70">★ Best</span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {tier.races.map((race) => (
                      <span key={race} className={`rounded-full border px-3 py-1 text-sm font-medium ${badgeBg}`}>
                        {race}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">{tier.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Copy, Check, Gift, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Code {
  code: string
  reward: string
  status: "active" | "expired"
}

// Real game data - updated regularly
const codes: Code[] = [
  { code: "300K", reward: "5 Race Rerolls", status: "active" },
  { code: "Summer", reward: "500 Gems", status: "active" },
  { code: "Forging", reward: "250 Gems", status: "active" },
  { code: "Operations", reward: "5 Race Rerolls", status: "active" },
  { code: "Sub2Caleb", reward: "100 Gems", status: "active" },
  { code: "Demon", reward: "Demon Race Reroll", status: "expired" },
]

// Dynamic month for display
const currentMonth = new Date().toLocaleString("en-US", { month: "long" })

export function CodesTable() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 1500)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const activeCodes = codes.filter((c) => c.status === "active")
  const expiredCodes = codes.filter((c) => c.status === "expired")

  return (
    <section className="py-12 md:py-16" id="codes">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-center gap-3">
          <Gift className="h-8 w-8 text-emerald-500" />
          <h2 className="text-2xl font-bold md:text-3xl">
            Working Codes in The Forge ({currentMonth})
          </h2>
        </div>

        <p className="mb-8 text-gray-400">
          Below is the full list of <strong className="text-amber-400">all codes in the forge roblox</strong>.
          Click copy to <strong className="text-emerald-400">redeem code the forge</strong> instantly for Gems
          and Rerolls.
        </p>

        <Badge className="mb-6 bg-emerald-500/20 text-emerald-400">
          {activeCodes.length} Available
        </Badge>

        {/* Active Codes Table */}
        {activeCodes.length > 0 ? (
          <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-900">
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-400 md:px-6">
                      Code
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-400 md:px-6">
                      Rewards
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-400 md:px-6">
                      Status
                    </th>
                    <th className="px-4 py-4 text-right text-sm font-semibold text-gray-400 md:px-6">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeCodes.map((item) => (
                    <tr
                      key={item.code}
                      className="border-b border-gray-800/50 transition-colors hover:bg-gray-800/30"
                    >
                      <td className="px-4 py-4 md:px-6">
                        <code className="rounded bg-gray-800 px-3 py-1.5 font-mono text-sm font-semibold text-amber-400 md:text-base">
                          {item.code}
                        </code>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-300 md:px-6 md:text-base">
                        {item.reward}
                      </td>
                      <td className="px-4 py-4 md:px-6">
                        <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">
                          Active
                        </Badge>
                      </td>
                      <td className="px-4 py-4 text-right md:px-6">
                        <Button
                          size="sm"
                          onClick={() => handleCopy(item.code)}
                          className={`min-w-[90px] transition-all ${
                            copiedCode === item.code
                              ? "bg-emerald-600 hover:bg-emerald-600"
                              : "bg-amber-600 hover:bg-amber-700"
                          }`}
                        >
                          {copiedCode === item.code ? (
                            <>
                              <Check className="mr-1 h-4 w-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1 h-4 w-4" />
                              Copy
                            </>
                          )}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 bg-gray-900/50 p-12 text-center">
            <AlertCircle className="mb-4 h-12 w-12 text-gray-600" />
            <p className="text-lg text-gray-400">
              No <strong className="text-amber-400">new code in the forge</strong> found today. Check back
              later!
            </p>
          </div>
        )}

        {/* Expired Codes */}
        {expiredCodes.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold text-gray-500">Expired Codes</h3>
            <div className="overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {expiredCodes.map((item) => (
                      <tr key={item.code} className="border-b border-gray-800/30 last:border-0">
                        <td className="px-4 py-3 md:px-6">
                          <code className="font-mono text-sm text-gray-600 line-through">{item.code}</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 md:px-6">{item.reward}</td>
                        <td className="px-4 py-3 md:px-6">
                          <Badge variant="outline" className="border-red-500/30 bg-red-500/10 text-red-500">
                            Expired
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

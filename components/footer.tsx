import { Flame, Heart } from "lucide-react"
import Link from "next/link"

// Dynamic year
const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-amber-500" />
            <span className="font-semibold">
              The Forge Codes <span className="text-amber-500">PRO</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-500">
              Home
            </Link>
            <Link href="#tier-list" className="hover:text-amber-500">
              Race Tier List
            </Link>
            <Link href="#wiki" className="hover:text-amber-500">
              Wiki & Recipes
            </Link>
          </div>

          <p className="flex items-center gap-1 text-sm text-gray-500">
            Made with <Heart className="h-4 w-4 text-red-500" /> for Roblox players
          </p>
        </div>

        {/* Tag Cloud for SEO */}
        <div className="mt-6 text-center text-xs text-gray-600">
          <p className="mb-2">
            Tags:{" "}
            <span className="text-gray-500">Code for the forge roblox</span>
            {" | "}
            <span className="text-gray-500">Codes for forge roblox</span>
            {" | "}
            <span className="text-gray-500">The forge redeem code</span>
            {" | "}
            <span className="text-gray-500">Roblox craft food</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-gray-600">
          <p>© {currentYear} The Forge Codes PRO. Not affiliated with Roblox.</p>
        </div>
      </div>
    </footer>
  )
}

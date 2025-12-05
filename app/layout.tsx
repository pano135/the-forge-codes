import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

// Dynamic date for SEO metadata
const currentMonthYear = new Date().toLocaleString("en-US", {
  month: "long",
  year: "numeric",
})

// SEO-optimized metadata for The Forge codes website
export const metadata: Metadata = {
  title: `The Forge Roblox Codes (${currentMonthYear}) - All Redeem Codes & Wiki`,
  description:
    "Looking for every code in The Forge? We list all forge codes roblox, new redeem codes, and provide a wiki for armor, pickaxes, and recipes. Updated daily for free gems and rerolls.",
  keywords: [
    "The forge roblox",
    "Roblox forge codes",
    "Code the forge roblox",
    "Redeem code the forge",
    "Every code in the forge",
    "All codes in the forge roblox",
    "New code in the forge",
    "The forge roblox armor",
    "The forge roblox pickaxe",
    "The forge calculator roblox",
    "Craft food roblox recipes",
  ],
  openGraph: {
    title: "The Forge Roblox Codes & Wiki - Redeem All New Codes",
    description:
      "Looking for every code in The Forge? We list all forge codes roblox, new redeem codes, and provide a wiki for armor, pickaxes, and recipes.",
    type: "website",
    siteName: "The Forge Codes PRO",
  },
  twitter: {
    card: "summary_large_image",
    title: `The Forge Roblox Codes (${currentMonthYear})`,
    description:
      "All working codes for The Forge Roblox. Updated daily with free gems and rerolls!",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
}

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the active codes for The Forge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The active codes are 300K, Summer, Forging, Operations, and Sub2Caleb. Use these codes to get free Race Rerolls and Gems!",
      },
    },
    {
      "@type": "Question",
      name: "How do I redeem codes in The Forge Roblox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To redeem code the forge roblox, click the Twitter icon on the side of your screen, enter the code in the text box, and click Redeem to receive your rewards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best race in The Forge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The S-Tier races are Demon (best for Damage), Dwarf (best for Mining), and Angel (best for Healing). These are the most sought-after races in the game.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find The Forge armor and pickaxe recipes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check our wiki guide for the forge roblox armor and the forge roblox pickaxe recipes. We cover all crafting recipes and optimal progression paths.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://app.pageview.app/js/script.js"
          data-domain="theforgecodes.pro"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

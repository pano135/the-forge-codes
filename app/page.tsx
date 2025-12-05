import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CodesTable } from "@/components/codes-table"
import { TierList } from "@/components/tier-list"
import { SeoContent } from "@/components/seo-content"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <CodesTable />
        <TierList />
        <SeoContent />
      </main>
      <Footer />
    </div>
  )
}

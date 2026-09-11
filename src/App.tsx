import { DemoBanner, SiteHeader } from "@/components/sections/site-header"
import { Hero } from "@/components/sections/hero"
import { Prestations } from "@/components/sections/prestations"
import { ZoneIntervention } from "@/components/sections/zone-intervention"
import { Devis } from "@/components/sections/devis"
import Footer from "@/components/ui/footer-04"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <SiteHeader />
      <main>
        <Hero />
        <Prestations />
        <ZoneIntervention />
        <Devis />
      </main>
      <Footer />
    </div>
  )
}

export default App

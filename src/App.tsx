import { AppelFinal } from "@/components/sections/appel-final"
import { Avis } from "@/components/sections/avis"
import { Chiffres } from "@/components/sections/chiffres"
import { Devis } from "@/components/sections/devis"
import { Etapes } from "@/components/sections/etapes"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Prestations } from "@/components/sections/prestations"
import {
  DemoBanner,
  MobileCallBar,
  SiteHeader,
  UrgencyBar,
} from "@/components/sections/site-header"
import { SiteFooter } from "@/components/sections/site-footer"
import { ZoneIntervention } from "@/components/sections/zone-intervention"

function App() {
  return (
    // pb-20 : place pour la barre d'appel fixe sur mobile
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <DemoBanner />
      <UrgencyBar />
      <SiteHeader />
      <main>
        <Hero />
        <Chiffres />
        <Prestations />
        <Etapes />
        <ZoneIntervention />
        <Avis />
        <AppelFinal />
        <Faq />
        <Devis />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  )
}

export default App

import { useSyncExternalStore } from "react"
import { MapPin } from "lucide-react"

import { LocationMap } from "@/components/ui/location-map"
import { cn } from "@/lib/utils"

const paliers = [
  {
    rayon: "0 – 10 km",
    delai: "Urgence 24h",
    detail: "Déplacement immédiat en astreinte, jour comme nuit.",
    tone: "primary",
  },
  {
    rayon: "10 – 25 km",
    delai: "Sous 48h",
    detail: "Créneau garanti sous deux jours ouvrés.",
    tone: "accent",
  },
  {
    rayon: "25 – 40 km",
    delai: "Sur planning",
    detail: "Regroupé avec les autres chantiers du secteur.",
    tone: "muted",
  },
  {
    rayon: "+ 40 km",
    delai: "Nous consulter",
    detail: "Étudié au cas par cas selon la nature du chantier.",
    tone: "muted",
  },
] as const

// La carte anime des tailles en pixels : on choisit celles qui tiennent dans
// l'écran (343 px de contenu utile sur un mobile de 375 px).
const DESKTOP_QUERY = "(min-width: 1024px)"
const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(DESKTOP_QUERY)
  media.addEventListener("change", onChange)
  return () => media.removeEventListener("change", onChange)
}
const useIsDesktop = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  )

export function ZoneIntervention() {
  const isDesktop = useIsDesktop()

  return (
    <section id="zone" className="scroll-mt-24 overflow-x-clip py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-highlight uppercase">
            Zone d'intervention
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight uppercase md:text-5xl">
            Plus c'est près, plus c'est rapide
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
            Le délai dépend de la distance depuis l'atelier. Au-delà de 40 km,
            on regarde ensemble ce qui est faisable.
          </p>

          <ul className="mt-8 space-y-3">
            {paliers.map((palier) => (
              <li
                key={palier.rayon}
                className={cn(
                  "flex items-center justify-between gap-4 rounded-xl border bg-card px-4 py-3.5",
                  palier.tone === "primary" && "border-primary/50",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full",
                      palier.tone === "primary" && "bg-primary/15 text-highlight",
                      palier.tone === "accent" && "bg-accent/15 text-accent",
                      palier.tone === "muted" && "bg-muted text-muted-foreground",
                    )}
                  >
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-xl leading-none font-bold">
                      {palier.rayon}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {palier.detail}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase",
                    palier.tone === "primary" && "bg-primary text-primary-foreground",
                    palier.tone === "accent" && "bg-accent text-accent-foreground",
                    palier.tone === "muted" && "border border-border text-muted-foreground",
                  )}
                >
                  {palier.delai}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Cercles de rayon, décoratifs : réservés au grand écran, où ils ont la place */}
            <div
              className="absolute -inset-16 -z-10 hidden rounded-full border border-dashed border-primary/20 lg:block"
              aria-hidden
            />
            <div
              className="absolute -inset-8 -z-10 hidden rounded-full border border-dashed border-primary/35 lg:block"
              aria-hidden
            />
            <LocationMap
              location="Atelier — secteur central"
              coordinates="Rayon d'astreinte : 10 km"
              defaultExpanded
              collapsedSize={isDesktop ? { width: 320, height: 180 } : { width: 260, height: 150 }}
              expandedSize={isDesktop ? { width: 460, height: 360 } : { width: 320, height: 260 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

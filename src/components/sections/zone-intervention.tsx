import { MapPin } from "lucide-react"

import { LocationMap } from "@/components/ui/location-map"
import { cn } from "@/lib/utils"

const paliers = [
  {
    rayon: "0 – 10 km",
    delai: "Urgence 24h",
    detail: "Déplacement immédiat en astreinte, jour comme nuit.",
    tone: "accent",
  },
  {
    rayon: "10 – 25 km",
    delai: "Sous 48h",
    detail: "Créneau garanti sous deux jours ouvrés.",
    tone: "primary",
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

export function ZoneIntervention() {
  return (
    <section
      id="zone"
      className="scroll-mt-24 border-y border-border bg-muted/40 py-16 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Zone d'intervention
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-wide md:text-4xl">
            Plus c'est près, plus c'est rapide
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
            Le délai dépend de la distance depuis l'atelier. Au-delà de 40 km,
            on regarde ensemble ce qui est faisable.
          </p>

          <ul className="mt-8 space-y-3">
            {paliers.map((palier) => (
              <li
                key={palier.rayon}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-4 py-3.5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full",
                      palier.tone === "accent" && "bg-accent/15 text-accent",
                      palier.tone === "primary" && "bg-primary/15 text-primary",
                      palier.tone === "muted" &&
                        "bg-muted text-muted-foreground",
                    )}
                  >
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold leading-none">
                      {palier.rayon}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {palier.detail}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
                    palier.tone === "accent" &&
                      "bg-accent text-accent-foreground",
                    palier.tone === "primary" &&
                      "bg-primary text-primary-foreground",
                    palier.tone === "muted" &&
                      "border border-border text-muted-foreground",
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
            {/* Cercles de rayon, purement décoratifs */}
            <div
              className="absolute -inset-16 -z-10 rounded-full border border-dashed border-primary/20"
              aria-hidden
            />
            <div
              className="absolute -inset-8 -z-10 rounded-full border border-dashed border-primary/30"
              aria-hidden
            />
            <LocationMap
              location="Atelier — secteur central"
              coordinates="Rayon d'astreinte : 10 km"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

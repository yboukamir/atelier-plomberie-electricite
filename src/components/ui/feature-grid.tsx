import * as React from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface Feature {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  href: string
  /** Pastille posée sur la photo (délai d'intervention) */
  badge?: string
  /** Libellé d'action en bas de carte */
  ctaLabel?: string
}

export interface FeatureGridProps {
  features: Feature[]
  className?: string
}

/**
 * Adapté de lavikatiyar/feature-grid (21st.dev). Les vignettes d'origine sont
 * des icônes 3D de 96 px ; avec de vraies photos de chantier, l'image passe en
 * tête de carte, en grand. Ajout d'une pastille de délai et d'un libellé d'action.
 */
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <a
    href={feature.href}
    className={cn(
      "group flex flex-col overflow-hidden rounded-xl border",
      "bg-card text-card-foreground",
      "transition-all duration-300",
      "hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-black/20",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
    )}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={feature.imageSrc}
        alt={feature.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {feature.badge && (
        <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow">
          {feature.badge}
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col justify-between p-6">
      <div>
        <h3 className="mb-2 text-2xl font-bold text-foreground uppercase">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        {feature.ctaLabel && (
          <span className="text-sm font-semibold text-highlight">
            {feature.ctaLabel}
          </span>
        )}
        <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-highlight" />
      </div>
    </div>
  </a>
)

const FeatureGrid = React.forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ features, className }, ref) => {
    if (!features || features.length === 0) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          className,
        )}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    )
  },
)
FeatureGrid.displayName = "FeatureGrid"

export { FeatureGrid }

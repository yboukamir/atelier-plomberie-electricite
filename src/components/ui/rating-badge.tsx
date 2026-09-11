import type { ReactNode } from "react"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

const tones = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-muted text-foreground",
]

/**
 * Adapté de prebuiltui/testimonial, démo « star rating with avatar group »
 * (21st.dev). Initiales au lieu de photos : les avis de la démo sont fictifs,
 * on n'y associe pas de vrais visages.
 */
export function RatingBadge({
  initials,
  rating,
  caption,
  className,
}: {
  initials: string[]
  rating: string
  caption: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-center divide-x divide-current/20", className)}>
      <div className="flex -space-x-3 pr-3">
        {initials.map((initial, index) => (
          <span
            key={initial}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border-2 border-background text-xs font-bold transition hover:-translate-y-1",
              tones[index % tones.length],
            )}
            style={{ zIndex: index + 1 }}
            aria-hidden
          >
            {initial}
          </span>
        ))}
      </div>
      <div className="pl-3">
        <div className="flex items-center gap-0.5" aria-label={`Note ${rating} sur 5`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="size-4 fill-primary text-primary" aria-hidden />
          ))}
          <p className="ml-2 font-semibold">{rating}</p>
        </div>
        <p className="text-sm opacity-80">{caption}</p>
      </div>
    </div>
  )
}

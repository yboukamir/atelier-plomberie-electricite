import { motion, useReducedMotion } from "motion/react"
import { Star } from "lucide-react"

import { GridPattern } from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"

export type Testimonial = {
  name: string
  initials: string
  place: string
  job: string
  quote: string
  rating: 4 | 5
}

type TestimonialsSectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description: string
  testimonials: Testimonial[]
  /** Mention affichée à côté du titre */
  note?: string
}

/**
 * Adapté de efferd/testimonials-section (21st.dev).
 * - Initiales au lieu de photos : les avis sont fictifs, on ne leur prête pas
 *   de vrais visages.
 * - Étoiles, lieu et type d'intervention à la place du poste / de l'entreprise.
 * - framer-motion → motion/react ; apparition coupée si prefers-reduced-motion.
 */
export function TestimonialsSection({
  id,
  eyebrow,
  title,
  description,
  testimonials,
  note,
}: TestimonialsSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id={id} className="relative w-full scroll-mt-24 px-4 pt-20 pb-24">
      <div aria-hidden className="absolute inset-0 isolate z-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
        <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-highlight uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-4xl font-bold tracking-wide text-balance uppercase md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base lg:text-lg">
              {description}
            </p>
          </div>
          {note && (
            <p className="rounded-md border border-dashed border-foreground/25 px-3 py-2 text-xs text-muted-foreground md:max-w-60">
              {note}
            </p>
          )}
        </div>

        <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, initials, place, job, quote, rating }, index) => (
            <motion.figure
              initial={
                shouldReduceMotion
                  ? false
                  : { filter: "blur(4px)", translateY: -8, opacity: 0 }
              }
              whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index + 0.1, duration: 0.8 }}
              key={name}
              className="relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden border border-dashed border-foreground/25 p-4"
            >
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/2 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                  <GridPattern
                    width={25}
                    height={25}
                    x={-12}
                    y={4}
                    strokeDasharray="3"
                    className="absolute inset-0 h-full w-full stroke-foreground/20 mix-blend-overlay"
                  />
                </div>
              </div>

              <span
                aria-hidden
                className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
              >
                {initials}
              </span>

              <div>
                <figcaption className="-mt-0.5 -space-y-0.5">
                  <p className="text-sm md:text-base">{name}</p>
                  <span className="block text-[11px] font-light tracking-tight text-muted-foreground">
                    {job} · {place}
                  </span>
                </figcaption>
                <div className="mt-2 flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      aria-hidden
                      className={cn(
                        "size-3.5",
                        star < rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/40",
                      )}
                    />
                  ))}
                </div>
                <blockquote className="mt-2">
                  <p className="text-sm font-light tracking-wide text-foreground">
                    « {quote} »
                  </p>
                </blockquote>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

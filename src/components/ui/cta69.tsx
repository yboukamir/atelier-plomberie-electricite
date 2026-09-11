import { Phone } from "lucide-react"

import { cn } from "@/lib/utils"

interface Cta69Props {
  badge?: string
  heading: string
  note?: string
  button: { label: string; href: string }
  footnote?: string
  /** Phrase répétée en fond, en très grand */
  marqueePhrase?: string
  className?: string
}

/**
 * Nombre de répétitions dans une moitié du défilement : il faut qu'une moitié
 * soit plus large que l'écran, sinon un trou traverse la section.
 */
const REPEATS = 8

/**
 * Adapté de ziegfiroyt/cta69 « Worth Keeping CTA » (21st.dev). Le badge et le
 * bouton « sceau » dépendaient d'utilitaires non fournis par le registre : ils
 * sont réécrits ici. L'animation passe par la classe animate-marquee (index.css)
 * au lieu de styled-jsx, spécifique à Next.js.
 */
export function Cta69({
  badge,
  heading,
  note,
  button,
  footnote,
  marqueePhrase,
  className,
}: Cta69Props) {
  const marqueeLine = marqueePhrase
    ? `${marqueePhrase} · `.repeat(REPEATS)
    : ""

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-background py-20 md:py-28",
        className,
      )}
    >
      {marqueePhrase && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none"
        >
          <div className="flex w-max shrink-0 animate-marquee whitespace-nowrap text-foreground/[0.06] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="font-display text-[22vw] leading-none font-bold tracking-tighter uppercase md:text-[16vw]"
              >
                {marqueeLine}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-highlight uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-destructive" />
            </span>
            {badge}
          </span>
        )}

        <h2 className="mt-8 text-5xl leading-[0.95] font-bold tracking-tight text-balance text-foreground uppercase md:text-7xl">
          {heading}
        </h2>

        {note && (
          <p className="mt-6 max-w-xl text-lg text-balance text-muted-foreground md:text-xl">
            {note}
          </p>
        )}

        <a
          href={button.href}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary py-2.5 pr-7 pl-2.5 font-display text-2xl font-bold text-primary-foreground uppercase ring-8 ring-primary/20 transition hover:scale-[1.03] focus-visible:ring-primary/60 focus-visible:outline-none md:text-3xl"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-primary-foreground text-primary transition group-hover:rotate-12">
            <Phone className="size-5" />
          </span>
          {button.label}
        </a>

        {footnote && (
          <p className="mt-8 text-sm text-muted-foreground">{footnote}</p>
        )}
      </div>
    </section>
  )
}

export default Cta69

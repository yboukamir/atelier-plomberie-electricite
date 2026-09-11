import { useId, useRef, type ReactNode } from "react"
import { motion, useInView, type Variants } from "motion/react"

import { AnimatedGroup } from "@/components/ui/animated-group"

type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

type Footer3Props = {
  /** Grand titre du bandeau, animé mot par mot */
  title: string
  titleHref?: string
  columns: FooterColumn[]
  /** Colonne de gauche (présentation, mentions) */
  aside: ReactNode
  /** Ligne du bas (copyright) */
  bottom: ReactNode
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

/**
 * Adapté de solaceui/footer-section-3 (21st.dev) : bandeau texturé en ambre,
 * colonnes paramétrables. La newsletter et le nuage d'icônes sociales (utilitaire
 * non fourni par le registre) sont remplacés par un emplacement libre.
 */
export default function Footer3({
  title,
  titleHref,
  columns,
  aside,
  bottom,
}: Footer3Props) {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })
  const noiseId = useId()

  return (
    <footer className="px-4 py-12">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Bandeau texturé */}
        <motion.a
          href={titleHref}
          className="relative block h-[140px] w-full overflow-hidden rounded-xl bg-primary focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:outline-none md:h-[300px]"
          variants={itemVariants}
        >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-50 mix-blend-multiply"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <filter id={noiseId}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter={`url(#${CSS.escape(noiseId)})`} />
          </svg>

          <div
            ref={titleRef}
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-4"
          >
            {isTitleInView && (
              <AnimatedGroup
                className="flex flex-wrap justify-center gap-x-3 text-center font-display text-3xl font-bold text-primary-foreground uppercase md:text-6xl lg:text-7xl"
                preset="slide"
              >
                {title.split(" ").map((word, index) => (
                  <span key={`${word}-${index}`} className="inline-block">
                    {word}
                  </span>
                ))}
              </AnimatedGroup>
            )}
          </div>
        </motion.a>

        <div className="mt-8 flex flex-col justify-between gap-12 md:mt-16 md:flex-row lg:gap-8">
          <motion.div
            className="flex flex-col justify-between space-y-10 lg:w-1/3"
            variants={itemVariants}
          >
            {aside}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-10 lg:w-1/2 lg:justify-end lg:gap-20"
            variants={itemVariants}
          >
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col space-y-4">
                <h4 className="font-display text-lg font-bold uppercase">
                  {column.title}
                </h4>
                <ul className="flex flex-col space-y-2 text-muted-foreground">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 border-t pt-6">
          {bottom}
        </motion.div>
      </motion.div>
    </footer>
  )
}

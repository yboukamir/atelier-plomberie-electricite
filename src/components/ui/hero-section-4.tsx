import * as React from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title: React.ReactNode
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
  imageUrl: string
  /** Pastille au-dessus du titre */
  eyebrow?: React.ReactNode
  /** Bloc sous les boutons (numéro d'urgence, note) */
  footer?: React.ReactNode
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

/**
 * Adapté de ravikatiyar162/hero-section-4 (21st.dev).
 * - framer-motion → motion/react ; pas d'animation si prefers-reduced-motion.
 * - Voile en dégradé plus dense : le bg-black/20 d'origine ne suffit pas à
 *   rendre un titre lisible sur une photo de chantier chargée.
 * - Texte en blanc : text-primary-foreground est foncé dans cette palette.
 * - Hauteur calée sous les bandeaux plutôt que h-screen, et `isolate` pour que
 *   l'image en z-index négatif reste dans la section.
 * - Emplacements eyebrow / footer pour la pastille et le numéro d'urgence.
 */
const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryButtonText,
      primaryButtonHref,
      secondaryButtonText,
      secondaryButtonHref,
      imageUrl,
      eyebrow,
      footer,
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = useReducedMotion()
    const initial = shouldReduceMotion ? false : "hidden"

    return (
      <section
        ref={ref}
        className={cn(
          "relative isolate flex min-h-[640px] w-full items-center justify-center overflow-hidden py-24 lg:h-[calc(100svh-7rem)]",
          className,
        )}
        {...props}
      >
        {/* Photo de fond */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />

        {/* Voile de lisibilité */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/55 to-black/85"
          aria-hidden="true"
        />

        <motion.div
          className="flex max-w-4xl flex-col items-center justify-center px-4 text-center text-white"
          variants={containerVariants}
          initial={initial}
          animate="visible"
        >
          {eyebrow && (
            <motion.div className="mb-6" variants={itemVariants}>
              {eyebrow}
            </motion.div>
          )}

          <motion.h1
            className="text-5xl leading-[0.95] font-bold tracking-tight uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="font-semibold">
              <a href={primaryButtonHref}>{primaryButtonText}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <a href={secondaryButtonHref}>{secondaryButtonText}</a>
            </Button>
          </motion.div>

          {footer && (
            <motion.div className="mt-12" variants={itemVariants}>
              {footer}
            </motion.div>
          )}
        </motion.div>
      </section>
    )
  },
)

HeroSection.displayName = "HeroSection"

export { HeroSection }

import { Droplets, Gauge, ShowerHead } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { FeatureCard } from "@/components/ui/grid-feature-cards"

const prestations = [
  {
    title: "Dépannage fuite & canalisation",
    icon: Droplets,
    description:
      "Recherche de fuite, débouchage et réparation de canalisation. Intervention sous 24h.",
    delai: "Sous 24h",
  },
  {
    title: "Mise aux normes électriques",
    icon: Gauge,
    description:
      "Tableau électrique, mise à la terre, remise en conformité NF C 15-100. Devis sous 48h.",
    delai: "Devis sous 48h",
  },
  {
    title: "Chauffe-eau & sanitaires",
    icon: ShowerHead,
    description:
      "Remplacement de chauffe-eau, pose de sanitaires et robinetterie. Sur planning.",
    delai: "Sur planning",
  },
]

type ViewAnimationProps = {
  delay?: number
  className?: React.ComponentProps<typeof motion.div>["className"]
  children: React.ReactNode
}

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Prestations() {
  return (
    <section id="prestations" className="scroll-mt-24 py-16 md:py-28">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Prestations
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-wide text-balance md:text-4xl lg:text-5xl">
            Ce qu'on répare, ce qu'on installe
          </h2>
          <p className="mt-4 text-sm text-muted-foreground text-balance md:text-base">
            Plomberie et électricité par le même artisan : un seul
            interlocuteur, un seul déplacement.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {prestations.map((prestation) => (
            <div key={prestation.title} className="relative">
              <span className="absolute right-4 top-4 z-20 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                {prestation.delai}
              </span>
              <FeatureCard feature={prestation} className="h-full" />
            </div>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  )
}

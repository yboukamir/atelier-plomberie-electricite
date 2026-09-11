import { Clock, ShieldCheck, Receipt, Droplets, Zap, Wrench } from "lucide-react"

import HeroSection from "@/components/ui/hero-section-9"

/** Tuile du collage : pas d'asset distant, on dessine l'univers technique. */
function Tile({
  icon,
  title,
  caption,
  tone,
}: {
  icon: React.ReactNode
  title: string
  caption: string
  tone: "copper" | "petrol" | "amber"
}) {
  const tones = {
    copper: "from-primary/25 via-primary/10 to-transparent text-primary",
    petrol:
      "from-secondary/25 via-secondary/10 to-transparent text-secondary dark:text-secondary-foreground",
    amber: "from-accent/30 via-accent/10 to-transparent text-accent",
  } as const

  // Contenu aligné en haut : les tuiles se recouvrent par le bas dans le collage.
  return (
    <div
      className={`flex h-full w-full flex-col gap-3 rounded-xl bg-gradient-to-br p-4 ${tones[tone]}`}
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background/70 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="font-display text-base font-bold uppercase leading-tight text-foreground">
          {title}
        </p>
        <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
          {caption}
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  const scrollTo = (id: string) => () => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div id="top">
      <HeroSection
        title={
          <>
            Une fuite, une panne — <br className="hidden sm:block" />
            on est là sous 24h.
          </>
        }
        subtitle="Dépannage, installation et mise aux normes en plomberie et électricité. Devis gratuit."
        actions={[
          {
            text: "Demander un devis",
            onClick: scrollTo("#devis"),
            variant: "default",
          },
          {
            text: "Voir les prestations",
            onClick: scrollTo("#prestations"),
            variant: "outline",
          },
        ]}
        stats={[
          {
            value: "24h",
            label: "Délai d'urgence",
            icon: <Clock className="size-5" />,
          },
          {
            value: "10 ans",
            label: "Garantie décennale",
            icon: <ShieldCheck className="size-5" />,
          },
          {
            value: "0 €",
            label: "Devis gratuit",
            icon: <Receipt className="size-5" />,
          },
        ]}
        visuals={[
          <Tile
            key="1"
            tone="copper"
            icon={<Droplets className="size-5 text-primary" />}
            title="Plomberie"
            caption="Fuites, canalisations, sanitaires"
          />,
          <Tile
            key="2"
            tone="amber"
            icon={<Zap className="size-5 text-accent" />}
            title="Électricité"
            caption="Tableau, mise aux normes NF C 15-100"
          />,
          <Tile
            key="3"
            tone="petrol"
            icon={
              <Wrench className="size-5 text-secondary dark:text-secondary-foreground" />
            }
            title="Dépannage"
            caption="Astreinte 7j/7, intervention rapide"
          />,
        ]}
      />
    </div>
  )
}

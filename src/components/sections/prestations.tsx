import { FeatureGrid, type Feature } from "@/components/ui/feature-grid"
import { unsplash } from "@/lib/contact"

// Photos Unsplash : Timur Shakerzianov, Emmanuel Ikwuegbu, Marian Florinel Condruz
const prestations: Feature[] = [
  {
    title: "Dépannage fuite & canalisation",
    description:
      "Recherche de fuite, débouchage, réparation ou remplacement de canalisation. On limite les dégâts d'abord, on répare ensuite.",
    badge: "Sous 24h",
    imageSrc: unsplash("photo-1676210133055-eab6ef033ce3", 900),
    imageAlt: "Plombier intervenant sur des canalisations sous un évier",
    href: "#devis",
    ctaLabel: "Signaler une fuite",
  },
  {
    title: "Mise aux normes électriques",
    description:
      "Tableau, disjoncteurs différentiels, mise à la terre : remise en conformité NF C 15-100, avec un devis détaillé poste par poste.",
    badge: "Devis sous 48h",
    imageSrc: unsplash("photo-1621905251189-08b45d6a269e", 900),
    imageAlt: "Électricien casqué travaillant sur un tableau électrique",
    href: "#devis",
    ctaLabel: "Demander un devis",
  },
  {
    title: "Chauffe-eau & sanitaires",
    description:
      "Remplacement de chauffe-eau, pose de WC, lavabo et robinetterie. L'ancien matériel est repris et évacué.",
    badge: "Sur planning",
    imageSrc: unsplash("photo-1620653713380-7a34b773fef8", 900),
    imageAlt: "Clé jaune serrant le raccord d'un chauffe-eau",
    href: "#devis",
    ctaLabel: "Planifier une pose",
  },
]

export function Prestations() {
  return (
    <section id="prestations" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-highlight uppercase">
              Prestations
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight uppercase md:text-5xl lg:text-6xl">
              Ce qu'on répare, ce qu'on installe
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Plomberie et électricité par le même artisan : un seul interlocuteur,
            un seul déplacement.
          </p>
        </div>

        <FeatureGrid features={prestations} />
      </div>
    </section>
  )
}

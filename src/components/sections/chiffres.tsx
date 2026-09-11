import { BoldStats } from "@/components/ui/stats-bold"
import { unsplash } from "@/lib/contact"

// Eau jaillissant d'une canalisation — Daan Mooij / Unsplash
const FUITE_PHOTO = "photo-1526898943670-92bfa9f94c12"

export function Chiffres() {
  return (
    <BoldStats
      headline={{
        value: "24h",
        title: "Délai d'intervention en urgence",
        description:
          "Fuite active, panne de courant, dégât des eaux : dans un rayon de 10 km, un technicien intervient sous 24h.",
        imageSrc: unsplash(FUITE_PHOTO, 900),
        imageAlt: "Eau jaillissant d'une canalisation rompue",
      }}
      figures={[
        { value: "10 ans", label: "Garantie décennale" },
        { value: "0 €", label: "Devis gratuit" },
        { value: "7j/7", label: "Astreinte" },
      ]}
    />
  )
}

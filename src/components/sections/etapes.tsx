import { PhoneCall, Truck, Wrench } from "lucide-react"

import { HowItWorks } from "@/components/ui/how-it-works"

export function Etapes() {
  return (
    <HowItWorks
      id="etapes"
      className="scroll-mt-24 border-y bg-muted/30"
      eyebrow="Intervention"
      title="Comment ça se passe"
      subtitle="Trois étapes, et le prix est validé avec vous avant qu'on touche à quoi que ce soit."
      steps={[
        {
          icon: <PhoneCall className="h-6 w-6" />,
          title: "Vous appelez",
          description:
            "Un technicien décroche, pas un standard. On qualifie le problème en deux minutes.",
          benefits: [
            "Diagnostic à distance",
            "Conseils pour limiter les dégâts",
            "Créneau annoncé tout de suite",
          ],
        },
        {
          icon: <Truck className="h-6 w-6" />,
          title: "On se déplace",
          description:
            "Sous 24h en urgence dans les 10 km, avec le matériel courant dans le camion.",
          benefits: [
            "Heure d'arrivée confirmée",
            "Technicien identifié",
            "Pièces courantes en stock",
          ],
        },
        {
          icon: <Wrench className="h-6 w-6" />,
          title: "On répare",
          description:
            "Le prix est validé avec vous avant l'intervention. Pas de surprise sur la facture.",
          benefits: [
            "Devis signé avant travaux",
            "Garantie décennale",
            "Chantier laissé propre",
          ],
        },
      ]}
    />
  )
}

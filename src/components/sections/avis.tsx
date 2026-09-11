import {
  TestimonialsSection,
  type Testimonial,
} from "@/components/ui/testimonials-section"

// Avis inventés pour la démonstration : personnes, lieux et interventions fictifs.
const avis: Testimonial[] = [
  {
    name: "Claire M.",
    initials: "CM",
    place: "Villeurbanne",
    job: "Fuite sous évier",
    rating: 5,
    quote:
      "Appelé à 7h, technicien sur place avant 10h. Il a coupé l'eau, trouvé le raccord fendu et tout refait proprement. Prix annoncé, prix payé.",
  },
  {
    name: "Karim B.",
    initials: "KB",
    place: "Lyon 7e",
    job: "Tableau électrique",
    rating: 5,
    quote:
      "Le disjoncteur sautait toutes les heures. Diagnostic clair, devis détaillé, tableau remis aux normes en une journée.",
  },
  {
    name: "Sophie L.",
    initials: "SL",
    place: "Caluire",
    job: "Chauffe-eau",
    rating: 5,
    quote:
      "Plus d'eau chaude un dimanche soir. Rappelée en dix minutes, chauffe-eau remplacé le lundi matin. Rien à redire.",
  },
  {
    name: "Thomas R.",
    initials: "TR",
    place: "Bron",
    job: "Canalisation bouchée",
    rating: 5,
    quote:
      "Débouchage et passage caméra, et il m'a montré la vidéo pour m'expliquer d'où venait le problème. Rassurant.",
  },
  {
    name: "Nadia K.",
    initials: "NK",
    place: "Vénissieux",
    job: "Mise aux normes",
    rating: 5,
    quote:
      "Mise aux normes de l'appartement avant de le louer. Travail soigné, explications claires et un dossier complet à la fin.",
  },
  {
    name: "Julien P.",
    initials: "JP",
    place: "Écully",
    job: "Dégât des eaux",
    rating: 4,
    quote:
      "Infiltration venue de l'étage du dessus. Ils ont trouvé la fuite dans le mur sans tout casser. Efficace.",
  },
  {
    name: "Martine G.",
    initials: "MG",
    place: "Tassin",
    job: "Prises et éclairage",
    rating: 5,
    quote:
      "Ajout de prises et d'un éclairage extérieur. Ponctuel, propre, et le chantier laissé nickel.",
  },
  {
    name: "Hugo D.",
    initials: "HD",
    place: "Lyon 3e",
    job: "Salle de bain",
    rating: 4,
    quote:
      "Remplacement du WC et du lavabo. Délai tenu, prix conforme au devis, aucune mauvaise surprise.",
  },
  {
    name: "Amina S.",
    initials: "AS",
    place: "Oullins",
    job: "Panne de courant",
    rating: 5,
    quote:
      "Coupure totale un soir d'hiver. Il m'a guidée au téléphone pour sécuriser, puis il est passé dans l'heure.",
  },
]

export function Avis() {
  return (
    <TestimonialsSection
      id="avis"
      eyebrow="Avis clients"
      title="Ils ont appelé, on est venus"
      description="Fuites, pannes, chantiers programmés : ce que les clients retiennent, c'est la rapidité et le prix tenu."
      note="Avis fictifs, rédigés pour la démonstration. Aucune entreprise réelle."
      testimonials={avis}
    />
  )
}

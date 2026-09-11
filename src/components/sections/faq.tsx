import { Faq3 } from "@/components/ui/faq3"

const questions = [
  {
    id: "nuit",
    question: "Intervenez-vous la nuit et le week-end ?",
    answer:
      "Oui, l'astreinte fonctionne 7j/7 pour les urgences : fuite active, panne de courant, dégât des eaux. Les majorations de nuit et de week-end sont annoncées au téléphone, avant le déplacement.",
  },
  {
    id: "attente",
    question: "Que faire en attendant votre arrivée ?",
    answer:
      "Pour une fuite, coupez l'arrivée d'eau au compteur. Pour une panne électrique, coupez le disjoncteur général et ne touchez pas aux fils. On vous guide au téléphone si besoin.",
  },
  {
    id: "deplacement",
    question: "Combien coûte le déplacement ?",
    answer:
      "Il dépend de la distance (voir la zone d'intervention) et vous est annoncé avant qu'on se mette en route. Il est déduit de la facture si les travaux sont réalisés.",
  },
  {
    id: "devis",
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. Pour les travaux programmés (mise aux normes, chauffe-eau, salle de bain), le devis est gratuit et sans engagement. En urgence, le prix est annoncé au téléphone puis confirmé sur place avant de commencer.",
  },
  {
    id: "assurance",
    question: "Êtes-vous assurés ?",
    answer:
      "Oui : responsabilité civile professionnelle et garantie décennale. L'attestation est jointe à chaque devis.",
  },
  {
    id: "paiement",
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Carte bancaire, virement et chèque. Aucun acompte n'est demandé pour un dépannage.",
  },
]

export function Faq() {
  return (
    <Faq3
      id="faq"
      eyebrow="Questions fréquentes"
      heading="Avant d'appeler"
      description="Les réponses aux questions qu'on nous pose le plus souvent. Pour le reste, un coup de fil suffit."
      items={questions}
    />
  )
}

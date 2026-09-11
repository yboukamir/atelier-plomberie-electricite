import Footer3 from "@/components/ui/footer-section-3"
import { EMAIL_DISPLAY, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"

const columns = [
  {
    title: "Prestations",
    links: [
      { label: "Dépannage fuite", href: "#prestations" },
      { label: "Mise aux normes", href: "#prestations" },
      { label: "Chauffe-eau & sanitaires", href: "#prestations" },
    ],
  },
  {
    title: "Infos",
    links: [
      { label: "Intervention", href: "#etapes" },
      { label: "Zone", href: "#zone" },
      { label: "Avis", href: "#avis" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Devis gratuit", href: "#devis" },
      { label: PHONE_DISPLAY, href: PHONE_HREF },
    ],
  },
]

export function SiteFooter() {
  return (
    <Footer3
      title={`Une urgence ? ${PHONE_DISPLAY}`}
      titleHref={PHONE_HREF}
      columns={columns}
      aside={
        <>
          <div className="space-y-3">
            <p className="font-display text-2xl font-bold uppercase">
              Atelier Plomberie-Électricité
            </p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Dépannage, installation et mise aux normes. Astreinte 7j/7, devis
              gratuit, garantie décennale.
            </p>
            <p className="text-sm text-muted-foreground">{EMAIL_DISPLAY}</p>
          </div>
          <p className="max-w-sm rounded-md border border-dashed border-foreground/25 px-3 py-2 text-xs text-muted-foreground">
            Projet de démonstration : concept de style, aucune entreprise réelle.
            Coordonnées et avis fictifs.
          </p>
        </>
      }
      bottom={
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Atelier Plomberie-Électricité — démo</p>
          <p>Photos : Unsplash (crédits dans le README)</p>
        </div>
      }
    />
  )
}

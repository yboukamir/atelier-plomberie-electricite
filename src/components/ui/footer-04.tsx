import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerLinks = [
  { title: "Prestations", href: "#prestations" },
  { title: "Zone d'intervention", href: "#zone" },
  { title: "Devis", href: "#devis" },
  { title: "Mentions légales", href: "#" },
]

const Footer = () => {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-x-8 gap-y-10 px-6 py-12 sm:flex-row xl:px-4">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden>
                <rect
                  x="1"
                  y="1"
                  width="38"
                  height="38"
                  rx="9"
                  className="fill-secondary-foreground/10"
                />
                <path
                  d="M13.5 10.5a5 5 0 0 0 5.9 6.3l7.4 7.4a2.2 2.2 0 1 0 3.1-3.1l-7.4-7.4a5 5 0 0 0-6.3-5.9l3 3-1.4 3.4-3.4 1.4-3-3z"
                  className="fill-primary"
                />
              </svg>
              <span className="font-display text-lg font-bold uppercase tracking-wide">
                Atelier Plomberie-Électricité
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                    href={href}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-6 space-y-2 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-accent" />
                Astreinte 7j/7 — urgences sous 24h
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" />
                Rayon de 40 km autour de l&apos;atelier
              </li>
            </ul>
          </div>

          {/* Rappel téléphonique */}
          <div className="w-full max-w-xs">
            <h6 className="font-medium">Se faire rappeler</h6>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Laissez un numéro, on rappelle dans la journée.
            </p>
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                placeholder="06 00 00 00 00"
                type="tel"
                aria-label="Numéro de téléphone"
                className="border-secondary-foreground/20 bg-secondary-foreground/5 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button type="submit" variant="accent">
                Rappeler
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/15" />

        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-4">
          <span className="text-center text-sm text-secondary-foreground/60 sm:text-left">
            © {new Date().getFullYear()} Atelier Plomberie-Électricité —{" "}
            <span className="text-accent">
              projet de démonstration, aucune entreprise réelle
            </span>
            .
          </span>

          <div className="flex items-center gap-5 text-secondary-foreground/70">
            <a href="tel:+33000000000" aria-label="Téléphone">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:contact@example.invalid" aria-label="E-mail">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

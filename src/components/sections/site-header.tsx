import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Zone d'intervention", href: "#zone" },
  { label: "Devis", href: "#devis" },
]

/** Marque de l'atelier : clé plate + éclair, en cuivre et ambre. */
function AtelierMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      fill="none"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="9"
        className="fill-secondary"
      />
      <path
        d="M13.5 10.5a5 5 0 0 0 5.9 6.3l7.4 7.4a2.2 2.2 0 1 0 3.1-3.1l-7.4-7.4a5 5 0 0 0-6.3-5.9l3 3-1.4 3.4-3.4 1.4-3-3z"
        className="fill-primary"
      />
      <path
        d="M20.5 22.5 11 33h4.6l-1.4 5.2"
        className="stroke-accent"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0,-3)"
      />
    </svg>
  )
}

export function DemoBanner() {
  return (
    <div className="relative isolate bg-secondary text-secondary-foreground">
      <div
        className="hazard-stripes absolute inset-x-0 top-0 h-1 opacity-70"
        aria-hidden
      />
      <p className="mx-auto max-w-6xl px-4 py-2.5 text-center text-xs font-medium tracking-wide sm:text-sm">
        <span className="mr-2 rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
          Démo
        </span>
        Projet de démonstration — concept de style, aucune entreprise réelle.
      </p>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <AtelierMark />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold uppercase tracking-wide text-foreground">
              Atelier
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Plomberie · Électricité
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+33000000000"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="size-4 text-primary" />
            00 00 00 00 00
          </a>
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#devis">Demander un devis</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33000000000"
              className="mt-2 flex items-center gap-2 rounded-md px-2 py-2.5 text-sm font-semibold text-foreground"
            >
              <Phone className="size-4 text-primary" />
              00 00 00 00 00
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

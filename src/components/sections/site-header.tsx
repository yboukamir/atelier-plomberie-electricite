import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PromoBanner } from "@/components/ui/promo-banner"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Intervention", href: "#etapes" },
  { label: "Zone", href: "#zone" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
]

/** Marque de l'atelier : clé plate + éclair. */
function AtelierMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} fill="none" aria-hidden>
      <rect x="1" y="1" width="38" height="38" rx="9" className="fill-primary" />
      <path
        d="M13.5 10.5a5 5 0 0 0 5.9 6.3l7.4 7.4a2.2 2.2 0 1 0 3.1-3.1l-7.4-7.4a5 5 0 0 0-6.3-5.9l3 3-1.4 3.4-3.4 1.4-3-3z"
        className="fill-primary-foreground"
      />
      <path
        d="M20.5 22.5 11 33h4.6l-1.4 5.2"
        className="stroke-primary-foreground"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0,-3)"
      />
    </svg>
  )
}

function PulseDot() {
  return (
    <span className="relative flex size-2">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75 motion-reduce:animate-none" />
      <span className="relative inline-flex size-2 rounded-full bg-destructive" />
    </span>
  )
}

/** Mention obligatoire : visible en permanence, non refermable. */
export function DemoBanner() {
  return (
    <div className="relative isolate bg-black text-white/85">
      <div className="hazard-stripes absolute inset-x-0 top-0 h-1 opacity-80" aria-hidden />
      <p className="mx-auto max-w-6xl px-4 pt-2 pb-1.5 text-center text-[11px] font-medium tracking-wide sm:text-xs">
        <span className="mr-2 rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-primary-foreground uppercase">
          Démo
        </span>
        Projet de démonstration — concept de style, aucune entreprise réelle.
      </p>
    </div>
  )
}

export function UrgencyBar() {
  return (
    <PromoBanner href={PHONE_HREF} label="Numéro d'urgence">
      <span className="font-bold">Fuite ou panne en cours ?</span> Un technicien
      peut partir maintenant ·{" "}
      <span className="font-bold whitespace-nowrap">{PHONE_DISPLAY}</span>
    </PromoBanner>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <AtelierMark />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold tracking-wide text-foreground uppercase">
              Atelier
            </span>
            <span className="block text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Plomberie · Électricité
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
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
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-display text-lg font-bold text-highlight transition-colors hover:bg-primary/20"
          >
            <PulseDot />
            {PHONE_DISPLAY}
          </a>
          <ThemeToggle />
          <Button asChild size="sm" className="font-semibold">
            <a href="#devis">Devis gratuit</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PHONE_HREF}
            aria-label={`Appeler le ${PHONE_DISPLAY}`}
            className="inline-flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground"
          >
            <Phone className="size-5" />
          </a>
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
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Navigation mobile">
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
            <Button asChild className="mt-2 font-semibold" onClick={() => setOpen(false)}>
              <a href="#devis">Devis gratuit</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

/** Bouton d'appel collé en bas d'écran sur mobile, là où le pouce se trouve. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 p-3 backdrop-blur md:hidden">
      <a
        href={PHONE_HREF}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary font-display text-xl font-bold text-primary-foreground uppercase"
      >
        <Phone className="size-5" />
        Appeler · {PHONE_DISPLAY}
      </a>
    </div>
  )
}

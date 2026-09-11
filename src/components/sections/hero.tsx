import { Phone } from "lucide-react"

import { HeroSection } from "@/components/ui/hero-section-4"
import { RatingBadge } from "@/components/ui/rating-badge"
import { PHONE_DISPLAY, PHONE_HREF, unsplash } from "@/lib/contact"

// Plombier au chalumeau, lampe frontale — Battlecreek Coffee Roasters / Unsplash
const HERO_PHOTO = "photo-1558618666-fcd25c85cd64"

export function Hero() {
  return (
    <HeroSection
      id="top"
      imageUrl={unsplash(HERO_PHOTO, 2000)}
      eyebrow={
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-destructive" />
          </span>
          Astreinte 7j/7
          <span className="hidden sm:inline"> · plomberie &amp; électricité</span>
        </span>
      }
      title={
        <>
          Une fuite, une panne —<br className="hidden sm:block" />{" "}
          <span className="text-primary">on est là sous 24h.</span>
        </>
      }
      subtitle="Dépannage, installation et mise aux normes en plomberie et électricité. Devis gratuit."
      primaryButtonText="Demander un devis"
      primaryButtonHref="#devis"
      secondaryButtonText="Voir les prestations"
      secondaryButtonHref="#prestations"
      footer={
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
          <a href={PHONE_HREF} className="group inline-flex items-center gap-3 text-left">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-105">
              <Phone className="size-5" />
            </span>
            <span>
              <span className="block text-xs tracking-widest text-white/70 uppercase">
                Urgence, 24h/24
              </span>
              <span className="font-display text-3xl font-bold text-white">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>
          <RatingBadge
            initials={["CM", "KB", "SL", "TR"]}
            rating="4,9"
            caption="Note moyenne · avis fictifs de démo"
            className="text-white"
          />
        </div>
      }
    />
  )
}

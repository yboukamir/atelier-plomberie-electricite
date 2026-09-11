import { Cta69 } from "@/components/ui/cta69"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"

export function AppelFinal() {
  return (
    <Cta69
      className="border-y bg-muted/30"
      badge="Astreinte 7j/7"
      heading="Une urgence ? On décroche."
      note="Fuite, panne de courant, chauffe-eau en rade : un technicien vous répond et vous donne un créneau tout de suite."
      button={{ label: PHONE_DISPLAY, href: PHONE_HREF }}
      footnote="Numéro fictif — projet de démonstration."
      marqueePhrase="Urgence 24h"
    />
  )
}

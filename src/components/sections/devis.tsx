import { useState } from "react"
import { Clock, Info, Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContactCard } from "@/components/ui/contact-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { EMAIL_DISPLAY, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"

const typesIntervention = [
  { value: "fuite", label: "Fuite / canalisation" },
  { value: "electricite", label: "Mise aux normes électriques" },
  { value: "chauffe-eau", label: "Chauffe-eau / sanitaires" },
  { value: "autre", label: "Autre / je ne sais pas" },
]

export function Devis() {
  const [envoye, setEnvoye] = useState(false)

  return (
    <section id="devis" className="scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ContactCard
          title="Demandez votre devis"
          description="Pour les travaux programmés, décrivez votre besoin : on vous rappelle dans la journée avec un prix. Pour une urgence, appelez plutôt, c'est plus rapide."
          contactInfo={[
            { icon: Phone, label: "Urgence 24h/24", value: PHONE_DISPLAY, href: PHONE_HREF },
            { icon: Mail, label: "E-mail", value: EMAIL_DISPLAY },
            { icon: Clock, label: "Horaires", value: "Bureau 8h–18h · astreinte 7j/7" },
            { icon: MapPin, label: "Zone", value: "40 km autour de l'atelier" },
          ]}
        >
          <form
            className="w-full space-y-4"
            onSubmit={(e) => {
              // Formulaire de démonstration : rien n'est envoyé.
              e.preventDefault()
              setEnvoye(true)
            }}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" name="nom" type="text" autoComplete="name" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="telephone">Téléphone</Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                autoComplete="tel"
                placeholder="06 00 00 00 00"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="type">Type d'intervention</Label>
              <Select name="type">
                <SelectTrigger id="type">
                  <SelectValue placeholder="Choisir une prestation" />
                </SelectTrigger>
                <SelectContent>
                  {typesIntervention.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Ce qui se passe, depuis quand, et à quel étage si possible."
              />
            </div>

            <Button type="submit" className="w-full font-semibold" size="lg">
              <Send className="size-4" />
              Envoyer la demande
            </Button>

            {envoye && (
              <p
                className="rounded-md border border-primary/40 bg-primary/10 px-3 py-2.5 text-sm text-foreground"
                role="status"
              >
                Formulaire de démonstration : la demande n'est pas transmise.
              </p>
            )}

            <p className="flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="mt-0.5 size-3.5 shrink-0" />
              Ce formulaire n'est relié à aucun service. Il illustre le parcours
              de prise de contact.
            </p>
          </form>
        </ContactCard>
      </div>
    </section>
  )
}

import { useState } from "react"
import { Info, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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

const typesIntervention = [
  { value: "fuite", label: "Fuite / canalisation" },
  { value: "electricite", label: "Mise aux normes électriques" },
  { value: "chauffe-eau", label: "Chauffe-eau / sanitaires" },
  { value: "autre", label: "Autre / je ne sais pas" },
]

export function Devis() {
  const [envoye, setEnvoye] = useState(false)

  return (
    <section id="devis" className="scroll-mt-24 py-16 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Devis gratuit
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl">
            Décrivez le problème
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            On rappelle dans la journée pour cadrer l'intervention et donner un
            prix. Aucun engagement.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-12">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              // Formulaire de démonstration : rien n'est envoyé.
              e.preventDefault()
              setEnvoye(true)
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" name="nom" type="text" autoComplete="name" required />
            </div>

            <div className="space-y-2">
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

            <div className="space-y-2">
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

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Ce qui se passe, depuis quand, et à quel étage si possible."
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Send className="size-4" />
              Envoyer la demande
            </Button>

            {envoye && (
              <p
                className="rounded-md border border-accent/40 bg-accent/10 px-3 py-2.5 text-sm text-foreground"
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
        </Card>
      </div>
    </section>
  )
}

import { useState, type ReactNode } from "react"
import { ChevronsRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Adapté de shadcndesign/banner-1 (21st.dev) : bandeau cliquable en haut de
 * page, refermable. next/link remplacé par <a>, fermeture câblée.
 */
export function PromoBanner({
  href,
  label,
  children,
  className,
}: {
  href: string
  label: string
  children: ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <aside
      aria-label={label}
      className={cn(
        "relative flex items-center bg-primary py-2.5 pr-12 pl-4 text-primary-foreground",
        className,
      )}
    >
      <a
        href={href}
        className="flex w-full items-center justify-start gap-2 md:justify-center"
      >
        <p className="text-left text-sm hover:underline md:text-center">
          {children}
        </p>
        <ChevronsRight className="hidden h-4 w-4 shrink-0 md:block" />
      </a>

      <Button
        onClick={() => setOpen(false)}
        className="absolute right-2 h-8 w-8 text-primary-foreground hover:bg-black/10 hover:text-primary-foreground"
        aria-label="Fermer le bandeau"
        variant="ghost"
        size="icon"
      >
        <X />
      </Button>
    </aside>
  )
}

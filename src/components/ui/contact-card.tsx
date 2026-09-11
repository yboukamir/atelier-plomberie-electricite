import type React from "react"
import { PlusIcon, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

type ContactCardProps = React.ComponentProps<"div"> & {
  title?: string
  description?: string
  contactInfo?: ContactInfoProps[]
  formSectionClassName?: string
}

/**
 * Adapté de efferd/contact-card (21st.dev) : titre en h2 (un seul h1 par page),
 * coordonnées cliquables quand un lien est fourni.
 */
export function ContactCard({
  title = "Contact",
  description,
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative grid h-full w-full border bg-card shadow md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-highlight" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-highlight" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-highlight" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-highlight" />
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h2 className="text-4xl font-bold uppercase md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-sm text-muted-foreground md:text-base lg:text-lg">
              {description}
            </p>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {contactInfo?.map((info) => (
              <ContactInfo key={info.label} {...info} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "flex h-full w-full items-center border-t bg-muted/40 p-5 md:col-span-1 md:border-t-0 md:border-l",
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn("flex items-center gap-3 py-3", className)} {...props}>
      <div className="rounded-lg bg-muted p-3 text-highlight">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        {href ? (
          <a href={href} className="text-sm text-muted-foreground hover:text-foreground">
            {value}
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  )
}

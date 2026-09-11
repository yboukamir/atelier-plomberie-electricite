import type React from "react"

import { cn } from "@/lib/utils"

export interface Step {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
}

interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string
  title: string
  subtitle?: string
  steps: Step[]
}

/**
 * Adapté de ravikatiyar162/how-it-works (21st.dev) : étapes paramétrables,
 * numéro repris dans la carte sur mobile (la frise numérotée n'y a pas de sens).
 */
const StepCard = ({ step, index }: { step: Step; index: number }) => (
  <div
    className={cn(
      "relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out",
      "hover:scale-[1.03] hover:border-primary/50 hover:shadow-lg",
    )}
  >
    <div className="mb-4 flex items-center justify-between">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-highlight">
        {step.icon}
      </div>
      <span className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground md:hidden">
        Étape {index + 1}
      </span>
    </div>
    <h3 className="mb-2 text-2xl font-bold uppercase">{step.title}</h3>
    <p className="mb-6 text-muted-foreground">{step.description}</p>
    <ul className="space-y-3">
      {step.benefits.map((benefit) => (
        <li key={benefit} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <span className="text-sm text-muted-foreground">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
)

export function HowItWorks({
  eyebrow,
  title,
  subtitle,
  steps,
  className,
  ...props
}: HowItWorksProps) {
  return (
    <section
      className={cn("w-full bg-background py-16 sm:py-24", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Frise numérotée, alignée sur la grille de cartes */}
        <div className="relative mx-auto mb-8 hidden w-full max-w-5xl md:block">
          <div
            aria-hidden
            className="absolute top-1/2 left-[16.6667%] h-0.5 w-[66.6667%] -translate-y-1/2 bg-border"
          />
          <div className="relative grid grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex h-9 w-9 items-center justify-center justify-self-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground ring-4 ring-background"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

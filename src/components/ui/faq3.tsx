import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  id: string
  question: string
  answer: string
}

interface Faq3Props {
  id?: string
  eyebrow?: string
  heading: string
  description: string
  items: FaqItem[]
}

/** Adapté de shadcnblockscom/faq3 (21st.dev) : surtitre et ancre ajoutés. */
const Faq3 = ({ id, eyebrow, heading, description, items }: Faq3Props) => {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              {eyebrow}
            </p>
          )}
          <h2 className="mb-3 text-4xl font-bold uppercase md:mb-4 lg:mb-6 lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left transition-opacity duration-200 hover:no-underline hover:opacity-70">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-base">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export { Faq3 }

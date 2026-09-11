type Figure = {
  value: string
  label: string
}

type BoldStatsProps = {
  headline: {
    value: string
    title: string
    description: string
    imageSrc: string
    imageSrcSet?: string
    imageAlt: string
  }
  figures: Figure[]
}

/**
 * Adapté de uilayout.contact/stats-bold (21st.dev) : contenu en props, chiffre
 * vedette en police condensée et en ambre, ligne de chiffres en grille pour
 * rester alignée sur mobile. Titre en h2 : la section suit directement le h1.
 */
export const BoldStats = ({ headline, figures }: BoldStatsProps) => {
  return (
    <section className="flex flex-col justify-center border-y bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-16">
        <div className="items-center justify-between gap-8 border-b pb-8 md:flex">
          <div className="flex flex-col items-baseline gap-4 md:flex-row">
            <span className="shrink-0 font-display text-8xl leading-none font-bold tracking-tighter text-highlight lg:text-[10rem]">
              {headline.value}
            </span>
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold tracking-tight uppercase">
                {headline.title}
              </h2>
              <p className="mt-1 text-sm text-pretty text-muted-foreground">
                {headline.description}
              </p>
            </div>
          </div>
          <img
            src={headline.imageSrc}
            srcSet={headline.imageSrcSet}
            sizes="(min-width: 640px) 384px, 100vw"
            alt={headline.imageAlt}
            loading="lazy"
            className="mt-6 h-52 w-full shrink-0 rounded-lg object-cover sm:w-96 md:mt-0"
          />
        </div>

        <div className="grid grid-cols-3 gap-5">
          {figures.map((figure) => (
            <div key={figure.label}>
              <p className="mb-2 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                {figure.value}
              </p>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {figure.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoldStats

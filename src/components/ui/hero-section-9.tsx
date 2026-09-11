import { motion, useReducedMotion } from 'motion/react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  /**
   * Collage de droite. Le composant d'origine attendait 3 URLs d'images ;
   * ici on passe 3 tuiles React pour rester autonome (aucun asset distant).
   */
  visuals: React.ReactNode[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, visuals, className }: HeroSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  // initial={false} fait demarrer motion directement a l etat visible.
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className={cn('w-full overflow-hidden bg-background py-12 sm:py-20', className)}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial={initial}
          animate="visible"
        >
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground dark:text-accent"
            variants={itemVariants}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Astreinte 7j/7
          </motion.span>
          <motion.h1
            className="text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl xl:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-lg text-muted-foreground" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button key={index} onClick={action.onClick} variant={action.variant} size="lg" className={action.className}>
                {action.text}
              </Button>
            ))}
          </motion.div>
          <motion.div
            className="mx-auto mt-12 grid w-fit grid-cols-1 gap-6 sm:w-full sm:max-w-lg sm:grid-cols-3 lg:mx-0"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted text-primary">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl font-bold leading-none text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sous 640px, le collage superposé ne tient pas : on empile les tuiles. */}
        <motion.div
          className="grid grid-cols-1 gap-3 sm:hidden"
          variants={containerVariants}
          initial={initial}
          animate="visible"
        >
          {visuals.map((visual, index) => (
            <motion.div
              key={index}
              className="h-32 rounded-2xl border border-border bg-card p-2 shadow-sm"
              variants={imageVariants}
            >
              {visual}
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative hidden h-[500px] w-full sm:block"
          variants={containerVariants}
          initial={initial}
          animate="visible"
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-primary/15"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-accent/20"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-secondary/20 dark:bg-secondary-foreground/20"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '1s' }}
          />

          {/* Visuals */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl border border-border bg-card p-2 shadow-lg sm:h-64 sm:w-64"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            {visuals[0]}
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl border border-border bg-card p-2 shadow-lg sm:h-56 sm:w-56"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            {visuals[1]}
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl border border-border bg-card p-2 shadow-lg sm:h-48 sm:w-48"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            {visuals[2]}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

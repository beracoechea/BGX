import { motion } from 'framer-motion'
import { marqueeWords } from '../data/brand'

export function MarqueeStrip() {
  const items = [...marqueeWords, ...marqueeWords]

  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-secondary)] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent" />

      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex shrink-0 items-center gap-8 text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

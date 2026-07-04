import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, TrendingUp, Layers } from 'lucide-react'

const pillars = [
  {
    icon: Layers,
    title: 'Integrado',
    desc: 'Sistemas que hablan entre sí',
  },
  {
    icon: Zap,
    title: 'Ágil',
    desc: 'Resultados en semanas, no meses',
  },
  {
    icon: TrendingUp,
    title: 'Medible',
    desc: 'Cada acción con impacto real',
  },
  {
    icon: Shield,
    title: 'Confiable',
    desc: 'Tecnología que escala contigo',
  },
]

export function ValueStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--bg-secondary)] py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>

      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-6 text-center transition-all hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5"
            >
              <motion.div
                className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <pillar.icon size={22} />
              </motion.div>
              <h3 className="font-bold text-[var(--text-primary)]">{pillar.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

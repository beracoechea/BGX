import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ServiceCategory } from '../data/services'

interface ServiceCardProps {
  service: ServiceCategory
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group glass-card relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:border-[var(--accent)] hover:shadow-xl hover:shadow-brand-500/10"
    >
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
      />

      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <motion.div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lg font-bold">{index + 1}</span>
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="mb-8 text-[var(--text-secondary)] leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.items.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.3 + index * 0.15 + i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors group-hover:bg-[var(--border-subtle)]"
            >
              <motion.div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--border-subtle)] text-[var(--accent)]"
                whileHover={{ scale: 1.15 }}
              >
                <item.icon size={16} />
              </motion.div>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                {item.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.accent}`}
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4 }}
      />
    </motion.article>
  )
}

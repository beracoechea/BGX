import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { services } from '../data/services'
import { AnimatedConnector } from './AnimatedConnector'
import { SectionGlow } from './SectionGlow'
import { ServiceCard } from './ServiceCard'

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="relative overflow-hidden py-24 sm:py-32">
      <SectionGlow />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-500"
            initial={{ letterSpacing: '0.1em' }}
            animate={isInView ? { letterSpacing: '0.25em' } : {}}
            transition={{ duration: 1 }}
          >
            Nuestros servicios
          </motion.span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Tecnología que impulsa tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Tres pilares integrados para transformar tu operación, acelerar ventas
            y tomar decisiones con datos reales.
          </p>

          <motion.div
            className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-brand-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          <AnimatedConnector />
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

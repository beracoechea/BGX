import { motion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { heroStats } from '../data/services'
import { AnimatedBackground } from './AnimatedBackground'
import { FloatingTags } from './FloatingTags'
import { BrandWordmark } from './BrandWordmark'
import { RotatingBrandWord } from './RotatingBrandWord'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <AnimatedBackground />
      <FloatingTags />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-4 py-1.5 text-sm font-medium text-[var(--text-secondary)] backdrop-blur-sm">
              <Sparkles size={14} className="text-brand-500" />
              Consultoría Tecnológica para PYMEs
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <BrandWordmark size="hero" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-4 flex items-center justify-start gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)] sm:text-sm"
            >
              <span className="h-px w-8 bg-gradient-to-r from-brand-cyan to-brand-600" />
              Consultoría
              <span className="h-px w-8 bg-gradient-to-r from-brand-600 to-brand-purple" />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-5"
            >
              <RotatingBrandWord size="lg" showPrefix={false} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-4 max-w-3xl text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs"
            >
              <span className="text-brand-cyan">Estrategia digital.</span>{' '}
              <span className="text-brand-purple">Marketing inteligente.</span>{' '}
              <span className="brand-letters">Resultados reales.</span>
            </motion.p>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-3xl font-extrabold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            Vendemos más.{' '}
            <span className="gradient-text">Operamos mejor.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl"
          >
            Ayudamos a las pequeñas y medianas empresas a vender más y operar
            mejor mediante software, automatización e inteligencia de datos.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-500/25"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Agenda una consulta
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-3.5 text-base font-semibold text-[var(--text-primary)] backdrop-blur-sm"
              whileHover={{ scale: 1.03, borderColor: 'var(--accent)' }}
              whileTap={{ scale: 0.97 }}
            >
              Ver servicios
              <ArrowDown size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-10 sm:gap-10"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                className="group relative text-center sm:text-left"
              >
                <motion.div
                  className="absolute -inset-2 rounded-xl bg-brand-500/0 transition-colors group-hover:bg-brand-500/5"
                  layoutId={`stat-glow-${i}`}
                />
                <div className="relative text-2xl font-extrabold gradient-text sm:text-3xl">
                  {stat.value}
                </div>
                <div className="relative mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[var(--border)] p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-[var(--accent)]"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

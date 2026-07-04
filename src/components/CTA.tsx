import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useRef, type ComponentType } from 'react'
import { InstagramIcon, LinkedinIcon } from './SocialIcons'

const email = 'bgxconsultoria03@gmail.com'
const instagramUrl = 'https://www.instagram.com/bgxconsultoria/'
const linkedinUrl = 'https://www.linkedin.com/in/bgx-consultor%C3%ADa-digital-53a98541b/'

const socialLinks: {
  href: string
  label: string
  icon: ComponentType<{ size?: number }>
}[] = [
  { href: `mailto:${email}`, label: 'Correo electrónico', icon: Mail },
  { href: instagramUrl, label: 'Instagram', icon: InstagramIcon },
  ...(linkedinUrl
    ? [{ href: linkedinUrl, label: 'LinkedIn', icon: LinkedinIcon }]
    : []),
]

const orbits = [
  { size: 6, duration: 8, radius: 120, delay: 0 },
  { size: 4, duration: 12, radius: 160, delay: 2 },
  { size: 5, duration: 10, radius: 200, delay: 4 },
]

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-brand-600 via-indigo-600 to-violet-700 p-10 sm:p-16"
        >
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {orbits.map((orbit) => (
            <motion.div
              key={orbit.delay}
              className="pointer-events-none absolute left-1/2 top-1/2"
              style={{ width: orbit.radius * 2, height: orbit.radius * 2, marginLeft: -orbit.radius, marginTop: -orbit.radius }}
              animate={{ rotate: 360 }}
              transition={{ duration: orbit.duration, repeat: Infinity, ease: 'linear', delay: orbit.delay }}
            >
              <div
                className="absolute rounded-full bg-white/30"
                style={{
                  width: orbit.size,
                  height: orbit.size,
                  top: 0,
                  left: '50%',
                  marginLeft: -orbit.size / 2,
                }}
              />
            </motion.div>
          ))}

          <motion.div
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative text-center">
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              ¿Listo para transformar tu negocio?
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-xl text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
            >
              Cuéntanos tu reto. Te proponemos una solución concreta, sin
              complicaciones ni jerga innecesaria.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-6 py-4 text-lg font-semibold text-white backdrop-blur-sm ring-1 ring-white/20 transition-colors hover:bg-white/15"
              >
                <Mail size={20} className="text-brand-200" />
                {email}
              </a>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

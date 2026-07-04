import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { RotatingBrandWord } from './RotatingBrandWord'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="group flex items-center">
          <RotatingBrandWord size="sm" showMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <motion.a
            href="#contacto"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 sm:flex"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(26,130,245,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            Hablemos
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}

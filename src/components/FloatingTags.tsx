import { motion } from 'framer-motion'
import { floatingTags } from '../data/brand'

const positions = [
  { top: '15%', left: '5%', float: 6 },
  { top: '25%', right: '8%', float: 7 },
  { top: '55%', left: '3%', float: 8 },
  { top: '40%', right: '4%', float: 5.5 },
  { top: '70%', left: '12%', float: 7.5 },
  { top: '65%', right: '10%', float: 6.5 },
]

export function FloatingTags() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {floatingTags.map((tag, i) => {
        const pos = positions[i]
        return (
          <motion.div
            key={tag.label}
            className="absolute rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/60 px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)] backdrop-blur-md shadow-sm"
            style={{ top: pos.top, left: pos.left, right: pos.right }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.4, 0.85, 0.4],
              y: [0, -14, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: pos.float, repeat: Infinity, ease: 'easeInOut', delay: tag.delay },
              y: { duration: pos.float, repeat: Infinity, ease: 'easeInOut', delay: tag.delay },
              scale: { duration: 0.5, delay: 0.5 + i * 0.1 },
            }}
          >
            {tag.label}
          </motion.div>
        )
      })}
    </div>
  )
}

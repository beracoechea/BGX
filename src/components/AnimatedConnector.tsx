import { motion } from 'framer-motion'

const nodes = [
  { cx: 10, cy: 50 },
  { cx: 30, cy: 30 },
  { cx: 50, cy: 55 },
  { cx: 70, cy: 25 },
  { cx: 90, cy: 50 },
]

export function AnimatedConnector() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 lg:block">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-24 w-full opacity-20 dark:opacity-30"
      >
        <motion.path
          d="M 10 50 Q 30 10, 50 55 T 90 50"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="0.4"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a82f5" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="1.2"
            fill="#1a82f5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
          />
        ))}
      </svg>
    </div>
  )
}

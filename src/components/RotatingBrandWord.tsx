import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { rotatingWords } from '../data/brand'
import { BrandMark } from './BrandMark'

type Size = 'sm' | 'md' | 'lg' | 'hero'

const sizeConfig = {
  sm: {
    letters: 'text-lg',
    word: 'text-lg',
    mark: 'sm' as const,
  },
  md: {
    letters: 'text-2xl',
    word: 'text-2xl',
    mark: 'md' as const,
  },
  lg: {
    letters: 'text-4xl',
    word: 'text-4xl',
    mark: 'lg' as const,
  },
  hero: {
    letters: 'text-5xl sm:text-6xl lg:text-7xl',
    word: 'text-5xl sm:text-6xl lg:text-7xl',
    mark: 'hero' as const,
  },
}

interface RotatingBrandWordProps {
  size?: Size
  showPrefix?: boolean
  showMark?: boolean
  className?: string
}

export function RotatingBrandWord({
  size = 'md',
  showPrefix = true,
  showMark = false,
  className = '',
}: RotatingBrandWordProps) {
  const [index, setIndex] = useState(0)
  const config = sizeConfig[size]

  const longestWord = useMemo(
    () => rotatingWords.reduce((a, b) => (a.length >= b.length ? a : b)),
    [],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  const word = rotatingWords[index]

  return (
    <span
      className={`inline-flex items-center gap-[0.08em] font-extrabold tracking-tight ${className}`}
      aria-label={`BGX — ${word}`}
    >
      {showPrefix && (
        <span className={`shrink-0 ${config.letters} brand-letters`}>BG</span>
      )}
      {showMark && <BrandMark size={config.mark} />}
      <span className="relative inline-grid min-h-[1.15em] shrink-0 overflow-visible">
        <span
          className={`col-start-1 row-start-1 invisible whitespace-nowrap ${config.word}`}
          aria-hidden="true"
        >
          {longestWord}
        </span>
        <span className="col-start-1 row-start-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`block whitespace-nowrap gradient-text ${config.word}`}
            >
              {word}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </span>
  )
}

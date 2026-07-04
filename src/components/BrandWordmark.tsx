import { BrandMark } from './BrandMark'

type Size = 'sm' | 'md' | 'lg' | 'hero'

const sizeConfig = {
  sm: {
    letters: 'text-lg',
    mark: 'h-[0.95em] w-[0.95em]',
  },
  md: {
    letters: 'text-2xl',
    mark: 'h-[0.95em] w-[0.95em]',
  },
  lg: {
    letters: 'text-4xl',
    mark: 'h-[0.95em] w-[0.95em]',
  },
  hero: {
    letters: 'text-5xl sm:text-6xl lg:text-7xl',
    mark: 'h-[0.82em] w-[0.82em] sm:h-[0.8em] sm:w-[0.8em]',
  },
}

interface BrandWordmarkProps {
  size?: Size
  className?: string
}

export function BrandWordmark({ size = 'md', className = '' }: BrandWordmarkProps) {
  const config = sizeConfig[size]

  return (
    <span
      className={`inline-flex items-center gap-[0.04em] font-extrabold tracking-tight ${className}`}
      aria-label="BGX"
    >
      <span className={`${config.letters} brand-letters`}>BG</span>
      <span className={`inline-flex shrink-0 items-center ${config.mark}`}>
        <BrandMark />
      </span>
    </span>
  )
}

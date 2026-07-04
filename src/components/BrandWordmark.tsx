import { BrandMark } from './BrandMark'

type Size = 'sm' | 'md' | 'lg' | 'hero'

const sizeConfig = {
  sm: {
    letters: 'text-lg',
  },
  md: {
    letters: 'text-2xl',
  },
  lg: {
    letters: 'text-4xl',
  },
  hero: {
    letters: 'text-5xl sm:text-6xl lg:text-7xl',
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
      <BrandMark size={size === 'hero' ? 'hero' : size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'} />
    </span>
  )
}

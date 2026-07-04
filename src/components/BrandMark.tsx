type BrandMarkSize = 'sm' | 'md' | 'lg' | 'hero'

interface BrandMarkProps {
  className?: string
  size?: BrandMarkSize
}

export function BrandMark({ className = '', size = 'md' }: BrandMarkProps) {
  return (
    <span className={`brand-x brand-x--${size} ${className}`} aria-hidden="true">
      <span className="brand-x__arm brand-x__arm--bl" />
      <span className="brand-x__arm brand-x__arm--tr" />
      <span className="brand-x__pixel brand-x__pixel--1" />
      <span className="brand-x__pixel brand-x__pixel--2" />
      <span className="brand-x__pixel brand-x__pixel--3" />
    </span>
  )
}

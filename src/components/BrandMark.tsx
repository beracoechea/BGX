interface BrandMarkProps {
  className?: string
}

export function BrandMark({ className = 'h-full w-full' }: BrandMarkProps) {
  return (
    <img
      src="/brand-mark.png"
      alt=""
      width={128}
      height={128}
      className={`object-contain ${className}`}
      aria-hidden="true"
      decoding="async"
    />
  )
}

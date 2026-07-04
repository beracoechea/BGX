interface BrandMarkProps {
  className?: string
}

export function BrandMark({ className = 'h-full w-full' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brand-x-gradient" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00AEEF" />
          <stop offset="0.45" stopColor="#1A82F5" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
      </defs>

      <path
        d="M12 52L28.5 35.5"
        stroke="url(#brand-x-gradient)"
        strokeWidth="8"
        strokeLinecap="butt"
      />
      <path
        d="M12 52V58"
        stroke="url(#brand-x-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="58.5" r="2" stroke="url(#brand-x-gradient)" strokeWidth="1.5" fill="none" />

      <path
        d="M52 12L35.5 28.5"
        stroke="url(#brand-x-gradient)"
        strokeWidth="8"
        strokeLinecap="butt"
      />
      <path
        d="M47.5 8.5L56.5 12.5L52.5 20.5"
        fill="url(#brand-x-gradient)"
      />

      <rect x="54" y="7" width="3.5" height="3.5" rx="0.5" fill="#00AEEF" />
      <rect x="57.5" y="11" width="3" height="3" rx="0.5" fill="#1A82F5" />
      <rect x="55" y="15.5" width="2.5" height="2.5" rx="0.5" fill="#6366F1" />
      <rect x="58.5" y="18" width="2" height="2" rx="0.5" fill="#9C27B0" />
      <rect x="52.5" y="19.5" width="1.5" height="1.5" rx="0.5" fill="#00AEEF" opacity="0.85" />

      <path
        d="M37.5 34.5L41.5 30.5L45.5 34.5"
        stroke="url(#brand-x-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.5 28V40"
        stroke="url(#brand-x-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M41 36.5Q42.5 37.5 43.5 36"
        stroke="url(#brand-x-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

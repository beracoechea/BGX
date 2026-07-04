import { BrandWordmark } from './BrandWordmark'

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <BrandWordmark size="sm" />
          <span className="text-sm text-[var(--text-muted)]">
            — Consultoría Tecnológica
          </span>
        </div>
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} BGX. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

interface TechIconProps {
  className?: string
}

// Logos simplificados, monocromo (currentColor), consistentes con el resto del set de íconos del proyecto.

export function CIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8.5A5 5 0 1 0 16 15.5" />
    </svg>
  )
}

export function JavaIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 17c-1.5 1 -2 2 1 3c5 1.5 12 -0.5 8 -3" />
      <path d="M9 13c-2 1.5 1 3 1 3" />
      <path d="M13 3c-3 3 3 4 0 8" />
      <path d="M8.5 15.5c4 1 8 0.5 9 -1" />
    </svg>
  )
}

export function TypeScriptIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 9h4M10 9v7" />
      <path d="M14.5 14.5c0 1 .8 1.5 1.75 1.5s1.75-.5 1.75-1.3c0-2-3.5-1-3.5-3 0-.8.75-1.3 1.75-1.3s1.65.4 1.75 1.2" />
    </svg>
  )
}

export function PythonIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3c-3 0-4 1.3-4 3v2h4" />
      <path d="M8 8H5.5C4 8 3 9 3 11v2c0 2 1 3 2.5 3H8v-2.5" />
      <path d="M12 21c3 0 4-1.3 4-3v-2h-4" />
      <path d="M16 16h2.5c1.5 0 2.5-1 2.5-3v-2c0-2-1-3-2.5-3H16v2.5" />
      <circle cx="9.5" cy="5.5" r="0.5" fill="currentColor" />
      <circle cx="14.5" cy="18.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

export function ReactIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function NextjsIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8v8M9 8l6.5 8.5M15 8v5" />
    </svg>
  )
}

export function NodejsIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2 20 6.5v11L12 22 4 17.5v-11Z" />
      <path d="M9 12h6M9 15h4" />
    </svg>
  )
}

export function DockerIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="11" width="3" height="3" />
      <rect x="7" y="11" width="3" height="3" />
      <rect x="11" y="11" width="3" height="3" />
      <rect x="7" y="7" width="3" height="3" />
      <rect x="11" y="7" width="3" height="3" />
      <path d="M2 14c0 4 3 7 8 7 6 0 10-3.5 11-9-1 .5-2 .5-3 0-1 1-3 1-4 0-1 1-3 1-4 0-3 1-6 1-8 2Z" />
    </svg>
  )
}

export function KubernetesIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2 21 8.5 18 19H6L3 8.5Z" />
      <circle cx="12" cy="11" r="3" />
      <path d="M12 2v6M21 8.5l-5.5 4M18 19l-3.5-6.5M6 19l3.5-6.5M3 8.5l5.5 4" />
    </svg>
  )
}

export function BashIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m6 9 3 3-3 3M12 15h6" />
    </svg>
  )
}

export function PowerShellIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m6 9 4 3-4 3" />
      <path d="M12 15h6" />
      <path d="m14 9 2 6" />
    </svg>
  )
}

export function AzureIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10.5 3h5L10 15h7l-9.5 6 3-9H5Z" />
    </svg>
  )
}

export function DatabaseIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  )
}

export function GitIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 8v8M6 8c0 4 4 3 8 3l4-2" />
    </svg>
  )
}

export function SassIcon({ className }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 17c1.5 1.5 5 2 7 .5s.5-3.5-1.5-4.5-4-2.5-2.5-4.5 5-2 7-.5" />
    </svg>
  )
}

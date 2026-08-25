interface IconProps {
  className?: string
}

const defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export function FileIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export function AlertIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  )
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}

export function FileCodeIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
      <path d="m10 13-2 2 2 2M14 13l2 2-2 2" />
    </svg>
  )
}

export function FolderIcon({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className}>
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  )
}

export function FlagArIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 18" className={className} aria-hidden="true">
      <rect x="0" y="0" width="24" height="18" fill="#74ACDF" />
      <rect x="0" y="6" width="24" height="6" fill="#FFFFFF" />
      <circle cx="12" cy="9" r="2.1" fill="#F6B40E" stroke="#85340A" strokeWidth="0.4" />
    </svg>
  )
}

export function FlagUsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 18" className={className} aria-hidden="true">
      <rect x="0" y="0" width="24" height="18" fill="#B22234" />
      <rect x="0" y="1.4" width="24" height="1.4" fill="#FFFFFF" />
      <rect x="0" y="4.2" width="24" height="1.4" fill="#FFFFFF" />
      <rect x="0" y="7" width="24" height="1.4" fill="#FFFFFF" />
      <rect x="0" y="9.8" width="24" height="1.4" fill="#FFFFFF" />
      <rect x="0" y="12.6" width="24" height="1.4" fill="#FFFFFF" />
      <rect x="0" y="15.4" width="24" height="1.4" fill="#FFFFFF" />
      <rect x="0" y="0" width="10" height="9.8" fill="#3C3B6E" />
    </svg>
  )
}

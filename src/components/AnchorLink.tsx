import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { scrollToHash } from '../utils/smoothScroll'

interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export default function AnchorLink({ href, onClick, children, ...rest }: AnchorLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToHash(href)
      window.history.pushState(null, '', href)
    }
    onClick?.(e)
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

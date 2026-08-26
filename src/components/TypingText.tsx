import { useEffect, useState } from 'react'
import styles from './TypingText.module.scss'

interface TypingTextProps {
  text: string
  className?: string
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
}

export default function TypingText({ text, className, typingSpeedMs, deletingSpeedMs, pauseMs }: TypingTextProps) {
  return <TypingTextInner key={text} text={text} className={className} typingSpeedMs={typingSpeedMs} deletingSpeedMs={deletingSpeedMs} pauseMs={pauseMs} />
}

function TypingTextInner({
  text,
  className,
  typingSpeedMs = 90,
  deletingSpeedMs = 45,
  pauseMs = 1800,
}: TypingTextProps) {
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [display, setDisplay] = useState(reducedMotion ? text : '')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    if (reducedMotion) return

    if (phase === 'typing') {
      if (display.length < text.length) {
        const timeout = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), typingSpeedMs)
        return () => clearTimeout(timeout)
      }
      const timeout = setTimeout(() => setPhase('pausing'), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (phase === 'pausing') {
      const timeout = setTimeout(() => setPhase('deleting'), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (display.length > 0) {
      const timeout = setTimeout(() => setDisplay(text.slice(0, display.length - 1)), deletingSpeedMs)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => setPhase('typing'), deletingSpeedMs)
    return () => clearTimeout(timeout)
  }, [display, phase, text, typingSpeedMs, deletingSpeedMs, pauseMs, reducedMotion])

  return (
    <span className={className}>
      <span aria-hidden="true">
        {display}
        <span className={styles.cursor}>|</span>
      </span>
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        {text}
      </span>
    </span>
  )
}

import { useRef, useState } from 'react'
import styles from './SubjectStack.module.scss'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import { ArrowDownIcon, ArrowUpIcon } from './icons/Icon'

interface SubjectStackProps {
  title: string
  description: string
  subjects: readonly string[]
}

const POP_ANIMATION_MS = 220

export default function SubjectStack({ title, description, subjects }: SubjectStackProps) {
  const [stack, setStack] = useState<string[]>([])
  const [isPopping, setIsPopping] = useState(false)
  const [isClearing, setIsClearing] = useState(false)
  const stackLengthRef = useRef(0)
  const { language } = useLanguage()
  const t = dict[language].subjectStack

  const canPush = stack.length < subjects.length && !isPopping && !isClearing
  const canPop = stack.length > 0 && !isPopping && !isClearing

  const push = () => {
    if (!canPush) return
    setStack((prev) => {
      const next = [...prev, subjects[prev.length]]
      stackLengthRef.current = next.length
      return next
    })
  }

  const popOnce = () =>
    new Promise<void>((resolve) => {
      setIsPopping(true)
      setTimeout(() => {
        setStack((prev) => {
          const next = prev.slice(0, -1)
          stackLengthRef.current = next.length
          return next
        })
        setIsPopping(false)
        resolve()
      }, POP_ANIMATION_MS)
    })

  const pop = () => {
    if (!canPop) return
    popOnce()
  }

  const clearStack = async () => {
    if (stackLengthRef.current === 0 || isClearing || isPopping) return
    setIsClearing(true)
    while (stackLengthRef.current > 0) {
      await popOnce()
    }
    setIsClearing(false)
  }

  return (
    <div className={styles.card}>
      <div className={styles.controls}>
        <button onClick={push} disabled={!canPush} className={styles.pushButton} aria-label={t.pushAriaLabel(title)}>
          <ArrowDownIcon className={styles.buttonIcon} />
          {t.push}
        </button>
        <button onClick={pop} disabled={!canPop} className={styles.popButton} aria-label={t.popAriaLabel(title)}>
          <ArrowUpIcon className={styles.buttonIcon} />
          {t.pop}
        </button>
      </div>

      <div className={styles.stackWell}>
        <div className={styles.stackItems}>
          {stack.map((subject, i) => {
            const isTop = i === stack.length - 1
            return (
              <div
                key={`${subject}-${i}`}
                className={`${styles.stackItem} ${isTop ? styles.stackItemTop : ''} ${isTop && isPopping ? styles.stackItemLeaving : ''}`}
                style={{ '--depth': i } as React.CSSProperties}
              >
                {subject}
              </div>
            )
          })}
        </div>
        {stack.length === 0 && <span className={styles.emptyHint}>{t.emptyHint}</span>}
      </div>

      <span className={styles.sizeLabel}>{t.sizeLabel(stack.length, subjects.length)}</span>

      <button
        onClick={clearStack}
        disabled={stack.length === 0 || isClearing || isPopping}
        className={styles.clearButton}
      >
        {t.clearButton}
      </button>

      <div className={styles.footer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

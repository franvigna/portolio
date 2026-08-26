import styles from './Education.module.scss'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import SubjectStack from './SubjectStack'

export default function Education() {
  const progress = { approved: 39, total: 62, percent: 63 }
  const { language } = useLanguage()
  const t = dict[language].education

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <span className={styles.sectionLabel}>{t.sectionLabel}</span>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
            <span className={styles.terminalTitle}>{t.terminalUser}</span>
          </div>
          <div className={styles.terminalBody}>
            <p><span className={styles.prompt}>$</span> cat carrera.txt</p>
            <p className={styles.terminalLine}>{t.terminalCareerLine}</p>
            <p className={styles.terminalLine}>{t.terminalProgressLine(progress.approved, progress.total, progress.percent)}</p>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progress.percent}%` }} />
            </div>
            <p><span className={styles.prompt}>$</span> <span className={styles.cursor}>_</span></p>
          </div>
        </div>

        <div className={styles.areas}>
          {t.areas.map((area) => (
            <SubjectStack key={area.title} title={area.title} description={area.description} subjects={area.subjects} />
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <h3>{t.ctaTitle}</h3>
            <p>{t.ctaText}</p>
          </div>
          <a
            href="https://informatica-unlam.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  )
}

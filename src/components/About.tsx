import { useState } from 'react'
import styles from './About.module.scss'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import AnchorLink from './AnchorLink'
import GraphBackground from './GraphBackground'
import PersonalGraph from './PersonalGraph'

export default function About() {
  const [current, setCurrent] = useState(0)
  const { language } = useLanguage()
  const t = dict[language].about
  const { stats, experience } = t

  return (
    <section id="about" className={styles.about}>
      <GraphBackground />
      <div className={styles.container}>
        <span className={styles.sectionLabel}>{t.sectionLabel}</span>
        <h2 className={styles.title}>{t.title}</h2>

        <PersonalGraph />

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div id="experience" className={styles.experience}>
          <span className={styles.sectionLabel}>{t.experienceSectionLabel}</span>
          <h3 className={styles.sectionTitle}>{t.experienceTitle}</h3>

          <div className={styles.node}>
            <button
              onClick={() => setCurrent((c) => c - 1)}
              disabled={current === 0}
              className={styles.nodeCell}
              aria-label={t.prevAriaLabel}
            >
              <span className={styles.nodeCellLabel}>{t.prevLabel}</span>
              <span className={styles.nodeCellValue}>
                {current === 0 ? 'null' : '←'}
              </span>
            </button>

            <div className={styles.nodeTrack}>
              <div
                className={styles.nodeSlider}
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {experience.map((exp, index) => (
                  <div key={index} className={styles.experienceCard}>
                    <div className={styles.nodeMeta}>
                      <span className={styles.nodeIndex}>node[{index}]</span>
                      <span className={styles.experiencePeriod}>{exp.period}</span>
                    </div>
                    <h4 className={styles.experiencePosition}>{exp.position}</h4>
                    <p className={styles.experienceCompany}>{exp.company}</p>
                    <ul className={styles.experienceBullets}>
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrent((c) => c + 1)}
              disabled={current === experience.length - 1}
              className={styles.nodeCell}
              aria-label={t.nextAriaLabel}
            >
              <span className={styles.nodeCellLabel}>{t.nextLabel}</span>
              <span className={styles.nodeCellValue}>
                {current === experience.length - 1 ? 'null' : '→'}
              </span>
            </button>
          </div>

          <div className={styles.nodeFooter}>
            <span className={styles.nodeComment}>{t.nodeComment}</span>
            <span className={styles.nodeCounter}>{t.nodeCounter(current + 1, experience.length)}</span>
          </div>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>{t.ctaText}</p>
          <AnchorLink href="#contact" className={styles.ctaButton}>
            {t.ctaButton}
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

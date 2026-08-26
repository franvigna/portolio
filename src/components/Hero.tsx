import styles from './Hero.module.scss'
import { CONTACT } from '../config/constants'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import profile from '../assets/profile.webp'
import AnchorLink from './AnchorLink'
import TypingText from './TypingText'

export default function Hero() {
  const { language } = useLanguage()
  const t = dict[language].hero

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <div className={styles.role}>
            <TypingText text={t.role} />
          </div>

          <h1 className={styles.title}>Francisco Vignardel</h1>
          <p className={styles.nickname}>{t.nickname} <span>Cisco</span></p>

          <p className={styles.subtitle}>
            {t.subtitleLine1}
            <br />
            {t.subtitleLine2}
          </p>

          <div className={styles.ctas}>
            <a
              href={CONTACT.cvPath[language]}
              download
              className={styles.ctaPrimary}
            >
              {t.ctaCv}
            </a>
            <AnchorLink href="#contact" className={styles.ctaSecondary}>
              {t.ctaContact}
            </AnchorLink>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaTertiary}
            >
              {t.ctaGithub}
            </a>
          </div>
        </div>

        <div className={styles.portrait}>
          <div className={styles.portraitRing} aria-hidden="true" />
          <img
            src={profile}
            alt="Francisco Vignardel"
            className={styles.portraitImage}
            width={480}
            height={480}
          />
          <span className={styles.portraitBadge}>
            <span className={styles.portraitBadgeDot} aria-hidden="true" />
            {t.available}
          </span>
        </div>
      </div>
    </section>
  )
}

import styles from './Footer.module.scss'
import { CONTACT } from '../config/constants'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import { MessageIcon, MailIcon, PinIcon, GithubIcon, LinkedinIcon } from './icons/Icon'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = dict[language].footer

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>FV</span>
              <span className={styles.logoText}>{CONTACT.name}</span>
            </div>
            <p className={styles.tagline}>{t.tagline}</p>
            <p className={styles.description}>{t.description}</p>

            {/* CTA destacado */}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <MessageIcon className={styles.ctaIcon} />
              {t.ctaWhatsapp}
            </a>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.contactTitle}</h3>
            <div className={styles.contactInfo}>
              <a href={`mailto:${CONTACT.email}`} className={styles.contactLink}>
                <MailIcon className={styles.contactIcon} />
                {CONTACT.email}
              </a>
              <p className={styles.contactText}>
                <PinIcon className={styles.contactIcon} />
                {CONTACT.location}
              </p>
              <p className={styles.contactNote}>{t.locationNote}</p>
            </div>

            {/* Social Links */}
            <div className={styles.social}>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <GithubIcon className={styles.socialIcon} />
                GitHub
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className={styles.socialIcon} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>{t.copyright(currentYear, CONTACT.name)}</p>
          <p className={styles.tech}>{t.tech}</p>
        </div>
      </div>
    </footer>
  )
}

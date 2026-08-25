import styles from './Contact.module.scss'
import { CONTACT } from '../config/constants'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import {
  MessageIcon,
  BoltIcon,
  CheckIcon,
  MailIcon,
  PinIcon,
  LinkIcon,
  FileIcon,
} from './icons/Icon'

export default function Contact() {
  const { language } = useLanguage()
  const t = dict[language].contact
  const cvPath = CONTACT.cvPath[language]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    const body = `${message}\n\n(${name})`
    const gmailUrl = `https://mail.google.com/mail/u/0/?to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&fs=1&tf=cm`

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <span className={styles.sectionLabel}>{t.sectionLabel}</span>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>

        <div className={styles.content}>
          {/* WhatsApp Priority */}
          <div className={styles.whatsapp}>
            <div className={styles.whatsappIcon}>
              <MessageIcon />
            </div>
            <div className={styles.whatsappContent}>
              <div className={styles.whatsappHeader}>
                <h3>{t.whatsappTitle}</h3>
                <span className={styles.badge}>
                  <BoltIcon className={styles.badgeIcon} />
                  {t.whatsappBadge}
                </span>
              </div>
              <p className={styles.whatsappDescription}>{t.whatsappDescription}</p>
              <ul className={styles.whatsappFeatures}>
                {t.whatsappFeatures.map((feature, i) => (
                  <li key={i}><CheckIcon className={styles.featureIcon} /> {feature}</li>
                ))}
              </ul>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                {t.whatsappButton}
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <span>{t.dividerText}</span>
          </div>

          {/* Grid: Info + Form */}
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>{t.infoTitle}</h3>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MailIcon /></div>
                <div className={styles.infoContent}>
                  <h4>{t.emailLabel}</h4>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  <p className={styles.infoNote}>{t.emailNote}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><PinIcon /></div>
                <div className={styles.infoContent}>
                  <h4>{t.locationLabel}</h4>
                  <p>{CONTACT.location}</p>
                  <p className={styles.infoNote}>{t.locationNote}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><LinkIcon /></div>
                <div className={styles.infoContent}>
                  <h4>{t.socialLabel}</h4>
                  <div className={styles.social}>
                    <a
                      href={CONTACT.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      GitHub
                    </a>
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <a href={cvPath} download className={styles.cvButton}>
                <FileIcon className={styles.cvIcon} />
                {t.cvButton}
              </a>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>{t.formTitle}</h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t.formName}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t.formNamePlaceholder}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">{t.formSubject}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={t.formSubjectPlaceholder}
                    maxLength={150}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">{t.formMessage}</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t.formMessagePlaceholder}
                    rows={4}
                    maxLength={1000}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  {t.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
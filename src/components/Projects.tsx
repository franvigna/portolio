import styles from './Projects.module.scss'
import { CONTACT } from '../config/constants'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import AnchorLink from './AnchorLink'
import GraphBackground from './GraphBackground'

const LINKS: { demo?: string; repo?: string; selfLink?: boolean }[] = [
  { demo: 'https://informatica-unlam.netlify.app/', repo: 'https://github.com/franvigna/selector-materias' },
  { demo: 'https://recategorizacion.netlify.app/', repo: 'https://github.com/franvigna/SistemaRecategorizacion' },
  { repo: 'https://github.com/franvigna/docker-paso-a-paso' },
  { selfLink: true },
]

export default function Projects() {
  const { language } = useLanguage()
  const t = dict[language].projects
  const projects = t.items.map((item, i) => ({ id: i, ...item, ...LINKS[i] }))

  return (
    <section id="projects" className={styles.projects}>
      <GraphBackground />
      <div className={styles.container}>
        <span className={styles.sectionLabel}>{t.sectionLabel}</span>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.selfLink && (
                    <a href="/" className={styles.projectLink}>
                      {t.viewDemo}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {t.viewDemo}
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectLink} ${styles.projectLinkSecondary}`}
                    >
                      {t.viewOnGithub}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>{t.ctaTitle}</h3>
          <p className={styles.ctaText}>{t.ctaText}</p>
          <div className={styles.ctaButtons}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              {t.ctaWhatsapp}
            </a>
            <AnchorLink href="#contact" className={styles.ctaSecondary}>
              {t.ctaContact}
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}

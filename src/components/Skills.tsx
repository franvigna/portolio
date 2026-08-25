import styles from './Skills.module.scss'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import GraphBackground from './GraphBackground'

export default function Skills() {
  const { language } = useLanguage()
  const t = dict[language].skills

  return (
    <section id="skills" className={styles.skills}>
      <GraphBackground />
      <div className={styles.container}>
        <span className={styles.sectionLabel}>{t.sectionLabel}</span>
        <h2 className={styles.title}>{t.title}</h2>

        <div className={styles.groups}>
          {t.groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.tags}>
                {group.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {`<${tag} />`}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

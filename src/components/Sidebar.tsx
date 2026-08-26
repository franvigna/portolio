import { useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import { CONTACT } from '../config/constants'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'
import AnchorLink from './AnchorLink'
import { CloseIcon, MenuIcon, FileCodeIcon, FolderIcon, SunIcon, MoonIcon, MessageIcon, FlagArIcon, FlagUsIcon, LaptopIcon } from './icons/Icon'

const FILE_IDS = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'contact'] as const

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const t = dict[language].sidebar
  const FILES = FILE_IDS.map((id) => ({ id, ...t.files[id] }))

  useEffect(() => {
    const sections = FILE_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const tree = (
    <>
      <div className={styles.folder}>
        <FolderIcon className={styles.folderIcon} />
        <span>portfolio</span>
      </div>
      <nav className={styles.fileList}>
        {FILES.map((file) => (
          <AnchorLink
            key={file.id}
            href={`#${file.id}`}
            className={`${styles.fileLink} ${activeId === file.id ? styles.active : ''}`}
            onClick={() => setIsMobileOpen(false)}
          >
            <FileCodeIcon className={styles.fileIcon} />
            <span className={styles.fileName}>{file.name}</span>
          </AnchorLink>
        ))}
      </nav>
    </>
  )

  const controls = (
    <div className={styles.controls}>
      <button
        onClick={toggleLanguage}
        className={styles.langToggle}
        aria-label={t.langToggle}
      >
        {language === 'es' ? <FlagArIcon className={styles.flagIcon} /> : <FlagUsIcon className={styles.flagIcon} />}
      </button>
      <button
        onClick={toggleTheme}
        className={styles.themeToggle}
        aria-label={theme === 'dark' ? t.themeToggleToLight : t.themeToggleToDark}
      >
        {theme === 'dark' ? <SunIcon className={styles.themeIcon} /> : <MoonIcon className={styles.themeIcon} />}
      </button>
    </div>
  )

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <AnchorLink href="#hero" className={styles.logo}>
            <span className={styles.logoIcon}><LaptopIcon className={styles.logoIconSvg} /></span>
            <span className={styles.logoText}>Cisco</span>
          </AnchorLink>
          {controls}
        </div>

        <div className={styles.explorer}>{tree}</div>

        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappItem}
        >
          <MessageIcon className={styles.whatsappIcon} />
          {t.whatsapp}
        </a>
      </aside>

      <div className={styles.mobileBar}>
        <AnchorLink href="#hero" className={styles.mobileLogo}>
          <span className={styles.logoIcon}><LaptopIcon className={styles.logoIconSvg} /></span>
          <span className={styles.logoText}>Cisco</span>
        </AnchorLink>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={styles.mobileToggle}
          aria-label={t.toggleMenu}
        >
          {isMobileOpen ? <CloseIcon className={styles.toggleIcon} /> : <MenuIcon className={styles.toggleIcon} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileBrand}>
            <span className={styles.logoIcon}><LaptopIcon className={styles.logoIconSvg} /></span>
            <span className={styles.logoText}>Cisco</span>
            {controls}
          </div>
          <div className={styles.explorer}>{tree}</div>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappItem}
          >
            <MessageIcon className={styles.whatsappIcon} />
            {t.whatsapp}
          </a>
        </div>
      )}
    </>
  )
}

import styles from './Footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const info = {
    name: "Francisco Vignardel",
    role: "Desarrollador Full Stack",
    email: "vignardel.francisco@gmail.com",
    whatsapp: "5491138658887",
    location: "Buenos Aires, Argentina",
    github: "https://github.com/franvigna",
    linkedin: "https://www.linkedin.com/in/francisco-vignardel/"
  }

  const quickLinks = [
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>FV</span>
              <span className={styles.logoText}>{info.name}</span>
            </div>
            <p className={styles.tagline}>{info.role}</p>
            <p className={styles.description}>
              Creo sitios web que hacen crecer negocios. Disponible para proyectos freelance.
            </p>

            {/* CTA destacado */}
            <a
              href={`https://wa.me/${info.whatsapp}?text=${encodeURIComponent("Hola Francisco, quiero consultar")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              💬 Hablemos por WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Enlaces Rápidos</h3>
            <nav className={styles.links}>
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contacto</h3>
            <div className={styles.contactInfo}>
              <a href={`mailto:${info.email}`} className={styles.contactLink}>
                📧 {info.email}
              </a>
              <p className={styles.contactText}>
                📍 {info.location}
              </p>
              <p className={styles.contactNote}>
                Trabajo remoto con toda Argentina y LATAM
              </p>
            </div>

            {/* Social Links */}
            <div className={styles.social}>
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {info.name}. Todos los derechos reservados.
          </p>
          <p className={styles.tech}>
            Hecho con React + Vite + TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
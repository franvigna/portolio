import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Disponible para nuevos proyectos
        </div>

        <h1 className={styles.title}>
          Hola, soy Francisco Vignardel
          <br />
          <span className={styles.gradient}>Desarrollador Full Stack</span>
        </h1>

        <p className={styles.subtitle}>
          Creo sitios web que hacen crecer negocios. Trabajo en YPF y ayudo a PyMEs a tener presencia online profesional.
        </p>

        <div className={styles.ctas}>
          <a
            href="https://wa.me/5491138658887"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            Hablemos por WhatsApp
          </a>
          <a href="#projects" className={styles.ctaSecondary}>
            Ver Proyectos
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>8+</span>
            <span className={styles.statLabel}>Proyectos</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>2+</span>
            <span className={styles.statLabel}>Años Pro</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  )
}
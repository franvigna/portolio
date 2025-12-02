import styles from './About.module.scss'

export default function About() {
  const about = {
    story: `Empecé a programar en la secundaria técnica y me recibí de Técnico en Informática. 
    Hoy trabajo en YPF desarrollando sistemas corporativos con SharePoint, y en paralelo 
    ayudo a PyMEs a tener presencia online con sitios que realmente generan resultados.`,
    
    values: [
      {
        icon: "🎯",
        title: "Enfocado en Resultados",
        description: "Me importa que tu negocio crezca, no solo que el código funcione."
      },
      {
        icon: "💬",
        title: "Comunicación Clara",
        description: "Cero jerga técnica. Te explico todo en español simple."
      },
      {
        icon: "⚡",
        title: "Entregas a Tiempo",
        description: "Si digo 3 semanas, son 3 semanas. Sin excusas."
      }
    ],

    experience: [
      {
        period: "Mayo 2024 - Actualidad",
        position: "Desarrollador SharePoint",
        company: "YPF (via Circo Studio)",
        description: "Sistema documental usado por 1000+ empleados corporativos",
        tech: ["SharePoint", "React", "TypeScript", "Microsoft 365"]
      },
      {
        period: "2023 - Actualidad",
        position: "Desarrollador Web Freelance",
        company: "Remoto",
        description: "8+ proyectos para PyMEs: tiendas online, landing pages, sitios institucionales",
        tech: ["React", "Next.js", "Tailwind CSS", "SCSS"]
      },
      {
        period: "Marzo 2022 - Noviembre 2022",
        position: "Desarrollador Front-End",
        company: "Datalyst Argentina",
        description: "Primera experiencia profesional en consultora tecnológica",
        tech: ["React.js", "QlikView", "MySQL"]
      }
    ],

    education: [
      {
        institution: "Universidad Nacional de La Matanza",
        degree: "Ingeniería en Informática",
        period: "2022 - Actualidad",
        status: "55% completado"
      },
      {
        institution: "Colegio Monseñor Tomás Juan Solari",
        degree: "Técnico en Informática",
        period: "2016 - 2022",
        status: "Completado"
      }
    ]
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre Mí</h2>
        <p className={styles.subtitle}>Mi historia, mis valores y cómo llegué hasta acá</p>

        {/* Historia */}
        <div className={styles.story}>
          <p>{about.story}</p>
        </div>

        {/* Valores */}
        <div className={styles.values}>
          <h3 className={styles.sectionTitle}>Cómo Trabajo</h3>
          <div className={styles.valuesGrid}>
            {about.values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div className={styles.experience}>
          <h3 className={styles.sectionTitle}>Mi Trayectoria</h3>
          <div className={styles.timeline}>
            {about.experience.map((exp, index) => (
              <div key={index} className={styles.experienceCard}>
                <span className={styles.experiencePeriod}>{exp.period}</span>
                <h4 className={styles.experiencePosition}>{exp.position}</h4>
                <p className={styles.experienceCompany}>{exp.company}</p>
                <p className={styles.experienceDescription}>{exp.description}</p>
                <div className={styles.experienceTech}>
                  {exp.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educación */}
        <div className={styles.education}>
          <h3 className={styles.sectionTitle}>Formación</h3>
          <div className={styles.educationGrid}>
            {about.education.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.educationIcon}>🎓</div>
                <h4 className={styles.educationDegree}>{edu.degree}</h4>
                <p className={styles.educationInstitution}>{edu.institution}</p>
                <div className={styles.educationDetails}>
                  <span>{edu.period}</span>
                  <span className={styles.educationStatus}>{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>¿Querés trabajar conmigo?</p>
          <a href="#contact" className={styles.ctaButton}>
            Conversemos sobre tu proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
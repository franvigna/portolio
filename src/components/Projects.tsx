import styles from './Projects.module.scss'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Casa Arnold - Tienda Online",
      description: "Tienda online que aumentó las consultas en 60%. Catálogo completo con 50+ productos, carrito de compras y pedidos directos por WhatsApp. Sin comisiones mensuales ni plataformas de terceros.",
      image: "🛒",
      tags: ["Ecommerce", "WhatsApp", "React", "Netlify"],
      demo: "https://casaarnold.netlify.app/",
      featured: true,
      result: "+60% consultas"
    },
    {
      id: 2,
      title: "HideAway Coffee - Landing Page",
      description: "Landing page profesional para cafetería boutique en Londres. Diseño enfocado en conversión, menú destacado y mapa integrado. Perfecta para atraer turistas y clientes locales.",
      image: "☕",
      tags: ["Landing Page", "React", "SCSS", "Google Maps"],
      demo: "https://hideawaycoffee.netlify.app/",
      featured: true
    },
    {
      id: 3,
      title: "Magenta Agency - Sitio Web",
      description: "Sitio web profesional para agencia creativa. Portfolio dinámico, página de servicios y formulario de contacto. Diseño moderno que destaca sus trabajos sin distracciones.",
      image: "🎨",
      tags: ["Sitio Web", "Portfolio", "React"],
      demo: "https://magenta-agency.netlify.app/",
      featured: false
    },
    {
      id: 4,
      title: "YPF - Sistema Corporativo",
      description: "Sistema SharePoint empresarial usado por 1000+ empleados corporativos. Desarrollo de componentes React reutilizables para gestión documental. Trabajo en equipo ágil con entregas quincenales.",
      image: "🏢",
      tags: ["SharePoint", "Enterprise", "TypeScript", "React"],
      demo: null,
      featured: false
    }
  ]

  const whatsappLink = `https://wa.me/5491138658887?text=${encodeURIComponent("Vi tu portfolio y quiero consultar por un proyecto")}`

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Proyectos Destacados</h2>
        <p className={styles.subtitle}>
          Trabajos reales que generan resultados para mis clientes
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
            >
              {project.featured && (
                <div className={styles.badge}>⭐ Destacado</div>
              )}

              <div className={styles.projectImage}>
                <span className={styles.projectIcon}>{project.image}</span>
                {project.result && (
                  <span className={styles.projectResult}>📈 {project.result}</span>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      Ver Demo →
                    </a>
                  ) : (
                    <span className={styles.projectNda}>
                      🔒 Proyecto confidencial (NDA)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>¿Tu Proyecto es el Siguiente?</h3>
          <p className={styles.ctaText}>
            Conversemos sin compromiso. Te cuento cómo puedo ayudarte y te paso un presupuesto claro.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              Hablemos por WhatsApp
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              Enviar Mensaje
            </a>
          </div>
          <p className={styles.ctaFeatures}>
            ✅ Primera consulta gratis • ✅ Presupuesto en 24-48hs • ✅ Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
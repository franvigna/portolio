import { useState, useEffect } from 'react'
import styles from './Projects.module.scss'
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiNetlify,
  SiGooglemaps,
  SiSass,
  SiWhatsapp
} from 'react-icons/si'
import { FaShoppingCart, FaCoffee, FaPalette, FaBuilding, FaMicrosoft, FaShareAlt } from 'react-icons/fa'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Iconos de tecnologías
  const techIcons: { [key: string]: React.ReactElement } = {
    'React': <SiReact color="#61DAFB" />,
    'TypeScript': <SiTypescript color="#3178C6" />,
    'Tailwind CSS': <SiTailwindcss color="#06B6D4" />,
    'SCSS': <SiSass color="#CC6699" />,
    'Next.js': <SiNextdotjs color="#000000" />,
    'Netlify': <SiNetlify color="#00C7B7" />,
    'SharePoint': <FaShareAlt color="#0078D4" />,
    'Microsoft 365': <FaMicrosoft color="#5E5E5E" />,
    'Google Maps': <SiGooglemaps color="#4285F4" />,
    'WhatsApp': <SiWhatsapp color="#25D366" />,
  }

  const projects = [
    {
      id: 1,
      title: "Casa Arnold - Tienda Online",
      description: "Tienda online que aumentó las consultas en 60%. Catálogo completo con 50+ productos, carrito de compras y pedidos directos por WhatsApp.",
      icon: <FaShoppingCart />,
      tags: ["React", "WhatsApp", "Netlify", "SCSS"],
      demo: "https://casaarnold.netlify.app/",
      featured: true,
      result: "+60% consultas"
    },
    {
      id: 2,
      title: "HideAway Coffee - Landing Page",
      description: "Landing page profesional para cafetería boutique en Londres. Diseño enfocado en conversión, menú destacado y mapa integrado.",
      icon: <FaCoffee />,
      tags: ["React", "SCSS", "Google Maps", "Netlify"],
      demo: "https://hideawaycoffee.netlify.app/",
      featured: true,
      result: "Conversión optimizada"
    },
    {
      id: 3,
      title: "Magenta Agency - Sitio Web",
      description: "Sitio web profesional para agencia creativa. Portfolio dinámico, página de servicios y formulario de contacto.",
      icon: <FaPalette />,
      tags: ["React", "SCSS", "Netlify"],
      demo: "https://magenta-agency.netlify.app/",
      featured: false
    },
    {
      id: 4,
      title: "YPF - Sistema Corporativo",
      description: "Sistema SharePoint empresarial usado por 1000+ empleados corporativos. Desarrollo de componentes React reutilizables para gestión documental.",
      icon: <FaBuilding />,
      tags: ["SharePoint", "TypeScript", "React", "Microsoft 365"],
      demo: null,
      featured: false
    }
  ]

  // Auto-scroll cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [projects.length])

  // Duplicar proyectos para efecto infinito
  const extendedProjects = [...projects, ...projects, ...projects]

  // Calcular el desplazamiento
  // Cada card: calc((100% - 4rem) / 3) + gap de 2rem
  // En porcentaje total que se mueve por cada slide
  const calculateOffset = () => {
    // El ancho total que ocupa una card + un gap es:
    // (100% / 3) + (2rem / ancho_contenedor * 100%)
    // Simplificado: cada iteración mueve 33.333% + el gap proporcional
    const movePercentage = (100 + 6) / 3 // aproximadamente 35.333% por slide
    return currentIndex * movePercentage
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Proyectos Destacados</h2>
        <p className={styles.subtitle}>
          Trabajos reales que generan resultados para mis clientes
        </p>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <div 
              className={styles.carousel}
              style={{ transform: `translateX(-${calculateOffset()}%)` }}
            >
              {extendedProjects.map((project, idx) => (
                <div 
                  key={`${project.id}-${idx}`}
                  className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                >
                {project.featured && (
                  <div className={styles.badge}>⭐ Destacado</div>
                )}

                <div className={styles.projectImage}>
                  <span className={styles.projectIcon}>{project.icon}</span>
                  {project.result && (
                    <span className={styles.projectResult}>📈 {project.result}</span>
                  )}
                </div>

                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.techIcon} title={tag}>
                        {techIcons[tag]}
                      </span>
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

          {/* Indicadores */}
          <div className={styles.indicators}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.indicator} ${idx === currentIndex ? styles.indicatorActive : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
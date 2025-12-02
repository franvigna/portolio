import { useState } from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const contactInfo = {
    email: "vignardel.francisco@gmail.com",
    whatsapp: "5491138658887",
    location: "Buenos Aires, Argentina",
    github: "https://github.com/franvigna",
    linkedin: "https://www.linkedin.com/in/francisco-vignardel/"
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Reemplazar con tu Formspree ID (registrate en formspree.io)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      
      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Listo para Empezar?</h2>
        <p className={styles.subtitle}>
          Elegí cómo querés contactarme
        </p>

        <div className={styles.content}>
          {/* WhatsApp Priority */}
          <div className={styles.whatsapp}>
            <div className={styles.whatsappIcon}>💬</div>
            <div className={styles.whatsappContent}>
              <div className={styles.whatsappHeader}>
                <h3>WhatsApp</h3>
                <span className={styles.badge}>⚡ RECOMENDADO</span>
              </div>
              <p className={styles.whatsappDescription}>
                La forma más rápida de conectar. Te respondo en minutos durante horario laboral.
              </p>
              <ul className={styles.whatsappFeatures}>
                <li>✓ Respuesta inmediata (horario laboral)</li>
                <li>✓ Podemos compartir pantalla si es necesario</li>
                <li>✓ Coordinamos llamada o videollamada fácil</li>
              </ul>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hola Francisco, quiero consultar por un proyecto")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                Abrir WhatsApp Ahora
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <span>o si preferís</span>
          </div>

          {/* Grid: Info + Form */}
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>Otros Medios</h3>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📧</div>
                <div className={styles.infoContent}>
                  <h4>Email</h4>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  <p className={styles.infoNote}>Respondo en 24-48hs</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoContent}>
                  <h4>Ubicación</h4>
                  <p>{contactInfo.location}</p>
                  <p className={styles.infoNote}>Trabajo remoto con toda Argentina y LATAM</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🔗</div>
                <div className={styles.infoContent}>
                  <h4>Redes</h4>
                  <div className={styles.social}>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      GitHub
                    </a>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Tip Box */}
              <div className={styles.tip}>
                <h4>💡 Tip para una respuesta rápida</h4>
                <p>
                  Contame qué tipo de sitio necesitás (tienda, landing, web completa) y tu presupuesto aproximado.
                  Así puedo darte una respuesta más precisa.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Enviar Mensaje</h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Contame sobre tu proyecto..."
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={styles.submitButton}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {status === 'success' && (
                  <div className={`${styles.status} ${styles.statusSuccess}`}>
                    ✅ ¡Mensaje enviado! Te respondo pronto.
                  </div>
                )}
                {status === 'error' && (
                  <div className={`${styles.status} ${styles.statusError}`}>
                    ❌ Error. Escribime directo a: {contactInfo.email}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
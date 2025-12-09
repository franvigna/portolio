import styles from './Contact.module.scss'

export default function Contact() {
  const contactInfo = {
    email: "vignardel.francisco@gmail.com",
    whatsapp: "5491138658887",
    location: "Buenos Aires, Argentina",
    github: "https://github.com/franvigna",
    linkedin: "https://www.linkedin.com/in/francisco-vignardel/"
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    
    // Crear mensaje formateado para WhatsApp
    const whatsappMessage = `Hola Francisco! 👋

*Nuevo mensaje desde tu portfolio:*

📝 *Nombre:* ${name}
📧 *Email:* ${email}

*Mensaje:*
${message}`
    
    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    
    // Limpiar formulario
    form.reset()
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Listo para Empezar?</h2>
          {/* Grid: Info + Form */}
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📧</div>
                <div className={styles.infoContent}>
                  <h4>Email</h4>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  <p className={styles.infoNote}>Respondo en 24-48hs</p>
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
               <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoContent}>
                  <h4>Ubicación</h4>
                  <p>{contactInfo.location}</p>
                  <p className={styles.infoNote}>Trabajo remoto con toda Argentina y LATAM</p>
                </div>
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
                  className={styles.submitButton}
                >
                  Abrir WhatsApp con el Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}
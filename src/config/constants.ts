const WHATSAPP_NUMBER = '541138658887'
const WHATSAPP_DEFAULT_MESSAGE = 'Hola Francisco, vi tu CV y me interesa tu perfil. ¿Tenés disponibilidad para hablar?'

export const CONTACT = {
  name: 'Francisco Vignardel',
  email: 'vignardel.francisco@gmail.com',
  location: 'Buenos Aires, Argentina',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`,
  mailto: 'mailto:vignardel.francisco@gmail.com?subject=Consulta%20sobre%20tu%20perfil',
  linkedin: 'https://linkedin.com/in/franciscovignardel',
  github: 'https://github.com/franvigna',
  cvPath: {
    es: '/cv/CV_VignardelFrancisco.pdf',
    en: '/cv/CV_ENG.pdf',
  },
}

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

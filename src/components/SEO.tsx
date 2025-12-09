import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export default function SEO({
  title = 'Francisco Vignardel - Desarrollador Full Stack',
  description = 'Desarrollador Full Stack especializado en React, TypeScript y SharePoint. Creo sitios web que hacen crecer negocios. Disponible para proyectos freelance en Argentina y LATAM.',
  keywords = 'desarrollador web, programador freelance, react developer, typescript, frontend developer, desarrollo web argentina, sitios web profesionales, sharepoint developer',
  image = '/og-image.jpg',
  url = 'https://tudominio.com',
  type = 'website'
}: SEOProps) {
  const fullTitle = title.includes('Francisco') ? title : `${title} | Francisco Vignardel`

  useEffect(() => {
    // Title
    document.title = fullTitle

    // Meta tags básicos
    setMetaTag('description', description)
    setMetaTag('keywords', keywords)
    setMetaTag('author', 'Francisco Vignardel')
    setMetaTag('robots', 'index, follow')

    // Open Graph
    setMetaTag('og:type', type, 'property')
    setMetaTag('og:url', url, 'property')
    setMetaTag('og:title', fullTitle, 'property')
    setMetaTag('og:description', description, 'property')
    setMetaTag('og:image', image, 'property')
    setMetaTag('og:locale', 'es_AR', 'property')
    setMetaTag('og:site_name', 'Francisco Vignardel Portfolio', 'property')

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:url', url)
    setMetaTag('twitter:title', fullTitle)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', image)

    // Canonical
    setCanonical(url)

    // Structured Data
    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Francisco Vignardel",
      "url": url,
      "image": image,
      "jobTitle": "Desarrollador Full Stack",
      "worksFor": {
        "@type": "Organization",
        "name": "YPF"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR"
      },
      "sameAs": [
        "https://github.com/franvigna",
        "https://www.linkedin.com/in/francisco-vignardel/"
      ],
      "knowsAbout": [
        "React",
        "TypeScript",
        "SharePoint",
        "Desarrollo Web",
        "Frontend Development"
      ]
    })
  }, [fullTitle, description, keywords, image, url, type])

  return null
}

// Funciones helper
function setMetaTag(name: string, content: string, type: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${type}="${name}"]`) as HTMLMetaElement
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(type, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
  
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  
  link.setAttribute('href', url)
}

function setStructuredData(data: any) {
  let script = document.querySelector('script[type="application/ld+json"]')
  
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    document.head.appendChild(script)
  }
  
  script.textContent = JSON.stringify(data)
}
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'es' | 'en'

const STORAGE_KEY = 'language'

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'es' ? 'en' : 'es'))
  }, [])

  const value = useMemo(() => ({ language, toggleLanguage }), [language, toggleLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}

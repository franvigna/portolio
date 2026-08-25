import './App.scss'
import styles from './App.module.scss'
import { LanguageProvider } from './hooks/useLanguage'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import TechCarousel from './components/TechCarousel'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Sidebar />
      <div className={styles.content}>
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <TechCarousel />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

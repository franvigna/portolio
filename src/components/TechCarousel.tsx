import styles from './TechCarousel.module.scss'
import {
  CIcon, JavaIcon, TypeScriptIcon, PythonIcon, ReactIcon, NextjsIcon, NodejsIcon,
  DockerIcon, KubernetesIcon, BashIcon, PowerShellIcon, AzureIcon, DatabaseIcon, GitIcon, SassIcon,
} from './icons/TechIcons'

const TECHS = [
  { name: 'C', Icon: CIcon },
  { name: 'Java', Icon: JavaIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextjsIcon },
  { name: 'Node.js', Icon: NodejsIcon },
  { name: 'SCSS', Icon: SassIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'Kubernetes', Icon: KubernetesIcon },
  { name: 'Bash', Icon: BashIcon },
  { name: 'PowerShell', Icon: PowerShellIcon },
  { name: 'Azure', Icon: AzureIcon },
  { name: 'SQL', Icon: DatabaseIcon },
  { name: 'Git', Icon: GitIcon },
]

const track = [...TECHS, ...TECHS]

export default function TechCarousel() {
  return (
    <section className={styles.carousel} aria-label="Stack de tecnologías">
      <div className={styles.viewport}>
        <div className={styles.track}>
          {track.map(({ name, Icon }, i) => (
            <div key={`${name}-${i}`} className={styles.item}>
              <Icon className={styles.icon} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

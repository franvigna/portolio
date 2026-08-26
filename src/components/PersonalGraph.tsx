import { useState } from 'react'
import styles from './PersonalGraph.module.scss'
import { useLanguage } from '../hooks/useLanguage'
import { dict } from '../config/i18n'

interface NodeLayout {
  id: 'core' | 'habits' | 'math' | 'linux' | 'growth'
  file: string
  x: number
  y: number
  isCore?: boolean
}

const NODE_LAYOUT: NodeLayout[] = [
  { id: 'core', file: 'francisco.tsx', x: 50, y: 50, isCore: true },
  { id: 'habits', file: 'habitos.md', x: 8, y: 10 },
  { id: 'math', file: 'matematica.md', x: 92, y: 10 },
  { id: 'linux', file: 'infra.md', x: 8, y: 90 },
  { id: 'growth', file: 'aprendizaje.md', x: 92, y: 90 },
]

// El nodo "core" (profesional) está conectado por defecto a los 4 satélites personales.
const EDGES: [string, string][] = [
  ['core', 'habits'],
  ['core', 'math'],
  ['core', 'linux'],
  ['core', 'growth'],
]

export default function PersonalGraph() {
  const [activeId, setActiveId] = useState<string | null>('core')
  const { language } = useLanguage()
  const t = dict[language].personalGraph
  const NODES = NODE_LAYOUT.map((layout) => ({ ...layout, ...t.nodes[layout.id] }))

  const getNode = (id: string) => NODES.find((n) => n.id === id)!

  return (
    <div className={styles.wrapper}>
      <span className={styles.hint}>{t.hint}</span>

      <div className={styles.graph}>
        <svg className={styles.edges}>
          {EDGES.map(([a, b]) => {
            const nodeA = getNode(a)
            const nodeB = getNode(b)
            const isDim = activeId !== null && activeId !== a && activeId !== b
            return (
              <line
                key={`${a}-${b}`}
                x1={`${nodeA.x}%`}
                y1={`${nodeA.y}%`}
                x2={`${nodeB.x}%`}
                y2={`${nodeB.y}%`}
                className={`${styles.edge} ${isDim ? styles.edgeDim : ''}`}
              />
            )
          })}
        </svg>

        {NODES.map((node) => {
          const isActive = activeId === node.id
          const isDim = activeId !== null && !isActive
          return (
            <button
              key={node.id}
              className={`${styles.node} ${node.isCore ? styles.nodeCore : ''} ${isActive ? styles.nodeActive : ''} ${isDim ? styles.nodeDim : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => setActiveId((current) => (current === node.id ? null : node.id))}
              aria-expanded={isActive}
            >
              {isActive ? (
                <div className={styles.nodeContent}>
                  <h4 className={styles.nodeTitle}>{node.title}</h4>
                  <p className={styles.nodeText}>{node.text}</p>
                </div>
              ) : (
                <>
                  <span className={styles.nodeFile}>{node.file}</span>
                  <span className={styles.nodeLabel}>{node.label}</span>
                </>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

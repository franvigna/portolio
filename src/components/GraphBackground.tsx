import styles from './GraphBackground.module.scss'

// Grafo decorativo: nodos y aristas sutiles, referencia a estructuras de datos/grafos.
// Se usa como capa de fondo DENTRO de una sección (absolute, detrás del contenido),
// nunca fijo sobre toda la página — cada sección define su propio recorte del patrón.
const NODES = [
  { x: 80, y: 120 }, { x: 260, y: 60 }, { x: 420, y: 180 }, { x: 180, y: 300 },
  { x: 560, y: 90 }, { x: 700, y: 220 }, { x: 340, y: 380 }, { x: 860, y: 140 },
  { x: 620, y: 340 }, { x: 940, y: 300 }, { x: 100, y: 480 }, { x: 480, y: 520 },
  { x: 780, y: 460 }, { x: 260, y: 600 }, { x: 900, y: 600 }, { x: 560, y: 700 },
  { x: 140, y: 720 }, { x: 700, y: 780 }, { x: 380, y: 850 }, { x: 940, y: 820 },
]

const EDGES = [
  [0, 1], [1, 2], [2, 4], [4, 5], [5, 7], [3, 6], [6, 2], [3, 0],
  [6, 8], [8, 9], [7, 9], [3, 10], [6, 11], [8, 12], [10, 11], [11, 12],
  [12, 14], [10, 16], [11, 13], [13, 16], [13, 18], [15, 17], [15, 18],
  [17, 19], [14, 19], [12, 15],
]

interface GraphBackgroundProps {
  className?: string
}

export default function GraphBackground({ className }: GraphBackgroundProps) {
  return (
    <div className={`${styles.background} ${className ?? ''}`} aria-hidden="true">
      <svg
        className={styles.graph}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            className={styles.edge}
          />
        ))}
        {NODES.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={i % 3 === 0 ? 4 : 2.5}
            className={styles.node}
            style={{ animationDelay: `${(i % 6) * 0.7}s` }}
          />
        ))}
      </svg>
    </div>
  )
}

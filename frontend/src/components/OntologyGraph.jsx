import { nodes, edges, selfEdges } from '../data/ontology';
import './OntologyGraph.css';

const W = 124;
const H = 50;
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

// Точка на границе прямоугольника узла в сторону точки (tx, ty)
const anchor = (n, tx, ty) => {
  const dx = tx - n.x;
  const dy = ty - n.y;
  const k = Math.min(
    dx === 0 ? Infinity : W / 2 / Math.abs(dx),
    dy === 0 ? Infinity : H / 2 / Math.abs(dy)
  );
  return { x: n.x + dx * k, y: n.y + dy * k };
};

const OntologyGraph = () => (
  <div className="graph-wrap">
    <svg className="graph" viewBox="0 0 1480 600" role="img" aria-label="Схема базы знаний">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#9a8c7a" />
        </marker>
      </defs>

      {edges.map(([from, to, label], i) => {
        const a = byId[from];
        const b = byId[to];
        const p1 = anchor(a, b.x, b.y);
        const p2 = anchor(b, a.x, a.y);
        // Подписи чередуем по длине линии, чтобы они не наезжали друг на друга
        const t = from === 'Dish' && a.y === 40 && b.y === 190 ? [0.45, 0.62, 0.79][i % 3] : 0.55;
        const mx = p1.x + (p2.x - p1.x) * t;
        const my = p1.y + (p2.y - p1.y) * t;
        return (
          <g key={from + to + label}>
            <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className="graph-edge" markerEnd="url(#arrow)" />
            <text x={mx} y={my} className="graph-edge-label" textAnchor="middle">{label}</text>
          </g>
        );
      })}

      {selfEdges.map(([id, label]) => {
        const n = byId[id];
        const x = n.x + W / 2;
        const y = n.y;
        return (
          <g key={id + label}>
            <path
              d={`M${x} ${y - 10} C${x + 50} ${y - 40}, ${x + 50} ${y + 40}, ${x} ${y + 10}`}
              className="graph-edge graph-loop"
              markerEnd="url(#arrow)"
            />
            <text x={x + 50} y={y + 3} className="graph-edge-label" textAnchor="start">{label}</text>
          </g>
        );
      })}

      {nodes.map((n) => (
        <g key={n.id}>
          <rect x={n.x - W / 2} y={n.y - H / 2} width={W} height={H} rx="6" className="graph-node" />
          <text x={n.x} y={n.y - 4} className="graph-node-en" textAnchor="middle">{n.id}</text>
          <text x={n.x} y={n.y + 14} className="graph-node-ru" textAnchor="middle">{n.ru}</text>
        </g>
      ))}
    </svg>
  </div>
);

export default OntologyGraph;

type EnergyNetworkVisualProps = {
  className?: string;
};

/**
 * Abstract hydrogen/energy-network visual built as inline SVG — nodes connected by
 * pathway lines, evoking a value-chain or energy-grid diagram without literal icons.
 * Used in the hero and as the default profile-card visual until a real headshot exists.
 * No external image asset, so it costs nothing in terms of image weight/loading.
 */
export default function EnergyNetworkVisual({ className = "" }: EnergyNetworkVisualProps) {
  const nodes = [
    { x: 60, y: 60 }, { x: 220, y: 40 }, { x: 340, y: 110 },
    { x: 140, y: 160 }, { x: 280, y: 220 }, { x: 80, y: 260 },
    { x: 380, y: 280 }, { x: 200, y: 300 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [1, 3], [3, 4], [2, 4], [3, 5], [4, 6], [4, 7], [5, 7],
  ];

  return (
    <svg
      viewBox="0 0 420 340"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#34d399"
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 6 : 4}
          fill={i % 3 === 0 ? "#34d399" : "#10b981"}
          fillOpacity={i % 3 === 0 ? 0.9 : 0.6}
        />
      ))}
    </svg>
  );
}

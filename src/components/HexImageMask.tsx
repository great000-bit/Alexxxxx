/**
 * Hexagonal image mask cluster — inspired by the Figma "Hexagonal Shape Collection"
 * reference screenshot. Uses CSS clip-path polygon for each hexagon cell. When a real
 * photo is provided, it clips inside the hexagon cells automatically.
 *
 * Layout: one large center hexagon with 5 smaller supporting hexagons arranged in a
 * honeycomb pattern. Glass border treatment around the mask area. Placeholder shows
 * the AO monogram until a real image is supplied.
 *
 * TODO: Replace imageSrc default with "/images/alexander-oburoh.jpg" once provided.
 */

type HexImageMaskProps = {
  /** Path to the image. Defaults to null (shows placeholder). */
  imageSrc?: string | null;
  alt?: string;
};

// Pointy-top hexagon clip path
const hexClip = "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)";

type HexCell = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** Background position for the shared image, so each cell shows a different crop */
  bgPos: string;
};

// Honeycomb arrangement: 1 large center hex + 5 smaller surrounding hexagons
// Coordinates are percentages within the 540x432 container (matching Figma dimensions)
const cells: HexCell[] = [
  // Large center hex
  { x: 28, y: 18, w: 44, h: 55, bgPos: "50% 40%" },
  // Top-left
  { x: 2, y: 4, w: 28, h: 35, bgPos: "20% 20%" },
  // Top-right
  { x: 70, y: 4, w: 28, h: 35, bgPos: "80% 20%" },
  // Bottom-left
  { x: 2, y: 55, w: 28, h: 35, bgPos: "20% 80%" },
  // Bottom-right
  { x: 70, y: 55, w: 28, h: 35, bgPos: "80% 80%" },
  // Bottom-center
  { x: 36, y: 68, w: 28, h: 35, bgPos: "50% 90%" },
];

export default function HexImageMask({ imageSrc = null, alt = "Alexander Oburoh" }: HexImageMaskProps) {
  return (
    <div
      className="relative w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto"
      style={{ aspectRatio: "540 / 432" }}
      role="img"
      aria-label={alt}
    >
      {/* Subtle glass border frame behind the cluster */}
      <div
        className="absolute inset-[-6px] rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Hexagon cells */}
      {cells.map((cell, i) => (
        <div
          key={i}
          className="absolute transition-transform duration-500 hover:scale-105"
          style={{
            left: `${cell.x}%`,
            top: `${cell.y}%`,
            width: `${cell.w}%`,
            height: `${cell.h}%`,
            clipPath: hexClip,
          }}
        >
          {imageSrc ? (
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "480px auto",
                backgroundPosition: cell.bgPos,
                backgroundRepeat: "no-repeat",
              }}
            />
          ) : (
            /* Placeholder — glass cells with subtle teal tint */
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundColor: i === 0 ? "rgba(14,107,87,0.2)" : "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {i === 0 && (
                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-emerald-300/60">
                  AO
                </span>
              )}
            </div>
          )}
          {/* Inner glass edge per cell */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: hexClip,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
            }}
          />
        </div>
      ))}

      {/* Ambient glow behind the cluster */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,107,87,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

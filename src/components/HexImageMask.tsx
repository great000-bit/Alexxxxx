import Image from "next/image";

/**
 * Hexagonal image mask cluster — honeycomb composition using CSS clip-path polygons.
 * One large center hexagon + 5 smaller supporting hexagons. Each cell shows a different
 * crop of Alexander's portrait via object-position.
 */

type HexImageMaskProps = {
  imageSrc?: string;
  alt?: string;
};

const hexClip = "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)";

type HexCell = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** object-position for each cell's crop of the portrait */
  objPos: string;
};

const cells: HexCell[] = [
  // Large center hex
  { x: 28, y: 18, w: 44, h: 55, objPos: "50% 15%" },
  // Top-left
  { x: 2, y: 4, w: 28, h: 35, objPos: "40% 10%" },
  // Top-right
  { x: 70, y: 4, w: 28, h: 35, objPos: "60% 10%" },
  // Bottom-left
  { x: 2, y: 55, w: 28, h: 35, objPos: "35% 50%" },
  // Bottom-right
  { x: 70, y: 55, w: 28, h: 35, objPos: "65% 40%" },
  // Bottom-center
  { x: 36, y: 68, w: 28, h: 35, objPos: "50% 60%" },
];

export default function HexImageMask({
  imageSrc = "/images/alexander-oburoh.jpg",
  alt = "Dr. Alexander Oburoh",
}: HexImageMaskProps) {
  return (
    <div
      className="relative w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto"
      style={{ aspectRatio: "540 / 432" }}
      role="img"
      aria-label={alt}
    >
      {/* Hexagon cells */}
      {cells.map((cell, i) => (
        <div
          key={i}
          className="absolute overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
          style={{
            left: `${cell.x}%`,
            top: `${cell.y}%`,
            width: `${cell.w}%`,
            height: `${cell.h}%`,
            clipPath: hexClip,
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: cell.objPos }}
            sizes="240px"
          />
          {/* Subtle inner border overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: hexClip,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
            }}
          />
        </div>
      ))}

      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,107,87,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

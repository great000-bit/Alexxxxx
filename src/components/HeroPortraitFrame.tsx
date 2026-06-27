/**
 * Circular portrait frame for the hero. Two different size formulas:
 * - Mobile (below sm): clamp(180px, 45vw, 240px) — noticeably smaller than the desktop
 *   version, sized to sit comfortably below the CTA group without dominating the screen,
 *   per the mobile hero brief ("do not let it dominate the mobile screen").
 * - sm and up: clamp(260px, 30vw, 420px) — the desktop-oriented sizing from the previous
 *   hero revision, unchanged.
 *
 * No real photo exists yet — per direct instruction, this uses a clean text-monogram
 * placeholder rather than a stock photo, AI-generated face, or illustration. To add the
 * real photo later: replace the contents of the circular div below with
 * `<Image src="/images/alexander-oburoh.jpg" alt="..." fill className="object-cover" />`
 * from next/image, keeping the same outer frame/border for visual consistency.
 */
export default function HeroPortraitFrame() {
  return (
    <div
      className="relative mx-auto aspect-square w-[clamp(180px,45vw,240px)] sm:w-[clamp(260px,30vw,420px)]"
    >
      <div
        className="absolute inset-0 rounded-full bg-navy-800/70 backdrop-blur-sm flex items-center justify-center overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.14)" }}
      >
        {/* TODO: replace with a real photo at /images/alexander-oburoh.jpg using next/image
            (see component doc comment above) once one is provided. */}
        <span className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl lg:text-6xl font-bold text-emerald-300/70">
          AO
        </span>
      </div>
    </div>
  );
}

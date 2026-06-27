/**
 * Circular portrait frame for the hero's right side. Sized per the hero revision brief:
 * clamp(260px, 30vw, 420px) — noticeably smaller than the original (which used a flat
 * max-w-md / 448px), so it balances the left headline rather than dominating the hero.
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
      className="relative mx-auto aspect-square"
      style={{ width: "clamp(260px, 30vw, 420px)" }}
    >
      <div
        className="absolute inset-0 rounded-full bg-navy-800/70 backdrop-blur-sm flex items-center justify-center overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.14)" }}
      >
        {/* TODO: replace with a real photo at /images/alexander-oburoh.jpg using next/image
            (see component doc comment above) once one is provided. */}
        <span className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold text-emerald-300/70">
          AO
        </span>
      </div>
    </div>
  );
}

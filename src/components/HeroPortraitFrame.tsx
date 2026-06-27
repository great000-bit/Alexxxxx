/**
 * Large rounded/circular portrait frame for the hero's right side, matching the
 * reference screenshot's treatment (big circular frame, subtle border/background, no
 * glow, no halo, no floating decorations).
 *
 * No real photo exists yet — per direct instruction, this uses a clean text-monogram
 * placeholder rather than a stock photo, AI-generated face, or illustration. To add the
 * real photo later: replace the contents of the circular div below with
 * `<Image src="/images/alexander-oburoh.jpg" alt="..." fill className="object-cover" />`
 * from next/image, keeping the same outer frame/border for visual consistency.
 */
export default function HeroPortraitFrame() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <div className="absolute inset-0 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center overflow-hidden">
        {/* TODO: replace with a real photo at /images/alexander-oburoh.jpg using next/image
            (see component doc comment above) once one is provided. */}
        <span className="font-[family-name:var(--font-heading)] text-7xl sm:text-8xl font-bold text-emerald-300/70">
          AO
        </span>
      </div>
    </div>
  );
}

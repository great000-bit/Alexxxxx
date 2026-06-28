import Image from "next/image";

/**
 * Circular portrait frame for the hero's right side. Uses Alexander's real photo,
 * cropped professionally with object-fit: cover. Aligned to the right via ml-auto
 * so it sits near the nav/container right edge.
 */
export default function HeroPortraitFrame() {
  return (
    <div
      className="relative ml-auto aspect-square"
      style={{ width: "clamp(260px, 30vw, 420px)" }}
    >
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.14)" }}
      >
        <Image
          src="/images/alexander-oburoh.jpg"
          alt="Dr. Alexander Oburoh, Sustainability and Energy Systems Analyst"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 260px, 30vw"
          priority
        />
      </div>
      {/* Subtle ring glow */}
      <div
        className="absolute inset-[-3px] rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(90,200,167,0.15) 0%, transparent 50%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

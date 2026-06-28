import type { ElementType, ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Render as a different element/component — e.g. Link for clickable cards. */
  as?: ElementType;
  [key: string]: unknown;
};

/**
 * Shared dark-glassmorphism card surface, used everywhere a "glass card" appears across
 * the site. Centralizing this means the premium hover treatment (a soft gradient border
 * that brightens on hover, adapted from the Creative Emman Limited reference site's own
 * `.card-web3` class — studied directly from its source, since the live site is blocked
 * by this sandbox's network allowlist) only has to be implemented and tuned once.
 *
 * The reference site's technique: a pseudo-element with `mask-composite: exclude` draws
 * a 1px gradient ring around the card that's invisible (transparent) at rest and
 * brightens on hover — much subtler and more premium-feeling than a flat border-color
 * transition, which is what every card on this site used before this component existed.
 *
 * Base background/border/shadow values and the -4px hover lift / glow are exactly the
 * values given in the visual brief, not the reference site's own (slightly stronger)
 * numbers — adapted to Alexander's specific palette and restraint level, not copied
 * wholesale.
 */
export default function GlassCard({
  children,
  className = "",
  as: Component = "div",
  style: overrideStyle,
  ...rest
}: GlassCardProps) {
  return (
    <Component
      className={`group relative rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(90,200,167,0.18),0_24px_80px_rgba(0,0,0,0.22)] ${className}`}
      style={{
        backgroundColor: "rgba(255,255,255,0.055)",
        backdropFilter: "blur(20px) saturate(135%)",
        WebkitBackdropFilter: "blur(20px) saturate(135%)",
        border: "1px solid rgba(255,255,255,0.12)",
        // Spread last so a caller-provided style (e.g. ProjectCard's featured border
        // override) merges with — rather than silently replacing — the base glass
        // styling above. Extracting `style` from `rest` explicitly (rather than letting
        // {...rest} carry it) is what makes this merge possible at all.
        //
        // box-shadow deliberately lives in the className above, NOT here. An inline
        // style always beats a stylesheet rule regardless of specificity or pseudo-class
        // state — so a base box-shadow set here would make the hover:shadow-[...]
        // Tailwind class permanently unable to override it. Confirmed this was a real,
        // reproducible bug (not a test artifact) by checking getComputedStyle('box-shadow')
        // before/after a genuine Playwright .hover() call and seeing zero change.
        ...(overrideStyle as object | undefined),
      }}
      {...rest}
    >
      {/* Gradient-ring border, invisible at rest, brightens on hover — drawn with a
          padding + mask-composite trick so only a 1px ring renders, not a filled
          background. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg, rgba(90,200,167,0.5) 0%, transparent 60%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
    </Component>
  );
}

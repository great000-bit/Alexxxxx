import { ArrowUpRight } from "lucide-react";

type ResearchProfileCardProps = {
  platform: string;
  description: string;
  ctaLabel: string;
  href: string;
  icon: (props: { size?: number; className?: string }) => React.ReactElement;
  /** Which brand-influenced background treatment to use — see brief's per-platform direction. */
  variant: "scholar" | "medium" | "linkedin";
};

/**
 * Brand-influenced background per platform, built from radial/linear gradient layers
 * rather than each platform's literal brand colour, per the brief ("brand-influenced",
 * "avoid loud Google colours", "still dark and premium"). All three stay within
 * Alexander's own navy/emerald/white palette, just weighted differently.
 */
const variantBackground: Record<ResearchProfileCardProps["variant"], string> = {
  // Deep navy base, soft blue/white academic feel.
  scholar:
    "radial-gradient(120% 120% at 0% 0%, rgba(56,120,190,0.22) 0%, transparent 55%), radial-gradient(120% 120% at 100% 100%, rgba(255,255,255,0.05) 0%, transparent 60%), #071a2d",
  // Black/dark base, subtle emerald editorial glow.
  medium:
    "radial-gradient(120% 120% at 100% 0%, rgba(14,107,87,0.28) 0%, transparent 55%), radial-gradient(120% 120% at 0% 100%, rgba(255,255,255,0.04) 0%, transparent 60%), #050505",
  // Blue/white blurred, noised, still dark and premium — per explicit LinkedIn direction.
  linkedin:
    "radial-gradient(130% 130% at 0% 0%, rgba(74,144,226,0.30) 0%, transparent 50%), radial-gradient(120% 120% at 100% 0%, rgba(255,255,255,0.08) 0%, transparent 55%), #071a2d",
};

export default function ResearchProfileCard({
  platform,
  description,
  ctaLabel,
  href,
  icon: Icon,
  variant,
}: ResearchProfileCardProps) {
  return (
    <div
      className="group relative h-full flex flex-col rounded-3xl p-7 overflow-hidden border border-white/12 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[rgba(14,107,87,0.42)] hover:shadow-[0_0_24px_rgba(90,200,167,0.14),0_24px_80px_rgba(0,0,0,0.22)]"
      style={{ background: variantBackground[variant] }}
    >
      {/* Soft noise/blur layer for the "blurred gradient" premium feel */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)" }}
      />

      <span
        className="relative inline-flex items-center justify-center w-11 h-11 rounded-2xl flex-shrink-0 mb-5"
        style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
      >
        <Icon size={20} className="[color:#5ac8a7]" />
      </span>

      <h3 className="relative font-[family-name:var(--font-heading)] text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
        {platform}
      </h3>
      <p className="relative text-sm leading-relaxed mb-6 flex-1" style={{ color: "#cbd5e1" }}>
        {description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${ctaLabel} — ${platform} (opens in a new tab)`}
        className="relative mt-auto inline-flex items-center gap-1.5 text-sm font-semibold w-fit rounded-full px-4 py-2 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/45"
        style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.20)",
          color: "#ffffff",
        }}
      >
        {ctaLabel}
        <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

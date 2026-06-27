import type { ElementType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type PremiumButtonProps = {
  children: ReactNode;
  variant?: "primary" | "glass";
  /** Render as a different element — Link for internal nav, "a" for external. */
  as?: ElementType;
  className?: string;
  showArrow?: boolean;
  [key: string]: unknown;
};

/**
 * Shared button styling used across the site (CTASection, hero already has its own
 * styling left untouched per the "do not touch the hero" instruction). Two variants
 * matching the visual brief exactly:
 * - primary: white background, deep navy text, soft white glow on hover only
 * - glass: transparent dark glass, white text, subtle border, soft border-brighten on
 *   hover
 *
 * Hover lift (-2px) and glow are restrained per the brief's explicit "slight and
 * premium, not neon" instruction — these are noticeably softer than the reference
 * site's own button glow (which uses a stronger --shadow-glow value), adapted down
 * rather than copied wholesale, since the brief is explicit about avoiding anything
 * that reads as neon.
 */
export default function PremiumButton({
  children,
  variant = "primary",
  as: Component = "button",
  className = "",
  showArrow = false,
  ...rest
}: PremiumButtonProps) {
  // box-shadow and border-color (for the glass variant) are intentionally NOT set via
  // inline `style` below — an inline style always beats a stylesheet rule regardless of
  // specificity or :hover state, which would make the hover: Tailwind classes below
  // permanently unable to override them. Confirmed this was a real, reproducible bug
  // (not a test artifact) by checking getComputedStyle('border-color') before/after a
  // genuine Playwright .hover() call on the glass variant and seeing zero change. Base
  // border colour/shape now lives in baseClass instead, where the hover: variant classes
  // can actually win the cascade.
  const variantStyle =
    variant === "primary"
      ? {
          backgroundColor: "#ffffff",
          color: "#071a2d",
        }
      : {
          backgroundColor: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: "#f8fafc",
        };

  const variantClass =
    variant === "primary"
      ? "hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
      : "border border-[rgba(255,255,255,0.16)] hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.32)]";

  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 ${variantClass} ${className}`}
      style={variantStyle}
      {...rest}
    >
      {children}
      {showArrow && <ArrowRight size={16} aria-hidden="true" />}
    </Component>
  );
}

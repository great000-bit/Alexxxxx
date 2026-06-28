import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExpertiseArea } from "@/content/expertise";
import GlassCard from "./GlassCard";

export default function ExpertiseCard({
  area,
  index,
}: {
  area: ExpertiseArea;
  /** Zero-based position, rendered as a numeric label (01, 02...) instead of an icon. */
  index: number;
}) {
  return (
    <GlassCard as={Link} href={`/expertise#${area.slug}`} className="block p-6 h-full">
      <span className="font-[family-name:var(--font-heading)] text-sm font-semibold" style={{ color: "#5ac8a7" }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-base font-semibold" style={{ color: "#f8fafc" }}>
        {area.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
        {area.shortDescription}
      </p>
      <span
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
        style={{ color: "#5ac8a7" }}
      >
        Learn more
        <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </GlassCard>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExpertiseArea } from "@/content/expertise";

export default function ExpertiseCard({
  area,
  index,
}: {
  area: ExpertiseArea;
  /** Zero-based position, rendered as a numeric label (01, 02...) instead of an icon. */
  index: number;
}) {
  return (
    <Link
      href={`/expertise#${area.slug}`}
      className="group block rounded-2xl p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:[box-shadow:0_0_24px_rgba(90,200,167,0.18),0_24px_80px_rgba(0,0,0,0.22)] hover:[border-color:rgba(90,200,167,0.35)]"
      style={{
        backgroundColor: "rgba(7,18,32,0.58)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
      }}
    >
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
    </Link>
  );
}

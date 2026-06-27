import type { Publication } from "@/content/publications";

export default function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div
      className="rounded-xl p-5 border-l-[3px]"
      style={{
        backgroundColor: "rgba(7,18,32,0.5)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderLeftColor: "#c6a15b",
        borderLeftWidth: "3px",
      }}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#c6a15b" }}>
          {publication.category}
        </span>
        {publication.isPlaceholder && (
          <span className="text-xs italic" style={{ color: "#64748b" }}>
            Placeholder
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold mb-1.5 leading-snug" style={{ color: "#f8fafc" }}>
        {publication.title}
      </h3>
      <p className="text-xs" style={{ color: "#94a3b8" }}>
        {publication.venue}
        {publication.year ? ` · ${publication.year}` : ""}
      </p>
    </div>
  );
}

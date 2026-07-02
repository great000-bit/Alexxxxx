import type { Publication } from "@/content/publications";

export default function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div
      className="h-full flex flex-col rounded-xl p-5 border-l-[3px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(90,200,167,0.14)]"
      style={{
        backgroundColor: "rgba(7,18,32,0.5)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderLeftColor: "#c6a15b",
        borderLeftWidth: "3px",
      }}
    >
      <div className="mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#c6a15b" }}>
          {publication.category}
        </span>
      </div>
      <h3 className="text-sm font-semibold mb-1.5 leading-snug" style={{ color: "#f8fafc" }}>
        {publication.title}
      </h3>
      {(publication.venue || publication.year) && (
        <p className="text-xs mt-auto" style={{ color: "#94a3b8" }}>
          {publication.venue}
          {publication.venue && publication.year ? " · " : ""}
          {publication.year ?? ""}
        </p>
      )}
    </div>
  );
}

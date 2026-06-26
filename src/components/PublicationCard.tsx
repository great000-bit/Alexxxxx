import type { Publication } from "@/content/publications";

export default function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div className="rounded-lg border border-grey-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
          {publication.category}
        </span>
        {publication.isPlaceholder && (
          <span className="text-xs text-grey-400 italic">Placeholder</span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-navy-950 mb-1.5 leading-snug">{publication.title}</h3>
      <p className="text-xs text-grey-600">
        {publication.venue}
        {publication.year ? ` · ${publication.year}` : ""}
      </p>
    </div>
  );
}

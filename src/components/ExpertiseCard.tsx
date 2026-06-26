import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExpertiseArea } from "@/content/expertise";

export default function ExpertiseCard({ area }: { area: ExpertiseArea }) {
  return (
    <Link
      href={`/expertise#${area.slug}`}
      className="group block rounded-lg border border-grey-200 bg-white p-6 hover:border-emerald-500 transition-colors"
    >
      <h3 className="text-base font-semibold text-navy-950 mb-2">{area.title}</h3>
      <p className="text-sm text-grey-600 leading-relaxed mb-4">{area.shortDescription}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 group-hover:text-emerald-500">
        Learn more
        <ArrowRight size={14} aria-hidden="true" />
      </span>
    </Link>
  );
}

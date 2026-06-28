import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

/**
 * Premium glass-pill breadcrumb, per the brief's exact visual spec: translucent dark
 * background, blurred, soft border, uppercase-ish small labels, thin "/" separators (no
 * icon library), active/current page in soft white, prior steps in muted grey with a
 * hover state. The whole thing sits in a single rounded-full glass pill rather than
 * looking like a default browser-style breadcrumb trail.
 *
 * The final item in `items` is treated as the current page — rendered without a link
 * and in the brighter "active" colour, regardless of whether it has an href.
 */
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="inline-flex items-center gap-2 rounded-full text-xs"
        style={{
          backgroundColor: "rgba(255,255,255,0.055)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "10px 16px",
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.25)" }}>
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className="font-medium uppercase tracking-wide"
                  style={{ color: isLast ? "#5ac8a7" : "#f8fafc" }}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-medium uppercase tracking-wide transition-colors [color:#94a3b8] hover:[color:#f8fafc]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

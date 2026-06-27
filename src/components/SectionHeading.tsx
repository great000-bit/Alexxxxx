type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use when this heading sits on a light glass panel instead of the default dark glass. */
  onLight?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onLight = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold tracking-[0.14em] uppercase mb-3"
          style={{ color: onLight ? "#0e6b57" : "#5ac8a7" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-tight"
        style={{ color: onLight ? "#071a2d" : "#f8fafc" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: onLight ? "#475569" : "#cbd5e1" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

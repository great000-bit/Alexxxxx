type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-wider uppercase mb-3 ${
            light ? "text-emerald-400" : "text-emerald-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-bold tracking-tight ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-grey-200" : "text-grey-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

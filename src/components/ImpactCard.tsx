import GlassCard from "./GlassCard";

export default function ImpactCard({ title, description }: { title: string; description: string }) {
  return (
    <GlassCard className="h-full p-6">
      <h3 className="text-base font-semibold mb-2" style={{ color: "#f8fafc" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
        {description}
      </p>
    </GlassCard>
  );
}

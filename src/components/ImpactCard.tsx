export default function ImpactCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        backgroundColor: "rgba(7,18,32,0.58)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
      }}
    >
      <h3 className="text-base font-semibold mb-2" style={{ color: "#f8fafc" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
        {description}
      </p>
    </div>
  );
}

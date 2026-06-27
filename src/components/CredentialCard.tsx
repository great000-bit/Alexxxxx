export default function CredentialCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        backgroundColor: "rgba(7,18,32,0.5)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <p className="text-sm font-semibold" style={{ color: "#f8fafc" }}>
        {title}
      </p>
      <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>
        {detail}
      </p>
    </div>
  );
}

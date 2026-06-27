import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-20">
      <div
        className="text-center px-10 py-10 rounded-2xl"
        style={{
          backgroundColor: "rgba(7,18,32,0.58)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
        }}
      >
        <h1
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-3"
          style={{ color: "#f8fafc" }}
        >
          Page not found
        </h1>
        <p className="text-base mb-6" style={{ color: "#cbd5e1" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}

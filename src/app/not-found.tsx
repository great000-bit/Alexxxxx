import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-20">
      <GlassCard className="text-center px-10 py-10">
        <h1
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-3"
          style={{ color: "#f8fafc" }}
        >
          Page not found
        </h1>
        <p className="text-base mb-6" style={{ color: "#cbd5e1" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <PremiumButton as={Link} href="/" variant="primary" className="relative z-10">
          Return home
        </PremiumButton>
      </GlassCard>
    </section>
  );
}

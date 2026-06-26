import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white flex-1 flex items-center justify-center py-20">
      <div className="text-center px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-navy-950 mb-3">
          Page not found
        </h1>
        <p className="text-base text-grey-600 mb-6">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}

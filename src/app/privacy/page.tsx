import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Alexander Oburoh",
  description: "Privacy policy for the Alexander Oburoh website.",
};

// TODO: this is a generic placeholder, not a legally reviewed privacy policy. Replace
// with real policy content (and have it reviewed) before relying on it, especially once
// a real contact form backend collects and stores submitted data.
export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-24">
      <div
        className="mx-auto max-w-3xl px-6 lg:px-8 rounded-2xl p-8 sm:p-10"
        style={{
          backgroundColor: "rgba(7,18,32,0.58)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
        }}
      >
        <h1
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8"
          style={{ color: "#f8fafc" }}
        >
          Privacy Policy
        </h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
          <p>
            This is a placeholder privacy policy. It should be replaced with reviewed, accurate content
            describing what data this website collects (for example, contact form submissions) and how that
            data is stored, used, and protected.
          </p>
          <p>
            Information submitted through the contact form — name, email address, organisation, role, and
            message content — is used solely to respond to enquiries and is not shared with third parties.
          </p>
          <p>
            For questions about this policy, contact Alexander directly via the contact page.
          </p>
        </div>
      </div>
    </section>
  );
}

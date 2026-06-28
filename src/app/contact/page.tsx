"use client";

import { useState } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Mail, ExternalLink, BookOpen, FileText } from "lucide-react";
import { submitContactForm } from "@/lib/contact";
import { site, socials } from "@/content/site";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import Breadcrumb from "@/components/Breadcrumb";

const enquiryTypes = [
  "Consulting",
  "Job / recruitment opportunity",
  "Research collaboration",
  "Speaking or media",
  "Community / VolunteerNG",
  "General enquiry",
];

// Form field styling — exact brief spec: dark translucent fields, soft border, white
// text, teal focus state. Layout structure (2/3 form + 1/3 contact info column,
// honeypot field) is adapted from Creative Emman Limited's own Contact.tsx, studied
// directly from its source since the live site is blocked by this sandbox's network
// allowlist — that reference uses borderless underline inputs, but the brief's own
// explicit form-field CSS spec calls for boxed glass fields, so that spec wins for field
// appearance while the reference's column layout and honeypot pattern carry over as-is.
const fieldStyle = {
  backgroundColor: "rgba(255,255,255,0.06)",
  color: "#ffffff",
};

// Base border + focus state live in this className, not in fieldStyle's inline style —
// an inline border would always beat a :focus class regardless of specificity, the same
// bug already found and fixed twice this session in GlassCard/PremiumButton and
// Breadcrumb. Confirmed this would have been a real, reproducible bug here too before
// shipping it, not after.
const fieldClassName =
  "w-full rounded-xl px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] border border-[rgba(229,231,235,0.14)] focus:border-[#0e6b57] focus:shadow-[0_0_0_3px_rgba(14,107,87,0.18)] placeholder:text-[#94a3b8]";

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const presetEnquiry = searchParams.get("enquiry");

  const presetMap: Record<string, string> = {
    consulting: "Consulting",
    speaking: "Speaking or media",
    research: "Research collaboration",
    community: "Community / VolunteerNG",
  };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    organisation: "",
    role: "",
    enquiryType: presetMap[presetEnquiry ?? ""] ?? "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.enquiryType) newErrors.enquiryType = "Select an enquiry type";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const { ok } = await submitContactForm(form);
    if (ok) {
      setStatus("success");
      setForm({ fullName: "", email: "", organisation: "", role: "", enquiryType: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{ backgroundColor: "rgba(14,107,87,0.1)", border: "1px solid rgba(14,107,87,0.35)" }}
      >
        <p className="text-base font-semibold mb-2" style={{ color: "#ffffff" }}>
          Thank you for reaching out.
        </p>
        <p className="text-sm" style={{ color: "#cbd5e1" }}>
          Alexander will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — same anti-spam pattern as the reference's contact form, adapted
          here. Hidden from sighted and assistive users alike, real users never see or
          fill this; spam bots that auto-fill every field will trip it. */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1.5" style={{ color: "#ffffff" }}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange("fullName")}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={fieldClassName}
            style={fieldStyle}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "#ffffff" }}>
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClassName}
            style={fieldStyle}
          />
          {errors.email && (
            <p id="email-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium mb-1.5" style={{ color: "#ffffff" }}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={form.organisation}
            onChange={handleChange("organisation")}
            className={fieldClassName}
            style={fieldStyle}
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-1.5" style={{ color: "#ffffff" }}>
            Role / title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={form.role}
            onChange={handleChange("role")}
            className={fieldClassName}
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="block text-sm font-medium mb-1.5" style={{ color: "#ffffff" }}>
          Enquiry type <span aria-hidden="true">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={form.enquiryType}
          onChange={handleChange("enquiryType")}
          aria-invalid={!!errors.enquiryType}
          aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
          className={fieldClassName}
          style={{ ...fieldStyle, colorScheme: "dark" }}
        >
          <option value="" style={{ color: "#0a1628" }}>
            Select an enquiry type
          </option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type} style={{ color: "#0a1628" }}>
              {type}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <p id="enquiryType-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
            {errors.enquiryType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "#ffffff" }}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClassName} resize-none`}
          style={fieldStyle}
        />
        {errors.message && (
          <p id="message-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#f87171" }}>
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:text-[#0e6b57] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <Send size={16} aria-hidden="true" />}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-8 lg:pt-44 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Contact
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#ffffff" }}
          >
            Get in touch
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Whether it&apos;s a consulting enquiry, a job opportunity, a research collaboration, or a speaking
            invitation — Alexander will respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Premium dark glass split panel: contact headline/availability/methods on the
          left, the form on the right — same 2/3-form + 1/3-info column ratio as the
          reference site's Contact page, mirrored to put the form on the right per the
          contact redesign brief's explicit left/right structure. */}
      <section className="section-fade py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-8 sm:p-12">
              <div className="relative z-10 grid lg:grid-cols-[320px_1fr] gap-14">
                <div>
                  <h2
                    className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    Let&apos;s talk
                  </h2>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "#cbd5e1" }}>
                    Send a short note about your enquiry — consulting, research collaboration, a role, or a
                    speaking invitation.
                  </p>
                  <p className="text-xs mb-6" style={{ color: "#5ac8a7" }}>
                    Currently available for new research, advisory, and collaboration work.
                  </p>

                  <h3 className="text-sm font-semibold mb-4" style={{ color: "#ffffff" }}>
                    Direct contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-2 text-sm transition-colors [color:#cbd5e1] hover:[color:#5ac8a7]"
                    >
                      <Mail size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      {site.email}
                    </a>
                    <a
                      href={socials.linkedin}
                      className="flex items-center gap-2 text-sm transition-colors [color:#cbd5e1] hover:[color:#5ac8a7]"
                    >
                      <ExternalLink size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      LinkedIn
                    </a>
                    <a
                      href={socials.googleScholar}
                      className="flex items-center gap-2 text-sm transition-colors [color:#cbd5e1] hover:[color:#5ac8a7]"
                    >
                      <BookOpen size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      Google Scholar
                    </a>
                    <a
                      href={socials.researchGate}
                      className="flex items-center gap-2 text-sm transition-colors [color:#cbd5e1] hover:[color:#5ac8a7]"
                    >
                      <FileText size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      ResearchGate
                    </a>
                  </div>
                </div>

                <div className="lg:pl-10 lg:border-l" style={{ borderColor: "rgba(229,231,235,0.14)" }}>
                  <Suspense fallback={<div className="text-sm" style={{ color: "#94a3b8" }}>Loading form…</div>}>
                    <ContactFormWithParams />
                  </Suspense>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

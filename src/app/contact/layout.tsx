import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact Dr. Alexander Oburoh | Research & Advisory Enquiries" },
  description:
    "Contact Dr. Alexander Oburoh for consulting, research collaboration, speaking, media, technical advisory, and sustainability enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

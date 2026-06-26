import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Alexander Oburoh",
  description:
    "Get in touch with Alexander Oburoh for consulting, research collaboration, job opportunities, speaking, or general enquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalEnergyBackground from "@/components/GlobalEnergyBackground";
import MotionProvider from "@/components/MotionProvider";
import { site } from "@/content/site";

// Body text + buttons, per the typography revision brief (previously Inter).
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Major headings, per the typography revision brief (previously Montserrat handled
// headings too — Space Grotesk now takes that role specifically).
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortTitle}`,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.shortTitle,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <GlobalEnergyBackground />
          <Header />
          {/* pt-24 clears the fixed floating nav (~80px tall) with a little breathing room
              beneath it — applied here once so every page gets consistent clearance rather
              than each page guessing its own top padding. */}
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

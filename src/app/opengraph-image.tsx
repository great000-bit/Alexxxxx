import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: this is a generated placeholder OG image (navy background, brand name and
// positioning statement, no real photo or designed graphic). Replace with a properly
// designed Open Graph image once one exists — see the PRD's request for an abstract
// hydrogen/energy-network visual rather than a generic graphic.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a1628",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, color: "#34d399", fontWeight: 600, marginBottom: 24 }}>
          {site.professionalTitle}
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15, maxWidth: 980 }}>
          {site.positioningStatement}
        </div>
        <div style={{ fontSize: 24, color: "#9aa3ad", marginTop: 32 }}>{site.tagline}</div>
      </div>
    ),
    { ...size },
  );
}

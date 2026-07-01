import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Real portrait now exists (public/images/alexander-oburoh.jpg), so the OG image pairs
// it with the positioning statement instead of relying on text alone.
export default async function OpengraphImage() {
  const photoData = await readFile(join(process.cwd(), "public/images/alexander-oburoh.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "72px",
          backgroundColor: "#071a2d",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 26, color: "#5ac8a7", fontWeight: 600, marginBottom: 22 }}>
            {site.professionalTitle}
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.15 }}>
            {site.positioningStatement}
          </div>
          <div style={{ fontSize: 22, color: "#94a3b8", marginTop: 28 }}>{site.tagline}</div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={340}
          height={340}
          style={{
            marginLeft: "auto",
            borderRadius: 28,
            objectFit: "cover",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

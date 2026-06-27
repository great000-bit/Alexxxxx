import Marquee from "./Marquee";
import { credentialMarqueeItems } from "@/content/site";

export default function CredibilityBar() {
  return (
    <section
      className="py-6"
      style={{
        backgroundColor: "rgba(255,255,255,0.045)",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Marquee items={[...credentialMarqueeItems]} durationSeconds={38} />
    </section>
  );
}

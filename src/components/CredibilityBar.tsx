import Marquee from "./Marquee";
import { credentialMarqueeItems } from "@/content/site";

export default function CredibilityBar() {
  return (
    <section
      className="py-6 marquee-fade-mask"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Marquee items={[...credentialMarqueeItems]} durationSeconds={38} />
    </section>
  );
}

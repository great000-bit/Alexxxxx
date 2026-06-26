import EnergyNetworkVisual from "./EnergyNetworkVisual";

/**
 * Hero profile card. No real headshot exists yet — per direct instruction, this uses an
 * "AO" monogram over the abstract energy-network visual rather than a stock or
 * AI-generated photo of a person. To swap in a real photo later: replace the contents of
 * the monogram circle below with an <Image> of the headshot, keeping the same card
 * wrapper/border/glow treatment for visual consistency.
 */
export default function ProfileCard() {
  return (
    <div className="relative rounded-2xl border border-emerald-500/20 bg-navy-900/60 p-8 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <EnergyNetworkVisual className="w-full h-full" />
      </div>
      <div className="relative flex flex-col items-center text-center py-6">
        <div className="w-24 h-24 rounded-full border-2 border-emerald-400/40 bg-navy-950 flex items-center justify-center mb-5">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-emerald-400">
            AO
          </span>
        </div>
        <p className="text-sm font-semibold text-white">Alexander Oburoh</p>
        <p className="text-xs text-grey-400 mt-1">PhD, Robert Gordon University</p>
      </div>
    </div>
  );
}

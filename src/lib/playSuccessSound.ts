/**
 * Plays a very short, soft "pop" confirmation sound using the Web Audio API — no audio
 * file, no external CDN. Only ever called after a successful form submission (a real user
 * interaction), never on page load. Every failure mode (no AudioContext support, browser
 * autoplay policy blocking it, etc.) is swallowed silently so it can never break the
 * success modal it's paired with.
 */
export function playSuccessSound() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    // A quick upward two-note pop — soft "confirmation" feel rather than a flat beep.
    oscillator.frequency.setValueAtTime(720, now);
    oscillator.frequency.exponentialRampToValueAtTime(980, now + 0.09);

    // Keep it quiet and short — fades in fast, out faster, total under 250ms.
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.24);

    oscillator.onended = () => {
      ctx.close().catch(() => {});
    };
  } catch {
    // Never let a sound failure affect the success flow.
  }
}

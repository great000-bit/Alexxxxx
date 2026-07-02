type IconProps = {
  size?: number;
  className?: string;
};

/** LinkedIn — rounded badge with the familiar "in" mark. */
export function LinkedInIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="22" height="22" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7.2" cy="7.6" r="1.6" fill="currentColor" />
      <rect x="6.1" y="10.4" width="2.2" height="8" rx="0.4" fill="currentColor" />
      <path
        d="M11.3 10.4h2.2v1.15c.55-.85 1.5-1.4 2.7-1.4 2.2 0 3.3 1.5 3.3 3.9v4.35h-2.2v-3.95c0-1.15-.45-1.95-1.55-1.95-.85 0-1.35.55-1.6 1.1-.08.2-.1.45-.1.75v4.05h-2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Medium — simplified circle/ellipse/sliver mark in the spirit of the Medium logo. */
export function MediumIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6.3" cy="12" r="5.3" fill="currentColor" />
      <ellipse cx="14.7" cy="12" rx="3" ry="5.3" fill="currentColor" />
      <ellipse cx="20.6" cy="12" rx="1.3" ry="5.3" fill="currentColor" />
    </svg>
  );
}

/** Google Scholar — simplified graduation-cap mark. */
export function GoogleScholarIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 1 9.5l11 6.5 9-5.32V17h2V9.5L12 3z" fill="currentColor" />
      <path
        d="M5.5 12.3v4.2c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-4.2l-6.5 3.85-6.5-3.85z"
        fill="currentColor"
      />
    </svg>
  );
}

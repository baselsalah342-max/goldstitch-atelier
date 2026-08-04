export function PhoenixMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g className="embroidery-line">
        <path d="M100 168c-2-34 6-62 24-84 14-17 32-26 52-28-8 20-13 38-24 52" />
        <path d="M100 168c2-34-6-62-24-84C62 67 44 58 24 56c8 20 13 38 24 52" />
        <path d="M100 168c0-26 3-48 10-66 5-14 12-25 21-34" />
        <path d="M100 168c0-26-3-48-10-66-5-14-12-25-21-34" />
        <path d="M84 44c5-9 11-16 16-22 5 6 11 13 16 22" />
        <circle cx="100" cy="118" r="26" opacity="0.5" />
      </g>
    </svg>
  );
}

export function DragonMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g className="embroidery-line">
        <path d="M28 150c26 12 48 4 58-18 9-20 1-38-16-42-14-3-25 6-25 18 0 10 8 17 17 15" />
        <path d="M86 132c16 14 36 16 54 4 20-13 26-38 14-56-9-14-26-19-38-11" />
        <path d="M116 69c-6-12-2-24 8-30 3 12 10 18 20 20-8 5-12 12-11 22" />
        <path d="M150 60c10-6 22-4 28 6-10 1-16 6-18 15" />
        <path d="M64 160c22 10 44 8 62-6" opacity="0.45" />
      </g>
    </svg>
  );
}

export function SerpentMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g className="embroidery-line">
        <path d="M100 26c34 0 60 26 60 58s-26 56-58 56-52-20-52-44 18-40 40-40 34 14 34 30-12 26-24 26-20-8-20-17 6-14 13-14" />
        <path d="M100 26c-22 1-40 9-52 22" opacity="0.5" />
        <path d="M60 176c26 8 54 6 80-8" opacity="0.4" />
      </g>
    </svg>
  );
}

export function CrestMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true">
      <g className="embroidery-line">
        <circle cx="150" cy="150" r="104" />
        <circle cx="150" cy="150" r="86" opacity="0.4" />
        <path d="M150 236c-6-46 6-84 34-112 20-20 44-30 68-32-10 28-18 52-34 70" />
        <path d="M150 236c6-46-6-84-34-112C96 104 72 94 48 92c10 28 18 52 34 70" />
        <path d="M150 236c0-36 4-64 12-86 6-16 14-30 24-42" />
        <path d="M150 236c0-36-4-64-12-86-6-16-14-30-24-42" />
        <path d="M126 78c8-14 16-25 24-33 8 8 16 19 24 33" />
      </g>
    </svg>
  );
}

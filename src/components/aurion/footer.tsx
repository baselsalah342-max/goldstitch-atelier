export function Footer() {
  return (
    <footer
      className="mt-[var(--section-spacing)] px-[var(--page-padding)] py-8 text-center"
      style={{ borderTop: "1px solid rgba(176, 141, 87, 0.16)" }}
    >
      <p
        className="font-mono text-[0.68rem] uppercase"
        style={{ letterSpacing: "0.22em", color: "rgba(232, 226, 213, 0.45)" }}
      >
        AURION — Cairo · est. 2026
      </p>
    </footer>
  );
}

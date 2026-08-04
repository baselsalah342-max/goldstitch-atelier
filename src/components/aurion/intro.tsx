import { useCallback, useEffect, useState } from "react";
import { CrestMotif } from "./emblems";

const FULL_DURATION = 5500;

export function Intro({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const [reduced, setReduced] = useState(false);

  const finish = useCallback(() => {
    setLeaving((was) => {
      if (!was) window.setTimeout(onDone, 900);
      return true;
    });
  }, [onDone]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const short = window.sessionStorage.getItem("aurion-intro-seen") === "1";
    setReduced(mq.matches || short);
    window.sessionStorage.setItem("aurion-intro-seen", "1");
    const total = mq.matches || short ? 1400 : FULL_DURATION;
    const t = window.setTimeout(finish, total);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [finish]);

  return (
    <div
      onClick={finish}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0908]"
      style={{
        transform: leaving ? "translateY(-100%)" : "translateY(0)",
        opacity: leaving ? 0 : 1,
        transition: "transform 0.9s cubic-bezier(0.76,0,0.24,1), opacity 0.6s ease",
      }}
    >
      <div className={reduced ? "intro-emblem intro-static" : "intro-emblem"}>
        <CrestMotif className="h-[clamp(11rem,32vw,17rem)] w-[clamp(11rem,32vw,17rem)]" />
      </div>

      <h1
        className="mt-10 text-center"
        style={{
          fontFamily: '"Fraunces", serif',
          fontWeight: 600,
          letterSpacing: "0.42em",
          fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
          color: "#d4b483",
          opacity: 0,
          animation: reduced
            ? "wordmarkReveal 0.5s ease forwards"
            : "wordmarkReveal 0.8s ease 4.1s forwards",
        }}
      >
        AURION
      </h1>

      <p
        className="mt-4"
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          textTransform: "uppercase",
          letterSpacing: "0.24em",
          fontSize: "0.65rem",
          color: "#b08d57",
          opacity: 0,
          animation: reduced
            ? "captionReveal 0.5s ease forwards"
            : "captionReveal 0.5s ease 4.6s forwards",
        }}
      >
        Stitched, not printed
      </p>

      {!reduced && (
        <span
          aria-hidden
          className="mt-8 block h-16 w-px origin-top"
          style={{
            background: "linear-gradient(180deg, rgba(176,141,87,0.8), transparent)",
            transform: "scaleY(0)",
            animation: "threadDrop 0.5s cubic-bezier(0.76,0,0.24,1) 5.05s forwards",
          }}
        />
      )}

      <button
        type="button"
        onClick={finish}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0"
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontSize: "0.65rem",
          color: "rgba(232, 226, 213, 0.45)",
        }}
      >
        Skip intro
      </button>
    </div>
  );
}

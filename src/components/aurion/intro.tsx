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
    setReduced(mq.matches);
    const short = window.sessionStorage.getItem("aurion-intro-seen") === "1";
    window.sessionStorage.setItem("aurion-intro-seen", "1");
    const total = mq.matches || short ? 1200 : FULL_DURATION;
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

  const draw = reduced
    ? undefined
    : {
        strokeDasharray: 1400,
        strokeDashoffset: 1400,
        animation: "stitchDraw 3s cubic-bezier(0.65,0,0.35,1) 0.4s forwards",
      };

  return (
    <div
      onClick={finish}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0908]"
      style={{
        transform: leaving ? "translateY(-100%)" : "translateY(0)",
        opacity: leaving ? 0 : 1,
        transition:
          "transform 0.9s cubic-bezier(0.76,0,0.24,1), opacity 0.6s ease",
      }}
    >
      <div
        className="relative"
        style={{
          opacity: 0,
          animation: reduced
            ? "emblemFill 0.4s ease forwards"
            : "emblemFill 0.7s ease 3.4s forwards",
        }}
      >
        <CrestMotif className="h-[clamp(11rem,32vw,17rem)] w-[clamp(11rem,32vw,17rem)] [&_.embroidery-line]:opacity-100 [&_path]:[filter:drop-shadow(0_0_12px_rgba(176,141,87,0.28))] [&_circle]:[filter:drop-shadow(0_0_12px_rgba(176,141,87,0.28))]" />
        <CrestMotif
          className="absolute inset-0 [&_.embroidery-line]:opacity-100 [&_.embroidery-line]:[stroke-width:1.4]"
          {...({} as object)}
        />
        {!reduced && (
          <style>{`
            .aurion-intro-hidden { display: none; }
          `}</style>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={draw ? undefined : undefined}
        />
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
            background:
              "linear-gradient(180deg, rgba(176,141,87,0.8), transparent)",
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

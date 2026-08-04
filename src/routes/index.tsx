import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "../components/aurion/nav";
import { Footer } from "../components/aurion/footer";
import { Intro } from "../components/aurion/intro";
import {
  CrestMotif,
  DragonMotif,
  PhoenixMotif,
  SerpentMotif,
} from "../components/aurion/emblems";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURION — Gold-Thread Streetwear, Stitched Not Printed" },
      {
        name: "description",
        content:
          "Heavyweight hoodies and sweaters, hand-embroidered with mythic creatures in gold thread. Slow-made in Cairo, quietly loud.",
      },
      { property: "og:title", content: "AURION — Woven in gold, worn in silence" },
      {
        property: "og:description",
        content:
          "A limited run of hand-embroidered heavyweight pieces. Gold thread, mythic forms, quiet presence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const products = [
  {
    tag: "Hoodie",
    title: "Phoenix Embroidered Hoodie",
    price: "EGP 4,800",
    Motif: PhoenixMotif,
  },
  {
    tag: "Sweater",
    title: "Dragon Thread Sweater",
    price: "EGP 5,200",
    Motif: DragonMotif,
  },
  {
    tag: "Hoodie",
    title: "Serpent Crest Hoodie",
    price: "EGP 4,600",
    Motif: SerpentMotif,
  },
];

function Home() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone]);

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Nav />
      <main>
        <Hero />
        <Collection />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      className="relative grid min-h-[100svh] items-center overflow-hidden"
      style={{
        padding: "8rem var(--page-padding) 4rem",
        background:
          "radial-gradient(circle at 50% 0%, rgba(176,141,87,0.18), transparent 34rem), radial-gradient(circle at 80% 40%, rgba(176,141,87,0.06), transparent 24rem), #0a0908",
      }}
    >
      <CrestMotif
        className="pointer-events-none absolute right-[-6vw] top-1/2 hidden h-[46rem] w-[46rem] -translate-y-1/2 opacity-40 lg:block"
      />
      <div className="relative mx-auto w-full max-w-[var(--max-width)]">
        <p
          className="rise mono-label"
          style={{ letterSpacing: "0.24em", color: "#b08d57", animationDelay: "120ms" }}
        >
          Gold-thread streetwear
        </p>

        <h1
          className="rise mt-8 max-w-[16ch]"
          style={{
            fontSize: "clamp(3.6rem, 12vw, 11rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.055em",
            color: "#e8e2d5",
            animationDelay: "240ms",
          }}
        >
          Woven in <em>gold</em>,<br />
          worn in silence
        </h1>

        <p
          className="rise mt-10 max-w-[34rem]"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            color: "rgba(232, 226, 213, 0.58)",
            animationDelay: "380ms",
          }}
        >
          Heavyweight hoodies and sweaters, each piece hand-embroidered with mythic
          creatures in gold thread. Slow-made, quietly loud.
        </p>

        <div className="rise mt-12" style={{ animationDelay: "520ms" }}>
          <a href="#collection" className="thread-btn">
            View the collection
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 hidden h-[4.5rem] w-px -translate-x-1/2 md:block"
        style={{ background: "rgba(176, 141, 87, 0.22)" }}
      >
        <span
          className="absolute left-1/2 top-0 block h-1 w-1 -translate-x-1/2 rounded-full"
          style={{
            background: "#d4b483",
            animation: "scrollDot 1.8s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

function Collection() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = rail.scrollWidth - rail.clientWidth;
      const next = rail.scrollLeft + e.deltaY;
      if (next <= 0 || next >= max) return;
      e.preventDefault();
      rail.scrollLeft = next;
    };

    let down = false;
    let startX = 0;
    let startScroll = 0;
    const onDown = (e: PointerEvent) => {
      down = true;
      startX = e.clientX;
      startScroll = rail.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      rail.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onUp = () => {
      down = false;
    };

    rail.addEventListener("wheel", onWheel, { passive: false });
    rail.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      rail.removeEventListener("wheel", onWheel);
      rail.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <section id="collection" className="py-[var(--section-spacing)]">
      <div className="shell flex flex-wrap items-end justify-between gap-6">
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            color: "#e8e2d5",
            letterSpacing: "-0.045em",
          }}
        >
          Current drop
        </h2>
        <p className="mono-label" style={{ color: "#b08d57" }}>
          03 pieces / limited run
        </p>
      </div>

      <div
        className="mt-10 h-px"
        style={{ background: "rgba(176, 141, 87, 0.16)" }}
        aria-hidden
      />

      <div
        ref={railRef}
        className="rail mt-14 px-[var(--page-padding)]"
        tabIndex={0}
        aria-label="Collection"
      >
        {products.map(({ tag, title, price, Motif }) => (
          <article
            key={title}
            tabIndex={0}
            className="group scroll-ml-[var(--page-padding)] snap-start rounded-[1.4rem] p-3 transition-[border-color,box-shadow] duration-700"
            style={{
              background: "rgba(232, 226, 213, 0.025)",
              border: "1px solid rgba(176, 141, 87, 0.14)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[1rem]"
              style={{
                aspectRatio: "4 / 5",
                background:
                  "radial-gradient(circle at 50% 35%, rgba(176,141,87,0.22), transparent 58%), linear-gradient(145deg, #11100f, #0a0908)",
                boxShadow:
                  "inset 0 0 80px rgba(0,0,0,0.65), 0 24px 80px rgba(0,0,0,0.28)",
              }}
            >
              <div className="absolute inset-0 grid place-items-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-[1.045] group-focus-visible:scale-[1.045]">
                <Motif className="product-emblem h-2/3 w-2/3" />
              </div>
            </div>

            <div className="px-2 pb-3 pt-6">
              <p
                className="font-mono text-[0.68rem] uppercase"
                style={{ letterSpacing: "0.22em", color: "#b08d57" }}
              >
                {tag}
              </p>
              <h3 className="mt-3 text-2xl" style={{ color: "#e8e2d5" }}>
                {title}
              </h3>
              <p
                className="mt-3 font-mono text-[0.72rem]"
                style={{ letterSpacing: "0.18em", color: "rgba(232,226,213,0.42)" }}
              >
                {price}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p
        className="shell mono-label mt-2"
        style={{ color: "rgba(232, 226, 213, 0.28)" }}
      >
        Drag sideways
      </p>
    </section>
  );
}

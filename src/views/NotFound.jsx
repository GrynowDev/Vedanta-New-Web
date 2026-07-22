"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Reveal, Overline } from "../components/Reveal";
import { MEDIA } from "../data";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden" data-testid="notfound-page">
      <img src={MEDIA.mistyForest} alt="Kufri forest" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-forest-deep/70" />
      <div className="relative z-10 px-6 text-center">
        <Reveal><Overline>404 — Off the Trail</Overline></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-serif-display text-5xl font-light leading-none text-ivory sm:text-7xl">
            This path leads<br />into the fog.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-md font-body text-lg font-light leading-relaxed text-ivory/70">
            The page you were looking for has wandered off. Let us walk you back to the mountain.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <button
            data-testid="notfound-home-btn"
            onClick={() => router.push("/")}
            className="mt-12 rounded-full bg-gold px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-forest transition-colors duration-300 hover:bg-ivory"
          >
            Return to Vedanta
          </button>
        </Reveal>
      </div>
    </section>
  );
}

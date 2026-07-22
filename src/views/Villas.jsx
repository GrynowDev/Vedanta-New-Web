"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import SwipeCarousel from "../components/SwipeCarousel";
import { MEDIA, VILLA_SPECS, VILLA_FEATURES, RESIDENCES, FLOOR_PLANS } from "../data";

export default function Villas() {
  const router = useRouter();
  return (
    <div className="bg-forest-deep" data-testid="villas-page">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <img src={MEDIA.villaExterior1} alt="Vedanta villa exterior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forest-deep/55" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 sm:px-10">
          <Reveal><Overline>The Residences</Overline></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-serif-display text-5xl font-light leading-none text-ivory sm:text-7xl">
              Eight residences.<br />Endless sky.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Specs */}
      <section className="px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {VILLA_SPECS.map((s, i) => (
              <Reveal key={s.label} delay={0.06 * i}>
                <div className="border-t border-gold/20 pt-5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-display text-4xl text-gold sm:text-5xl">{s.value}</span>
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-ivory/50">{s.unit}</span>
                  </div>
                  <p className="mt-1 font-body text-sm text-ivory/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior editorial */}
      <section className="px-6 pb-24 sm:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="img-zoom-wrap rounded-3xl">
            <img src={MEDIA.livingRoom1} alt="Double-height living room" className="img-zoom h-[620px] w-full rounded-3xl object-cover" />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal><Overline>Craftsmanship</Overline></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-tight text-ivory sm:text-5xl">
                Materials chosen to age with grace.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-ivory/70">
                Italian Stonex floors, engineered wood, teak wardrobes and Kohler fittings — every
                surface selected for a lifetime of quiet luxury.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {VILLA_FEATURES.map((f, i) => (
                <Reveal key={f} delay={0.04 * i}>
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-gold" strokeWidth={1.5} />
                    <span className="font-body text-sm font-light text-ivory/75">{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Residences swipe */}
      <section className="overflow-hidden bg-section py-24 lg:py-32" data-testid="villas-residences">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <Reveal><Overline>The Collection</Overline></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-tight text-ivory sm:text-5xl">
                Wander, room by room.
              </h2>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.2} className="mt-14">
          <SwipeCarousel items={RESIDENCES} variant="showcase" testid="villas-residence-carousel" />
        </Reveal>
      </section>

      {/* Floor plans swipe */}
      <section className="bg-section px-6 py-24 sm:px-10 lg:py-32" data-testid="floorplans-section">
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal><Overline>Floor Plans</Overline></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-tight text-ivory sm:text-5xl">
                Space, considered on every level.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-14">
            <SwipeCarousel items={FLOOR_PLANS} variant="plans" testid="floorplan-carousel" />
          </Reveal>

          <div className="mx-auto mt-20 grid max-w-3xl gap-6 font-body text-sm text-ivory/70 sm:grid-cols-2">
            <div className="flex justify-between border-b border-gold/15 pb-4">
              <span>Carpet Area</span><span className="text-ivory">3,920 sq.ft</span>
            </div>
            <div className="flex justify-between border-b border-gold/15 pb-4">
              <span>Built-up Area</span><span className="text-ivory">5,590 sq.ft</span>
            </div>
            <div className="flex justify-between border-b border-gold/15 pb-4">
              <span>Personal Lawn</span><span className="text-ivory">1,800 sq.ft</span>
            </div>
            <div className="flex justify-between border-b border-gold/15 pb-4">
              <span>Structure</span><span className="text-ivory">3 Storeys · RCC</span>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Reveal delay={0.3}>
              <button
                data-testid="villas-enquire-btn"
                onClick={() => router.push("/contact")}
                className="rounded-full bg-gold px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-forest transition-colors duration-300 hover:bg-ivory"
              >
                Request Availability
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

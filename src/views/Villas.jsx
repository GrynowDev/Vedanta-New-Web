"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import EnquiryPopup, { openEnquiryPopup } from "../components/EnquiryPopup";
import {
  MEDIA,
  BROCHURE,
  VILLA_SPECS,
  VILLA_FEATURES,
  RESIDENCES,
  FLOOR_PLANS,
} from "../data";

const FLOOR_SUMMARY = [
  { label: "Carpet Area", value: "3,920 sq.ft" },
  { label: "Built-up Area", value: "5,590 sq.ft" },
  { label: "Personal Lawn", value: "1,800 sq.ft" },
  { label: "Structure", value: "3 Storeys · RCC" },
];

export default function Villas() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="bg-forest-deep" data-testid="villas-page">
      {/* ---------------- HERO ---------------- */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] w-full overflow-hidden"
        data-testid="villas-hero"
      >
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={MEDIA.villaExterior1}
            alt="Vedanta villa exterior at twilight"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-forest-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/75 via-forest-deep/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/30" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:pb-24"
        >
          <Reveal>
            <p className="font-serif-display text-2xl font-semibold tracking-[0.16em] text-ivory sm:text-[26px]">
              VEDANTA
            </p>
            <p className="mt-2 font-body text-[10px] uppercase tracking-[0.34em] text-gold sm:text-[11px]">
              by Vaishno Group · The Residences
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-8 max-w-4xl font-serif-display text-5xl font-light leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl xl:text-8xl">
              Eight residences.
              <br />
              Endless sky.
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-6 max-w-xl font-body text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
              Neo-classical mansions at 8,500 ft — stone, teak, and glass turned
              toward the Himalaya. Room enough to gather; quiet enough to hear
              yourself think.
            </p>
          </Reveal>

          <Reveal
            delay={0.32}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              data-testid="villas-hero-enquire"
              onClick={openEnquiryPopup}
              className="rounded-full bg-ivory px-7 py-3.5 font-body text-sm font-semibold text-forest transition-colors duration-200 hover:bg-white"
            >
              Enquire about a stay
            </button>
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 font-body text-sm font-medium text-ivory/85 transition-colors hover:text-ivory"
            >
              Explore the spaces
              <ArrowDown
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </Reveal>
        </motion.div>
      </section>

      {/* ---------------- SPECS ---------------- */}
      <section
        className="border-y border-gold/10 px-6 py-14 sm:px-10 lg:py-16"
        data-testid="villas-specs"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {VILLA_SPECS.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-display text-4xl font-light text-gold sm:text-5xl">
                    {s.value}
                  </span>
                  <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ivory/45">
                    {s.unit}
                  </span>
                </div>
                <p className="mt-2 font-body text-sm text-ivory/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- CRAFT ---------------- */}
      <section
        className="px-6 py-20 sm:px-10 lg:py-28"
        data-testid="villas-craft"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden">
              <img
                src={MEDIA.livingRoom1}
                alt="Double-height living room"
                className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[5/4] lg:aspect-[4/3] lg:h-[640px]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal>
              <Overline>Craftsmanship</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
                Materials chosen
                <br />
                to age with grace.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-ivory/70 sm:text-lg">
                Italian Stonex floors, engineered wood, teak wardrobes, and Kohler
                fittings — every surface selected for a lifetime of quiet luxury
                at altitude.
              </p>
            </Reveal>
            <ul className="mt-10 space-y-4">
              {VILLA_FEATURES.slice(0, 6).map((f, i) => (
                <Reveal key={f} delay={0.04 * i}>
                  <li className="flex items-start gap-3 border-t border-gold/10 pt-4">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={1.6}
                    />
                    <span className="font-body text-sm font-light leading-relaxed text-ivory/75">
                      {f}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- COLLECTION ---------------- */}
      <section
        id="collection"
        className="px-6 py-20 sm:px-10 lg:py-28"
        data-testid="villas-residences"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <Reveal>
              <Overline>The Collection</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
                Wander, room
                <br />
                by room.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
                From the facade at dusk to the private bar at last light — the
                spaces that shape a stay at Vedanta.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
            {RESIDENCES.map((item, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={item.slug} delay={0.04}>
                  <article
                    className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
                    data-testid={`residence-row-${item.slug}`}
                  >
                    <div
                      className={`overflow-hidden lg:col-span-7 ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="aspect-[16/11] h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:aspect-[3/2]"
                      />
                    </div>
                    <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                      <p className="font-body text-[11px] uppercase tracking-[0.28em] text-gold">
                        {item.badge}
                        <span className="mx-2 text-ivory/25">·</span>
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {String(RESIDENCES.length).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 font-serif-display text-3xl font-light text-ivory sm:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 font-body text-base font-light leading-relaxed text-ivory/65">
                        {item.caption}
                      </p>
                      <p className="mt-6 font-body text-sm text-ivory/50">
                        <span className="text-gold">{item.area}</span>
                        <span className="mx-2 text-ivory/25">·</span>
                        {item.location}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- FLOOR PLANS ---------------- */}
      <section
        className="bg-[#0E1C16] px-6 py-20 sm:px-10 lg:py-28"
        data-testid="floorplans-section"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <Reveal>
              <Overline>Floor Plans</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
                Space, considered
                <br />
                on every level.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {FLOOR_PLANS.map((plan, i) => (
              <Reveal key={plan.title} delay={0.06 * i}>
                <article className="group bg-parchment p-5 sm:p-6">
                  <div className="overflow-hidden bg-white">
                    <img
                      src={plan.img}
                      alt={plan.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] sm:p-4"
                    />
                  </div>
                  <h3 className="mt-5 font-serif-display text-2xl text-ink">
                    {plan.title}
                  </h3>
                  <p className="mt-2 font-body text-sm font-light leading-relaxed text-sage">
                    {plan.meta}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl gap-5 sm:grid-cols-2">
            {FLOOR_SUMMARY.map((row, i) => (
              <Reveal key={row.label} delay={0.04 * i}>
                <div className="flex items-baseline justify-between border-b border-gold/15 pb-4 font-body text-sm">
                  <span className="text-ivory/55">{row.label}</span>
                  <span className="text-ivory">{row.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <section
        className="relative overflow-hidden px-6 py-24 sm:px-10 lg:py-32"
        data-testid="villas-cta"
      >
        <div className="absolute inset-0">
          <img
            src={BROCHURE.estateAerial}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-deep/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest-deep/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-[800px] text-center">
          <Reveal>
            <Overline>Reservations</Overline>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
              Reserve your mountain
              <br />
              retreat.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-lg font-body text-base font-light leading-relaxed text-ivory/70 sm:text-lg">
              Share a few details and our concierge will check availability —
              usually the same day.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <button
              type="button"
              data-testid="villas-enquire-btn"
              onClick={openEnquiryPopup}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-forest transition-colors duration-300 hover:bg-ivory"
            >
              Request availability
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </button>
          </Reveal>
        </div>
      </section>

      <EnquiryPopup autoOpen={false} />
    </div>
  );
}

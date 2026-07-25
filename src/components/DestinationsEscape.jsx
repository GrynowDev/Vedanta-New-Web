"use client";

import React, { useMemo, useState } from "react";
import { Building2, MapPin, Mountain, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const TITLE = "#2F4A38";
const ACCENT = "#E0B04B";
const VICINITY_MAP = "/vicinity/route-map.png";

const FILTER_ICONS = {
  all: Sparkles,
  nearby: MapPin,
  shimla: Building2,
  further: Mountain,
};

function DestinationCard({ place }) {
  return (
    <article
      className="group relative aspect-[3/4] overflow-hidden rounded-[1.35rem]"
      data-testid={`destination-card-${place.id}`}
    >
      <img
        src={place.img}
        alt={place.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-3 pb-5 pt-12 text-center">
        <h3 className="font-serif-display text-lg font-medium leading-tight text-white sm:text-xl">
          {place.name}
        </h3>
        <p className="mt-1 font-body text-[11px] tracking-wide text-white/85 sm:text-xs">
          {place.distance} · {place.time}
        </p>
      </div>
    </article>
  );
}

export default function DestinationsEscape({
  filters = [],
  destinations = [],
}) {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? destinations
        : destinations.filter((place) => place.category === active),
    [active, destinations],
  );

  return (
    <section
      id="vicinity"
      className="relative overflow-hidden bg-[#FAFAF8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      data-testid="destinations-escape-section"
    >
      {/* Soft map background — top right, horizontal, left text stays clear */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-0 h-[260px] w-[70%] max-w-[820px] overflow-hidden sm:h-[320px] lg:h-[380px]"
        aria-hidden="true"
        data-testid="vicinity-map"
      >
        <img
          src={VICINITY_MAP}
          alt=""
          loading="eager"
          className="absolute left-[58%] top-[48%] h-[720px] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90 object-contain opacity-55 sm:h-[860px] lg:h-[980px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <Reveal>
          <div className="relative max-w-xl lg:max-w-2xl">
            <h2
              className="font-serif-display text-4xl font-medium leading-none tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: TITLE }}
            >
              Vicinity
            </h2>
            <p
              className="mt-3 font-body text-lg font-medium sm:text-xl"
              style={{ color: ACCENT }}
            >
              Uniting Urban Indulgences
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="mt-8 flex gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Vicinity categories"
          >
            {filters.map((filter) => {
              const Icon = FILTER_ICONS[filter.id] || Sparkles;
              const selected = active === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(filter.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border bg-white/90 px-4 py-2.5 font-body text-[13px] backdrop-blur-sm transition-colors ${
                    selected
                      ? "border-[#2F4A38] text-[#2F4A38]"
                      : "border-[#D9D3C9] text-[#6B645C] hover:border-[#A89F92]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {visible.map((place) => (
              <DestinationCard key={place.id} place={place} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

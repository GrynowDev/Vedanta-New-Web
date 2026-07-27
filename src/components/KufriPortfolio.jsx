"use client";

import React, { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const PANEL = {
  all: {
    title: "Some Places Become Famous. Kufri Became Timeless.",
    text: "Mist drifts through the valley. The forest breathes deep, green and alive.",
    cta: "Explore Kufri",
  },
  summer: {
    title: "Summer In Kufri",
    text: "Cool 20°C days, apple orchards in bloom, and endless golden evenings on the deck.",
    cta: "Explore Summer",
  },
  winter: {
    title: "Winter In Kufri",
    text: "Snowfall blankets the pines. Fireside afternoons and crystalline mountain silence.",
    cta: "Explore Winter",
  },
  spring: {
    title: "Spring In Kufri",
    text: "Rhododendrons ignite the hills. Meadows awaken in soft, deliberate colour.",
    cta: "Explore Spring",
  },
  monsoon: {
    title: "Monsoon In Kufri",
    text: "Mist drifts through the valley. The forest breathes deep, green and alive.",
    cta: "Explore Monsoon",
  },
};

function PortfolioCard({ item, onVisit }) {
  return (
    <article
      className="group w-full cursor-pointer"
      data-testid={`kufri-card-${item.key ?? item.id}`}
      onClick={() => onVisit?.(item)}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem]">
        <img
          src={item.img}
          alt={item.label}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="mt-3 font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#8A8A8A] sm:text-xs sm:tracking-[0.14em]">
        Vedanta · Kufri
      </p>
      <h3 className="mt-1 font-serif-display text-lg font-medium leading-snug text-[#1A1A1A] sm:text-xl">
        {item.label}
      </h3>
    </article>
  );
}

export default function KufriPortfolio({ items, onVisit }) {
  const [filter, setFilter] = useState("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    slidesToScroll: 1,
  });

  const filteredItems = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.id === filter)),
    [filter, items],
  );

  const panel = PANEL[filter] ?? PANEL.all;

  const tabs = useMemo(
    () => [
      { id: "all", label: "All Seasons" },
      ...Array.from(
        new Map(
          items.map((item) => [item.id, { id: item.id, label: item.label }]),
        ).values(),
      ),
    ],
    [items],
  );

  useEffect(() => {
    emblaApi?.reInit();
    emblaApi?.scrollTo(0, true);
  }, [filter, emblaApi, filteredItems.length]);

  return (
    <div data-testid="kufri-portfolio">
      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-[#9A7B4F] sm:text-xs">
          Chapter Five — Why Kufri
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 border-b border-[#E5E5E5]">
          <div className="flex gap-6 overflow-x-auto pb-0 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-10 [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  data-testid={`kufri-filter-${tab.id}`}
                  onClick={() => setFilter(tab.id)}
                  className={`relative shrink-0 pb-4 font-body text-sm transition-colors duration-300 sm:text-base ${
                    isActive
                      ? "font-semibold text-[#1A1A1A]"
                      : "font-normal text-[#8A8A8A] hover:text-[#1A1A1A]"
                  }`}
                >
                  {tab.label}
                  {isActive ? (
                    <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#1A1A1A]" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-6 rounded-[1.75rem] bg-[#F3F3F3] p-6 sm:mt-8 sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] lg:items-start lg:gap-12 xl:gap-16">
            <div className="flex max-w-md flex-col lg:pt-2">
              <h2 className="font-serif-display text-3xl font-medium leading-[1.15] tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.65rem]">
                {panel.title}
              </h2>
              <p className="mt-5 font-body text-sm leading-relaxed text-[#5C5C5C] sm:text-base">
                {panel.text}
              </p>
              <button
                type="button"
                data-testid="kufri-see-all"
                onClick={() => onVisit?.({ id: filter })}
                className="mt-8 inline-flex items-center gap-2 self-start font-body text-sm font-semibold text-[#1A1A1A] transition-colors duration-300 hover:text-[#9A7B4F] sm:mt-10"
              >
                {panel.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <div className="min-w-0 overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {filteredItems.map((item) => (
                  <div
                    key={item.key ?? item.img}
                    className="min-w-0 shrink-0 grow-0 basis-[78%] pr-4 sm:basis-[46%] sm:pr-5 lg:basis-[38%] xl:basis-[34%]"
                  >
                    <PortfolioCard item={item} onVisit={onVisit} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

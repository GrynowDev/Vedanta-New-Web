import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Overline, SectionTitle, SectionLead } from "./Reveal";

function PortfolioCard({ item, onVisit }) {
  return (
    <article className="group relative h-[420px] overflow-hidden sm:h-[480px] lg:h-[540px]">
      <img
        src={item.img}
        alt={item.label}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-forest-deep/10 to-forest-deep/20" />
      <div className="absolute inset-x-0 top-8 flex justify-center px-6">
        <span className="font-body text-[10px] uppercase tracking-[0.35em] text-ivory/80">
          Vedanta · Kufri
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-8 flex justify-center px-6">
        <button
          type="button"
          onClick={() => onVisit?.(item)}
          className="min-w-[220px] bg-[#E5C58A] px-8 py-3.5 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-ivory"
        >
          {item.cta}
        </button>
      </div>
    </article>
  );
}

export default function KufriPortfolio({ items, onVisit }) {
  const [filter, setFilter] = useState("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const filteredItems = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.id === filter)),
    [filter, items],
  );

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  useEffect(() => {
    emblaApi?.reInit();
    emblaApi?.scrollTo(0, true);
  }, [filter, emblaApi]);

  const tabs = [{ id: "all", label: "All Seasons" }, ...items.map((s) => ({ id: s.id, label: s.label }))];

  return (
    <div data-testid="kufri-portfolio">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {tabs.map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              data-testid={`kufri-filter-${tab.id}`}
              onClick={() => setFilter(tab.id)}
              className={`rounded-full border px-5 py-2.5 font-body text-[10px] uppercase tracking-[0.24em] transition-colors duration-300 sm:px-6 sm:text-[11px] ${
                isActive
                  ? "border-ivory bg-ivory text-forest"
                  : "border-ivory/50 bg-transparent text-ivory/90 hover:border-ivory"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-14 lg:mt-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`min-w-0 shrink-0 grow-0 px-3 ${
                  filteredItems.length === 1
                    ? "basis-full"
                    : "basis-full sm:basis-1/2"
                }`}
              >
                <PortfolioCard item={item} onVisit={onVisit} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous"
            data-testid="kufri-portfolio-prev"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev && filteredItems.length <= 2}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 hover:border-gold hover:text-ivory disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Next"
            data-testid="kufri-portfolio-next"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext && filteredItems.length <= 2}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 hover:border-gold hover:text-ivory disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function KufriPortfolioHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <Reveal>
        <Overline>Chapter Five — Why Kufri</Overline>
      </Reveal>
      <Reveal delay={0.08}>
        <SectionTitle className="mt-6 text-center">
          Some places become famous.
          <br />
          Kufri became timeless.
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.14}>
        <SectionLead className="mx-auto mt-6 max-w-2xl text-center">
          Mist drifts through the valley. The forest breathes deep, green and alive.
        </SectionLead>
      </Reveal>
    </div>
  );
}

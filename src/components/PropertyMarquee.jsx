"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";

function PropertyCard({ item, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[1.5rem] text-left transition-all duration-500 ${
        active
          ? "h-[420px] w-[260px] scale-100 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:h-[480px] sm:w-[300px] lg:h-[520px] lg:w-[320px]"
          : "h-[340px] w-[200px] scale-[0.92] opacity-70 sm:h-[380px] sm:w-[230px] lg:h-[420px] lg:w-[250px]"
      }`}
      data-testid={`property-card-${item.id}`}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

      <span className="absolute left-3 top-3 rounded-full bg-[#1F6B4A] px-3 py-1 font-body text-[10px] font-medium tracking-wide text-white sm:left-4 sm:top-4 sm:text-[11px]">
        {item.badge}
      </span>

      <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-16 text-center sm:px-5 sm:pb-6">
        <Star className="mx-auto mb-2 h-3.5 w-3.5 fill-[#E0B04B] text-[#E0B04B]" />
        <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/75 sm:text-[11px]">
          {item.subtitle}
        </p>
        <h3 className="mt-1.5 font-serif-display text-xl font-medium uppercase leading-tight tracking-wide text-white sm:text-2xl">
          {item.title}
        </h3>
        {item.caption ? (
          <p className="mt-2 font-body text-[11px] leading-snug text-white/80 sm:text-xs">
            {item.caption}
          </p>
        ) : null}
      </div>
    </button>
  );
}

export default function PropertyMarquee({ items }) {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState([]);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || paused) return undefined;
    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(id);
  }, [emblaApi, paused]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="property-marquee"
      className="overflow-hidden bg-[#FAFAF8] py-16 sm:py-20 lg:py-24"
      data-testid="property-marquee-section"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="relative inline-block">
              <h2 className="font-serif-display text-4xl font-medium tracking-tight text-[#2C241B] sm:text-5xl lg:text-[3.25rem]">
                Explore Our Properties
              </h2>
              <span className="absolute -right-7 -top-1 text-[#E0B04B] sm:-right-9 sm:-top-2">
                <Star className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
              </span>
              <span className="absolute -right-3 top-2 text-[#E0B04B] sm:-right-4 sm:top-3">
                <Star className="h-2.5 w-2.5 fill-current sm:h-3 sm:w-3" />
              </span>
            </div>
            <p className="mt-3 font-body text-sm font-light text-[#7A736A] sm:text-base">
              Gallery — private residences, suites, and spaces crafted for
              Himalayan stillness.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          className="relative mt-12 sm:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center">
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className="flex min-w-0 shrink-0 grow-0 basis-[78%] justify-center sm:basis-[46%] lg:basis-[30%] xl:basis-[24%]"
                >
                  <PropertyCard
                    item={item}
                    active={i === selected}
                    onClick={() => {
                      if (i === selected) router.push("/gallery");
                      else emblaApi?.scrollTo(i);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
            <button
              type="button"
              aria-label="Previous property"
              onClick={scrollPrev}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#2C241B] transition-colors hover:bg-black/5"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`rounded-full transition-all ${
                    i === selected
                      ? "h-2.5 w-2.5 bg-[#C4A574]"
                      : "h-2 w-2 bg-[#D4D0C8]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next property"
              onClick={scrollNext}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#2C241B] transition-colors hover:bg-black/5"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Immersive swipeable showcase.
 * variant "showcase": large cinematic image slides with peek + caption.
 * variant "plans": light brochure-plate cards for floor plans.
 */
export default function SwipeCarousel({ items, variant = "showcase", testid = "swipe-carousel" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const isPlans = variant === "plans";

  return (
    <div className="relative" data-testid={testid}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative min-w-0 shrink-0 grow-0 pl-4 sm:pl-6 ${
                isPlans ? "basis-[88%] sm:basis-[70%] lg:basis-[55%]" : "basis-[90%] sm:basis-[78%] lg:basis-[68%]"
              }`}
              data-testid={`${testid}-slide-${i}`}
            >
              <div
                className={`overflow-hidden rounded-3xl transition-opacity duration-500 ${
                  selected === i ? "opacity-100" : "opacity-40"
                }`}
              >
                {isPlans ? (
                  <div className="bg-ivory p-4 sm:p-6">
                    <img src={it.img} alt={it.title} loading="lazy" className="h-[360px] w-full rounded-2xl object-contain sm:h-[520px]" draggable="false" />
                  </div>
                ) : (
                  <div className="img-zoom-wrap relative h-[480px] sm:h-[620px] lg:h-[680px]">
                    <img src={it.img} alt={it.title} loading="lazy" className="img-zoom h-full w-full object-cover" draggable="false" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                      <h3 className="font-serif-display text-3xl text-ivory sm:text-4xl">{it.title}</h3>
                      {it.caption && (
                        <p className="mt-2 max-w-md font-body text-sm font-light text-ivory/70">{it.caption}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {isPlans && (
                <div className="mt-5 text-center">
                  <h3 className="font-serif-display text-2xl text-ivory">{it.title}</h3>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-ivory/50">{it.meta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={scrollPrev}
          data-testid={`${testid}-prev`}
          aria-label="Previous"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        </button>

        <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              data-testid={`${testid}-dot-${i}`}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${selected === i ? "w-8 bg-gold" : "w-1.5 bg-ivory/30"}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          data-testid={`${testid}-next`}
          aria-label="Next"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      <p className="mt-4 text-center font-body text-[10px] uppercase tracking-[0.3em] text-ivory/30">
        Drag or swipe to explore
      </p>
    </div>
  );
}

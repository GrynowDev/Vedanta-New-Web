import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Reveal, Overline, SectionTitle } from "./Reveal";

function MarqueeCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative mx-2.5 h-[360px] w-[210px] shrink-0 overflow-hidden rounded-[1.25rem] border border-gold/15 sm:mx-3 sm:h-[420px] sm:w-[250px] lg:h-[460px] lg:w-[280px]"
    >
      <img
        src={item.img}
        alt={item.label}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--forest-deep)] via-[var(--forest-deep)]/80 to-transparent sm:h-36" />
    </button>
  );
}

export default function PropertyMarquee({ items }) {
  const navigate = useNavigate();

  const track = useMemo(() => {
    const base = [...items, ...items, ...items];
    return [...base, ...base];
  }, [items]);

  return (
    <section
      id="property-marquee"
      className="overflow-hidden bg-section py-14 sm:py-16 lg:py-20"
      data-testid="property-marquee-section"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Overline>Gallery</Overline>
            <SectionTitle className="mt-6 text-center">
              Explore Our Properties
            </SectionTitle>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 sm:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--forest-deep)] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--forest-deep)] to-transparent sm:w-24" />

        <div className="overflow-hidden">
          <div className="flex w-max flex-nowrap animate-marquee will-change-transform hover:[animation-play-state:paused]">
            {track.map((item, i) => (
              <MarqueeCard
                key={`${item.img}-${i}`}
                item={item}
                onClick={() => navigate("/gallery")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

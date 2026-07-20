import React, { useMemo } from "react";
import {
  Building2,
  Compass,
  Mountain,
  Layers,
  Shield,
  Gem,
} from "lucide-react";

const BRAND_ICONS = [Building2, Compass, Mountain, Layers, Shield, Gem];

function BrandLogo({ brand, index }) {
  const Icon = BRAND_ICONS[index % BRAND_ICONS.length];

  if (brand.logo) {
    return (
      <div className="mx-8 flex shrink-0 items-center sm:mx-10">
        <img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          className="h-7 max-w-[160px] object-contain opacity-50 grayscale transition-opacity duration-300 hover:opacity-80 sm:h-8"
        />
      </div>
    );
  }

  return (
    <div className="mx-8 flex shrink-0 items-center gap-2.5 sm:mx-10">
      <Icon
        className="h-5 w-5 text-ivory/35 sm:h-6 sm:w-6"
        strokeWidth={1.5}
      />
      <span className="whitespace-nowrap font-body text-base font-medium tracking-tight text-ivory/45 transition-colors duration-300 hover:text-ivory/70 sm:text-lg">
        {brand.name}
      </span>
    </div>
  );
}

export default function TrustedBrands({
  brands,
  title = "Trusted Real Estate Partners",
}) {
  const track = useMemo(() => [...brands, ...brands], [brands]);

  return (
    <section
      id="trusted-brands"
      className="border-y border-gold/10 bg-section py-10 sm:py-12"
      data-testid="trusted-brands-section"
    >
      <p className="text-center font-body text-sm font-medium text-ivory/55 sm:text-base">
        {title}
      </p>

      <div className="relative mt-8 overflow-hidden sm:mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--forest-deep)] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--forest-deep)] to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee-slow items-center hover:[animation-play-state:paused]">
          {track.map((brand, i) => (
            <BrandLogo
              key={`${brand.name}-${i}`}
              brand={brand}
              index={i % brands.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Leaf,
  Wind,
  Moon,
  Users,
  Home as HomeIcon,
  TreePine,
  Layers,
  Zap,
  Droplets,
  Footprints,
} from "lucide-react";
import {
  Reveal,
  Overline,
  SectionTitle,
  SectionLead,
} from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import SwipeCarousel from "../components/SwipeCarousel";
import CollectionCard, {
  CollectionHeader,
  CollectionSeeAll,
} from "../components/CollectionCard";
import KufriPortfolio from "../components/KufriPortfolio";
import TrustStats from "../components/TrustStats";
import PropertyMarquee from "../components/PropertyMarquee";
import TrustedBrands from "../components/TrustedBrands";
import TestimonialsSection from "../components/TestimonialsSection";
import DestinationsEscape from "../components/DestinationsEscape";
import Snowfall from "../components/Snowfall";
import EnquiryPopup, { openEnquiryPopup } from "../components/EnquiryPopup";
import {
  MEDIA,
  BROCHURE,
  PHILOSOPHY,
  SEASONS,
  NATURE,
  VILLA_SPECS,
  WELLNESS,
  SUSTAINABILITY,
  TESTIMONIALS,
  CONTACT,
  RESIDENCES,
  TRUST_STATS,
  PROPERTY_MARQUEE,
  TRUSTED_BRANDS,
  DESTINATION_FILTERS,
  DESTINATIONS,
} from "../data";

const PHIL_ICONS = [Wind, Leaf, Users, Moon];

const HERO_AVATARS = [
  BROCHURE.villaTwilight,
  BROCHURE.villaDay,
  BROCHURE.greatRoom,
  BROCHURE.bedroomSuite,
];

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  const ref = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={MEDIA.heroMountains}
          className="h-full w-full object-cover"
        >
          <source src={MEDIA.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-forest-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-forest-deep/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-forest-deep/20" />
      </div>

      <Snowfall count={55} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-2xl text-left lg:max-w-3xl">
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2.5">
                    {HERO_AVATARS.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="h-9 w-9 rounded-full border-2 border-white/80 object-cover sm:h-10 sm:w-10"
                      />
                    ))}
                  </div>
                  <span className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/50 bg-white/15 text-ivory sm:ml-2.5 sm:h-10 sm:w-10">
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
                <span className="font-body text-sm font-medium text-ivory/90 sm:text-base">
                  8 exclusive residences · Kufri, 8,500 ft
                </span>
              </div>
            </Reveal>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mt-8 font-serif-display text-4xl font-light leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Where Luxury
              <br />
              Breathes with Nature
            </motion.h1>

            <Reveal delay={0.55}>
              <p className="mt-6 max-w-xl font-body text-base font-normal leading-relaxed text-ivory/80 sm:text-lg">
                Discover private mountain mansions where clean air, pine-scented
                silence, and unhurried time help you come back to yourself.
              </p>
            </Reveal>

            <Reveal
              delay={0.75}
              className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            >
              <button
                data-testid="hero-book-btn"
                onClick={openEnquiryPopup}
                className="rounded-full bg-ivory px-7 py-3.5 font-body text-sm font-semibold text-forest transition-colors duration-200 hover:bg-white"
              >
                Contact us
              </button>
              <button
                data-testid="hero-explore-btn"
                onClick={() => router.push("/luxury-villas-in-kufri")}
                className="group inline-flex items-center gap-2 font-body text-sm font-medium text-ivory transition-colors duration-200 hover:text-ivory/80"
              >
                View Residences
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </button>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------- PHILOSOPHY -------------------------- */
function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative min-h-[85vh] overflow-hidden sm:min-h-[90vh]"
      data-testid="philosophy-section"
    >
      <div className="absolute inset-0">
        <img
          src="/Homepage/luxury-changed-its-mind.png"
          alt=""
          className="h-full w-full object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/55 to-forest-deep/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest-deep/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1400px] flex-col justify-between px-6 py-16 sm:min-h-[90vh] sm:px-10 lg:py-24">
        <div className="max-w-2xl pt-6 lg:pt-10">
          <Reveal>
            <Overline>Two — The Shift</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl xl:text-7xl">
              More Than A Stay.
              <br />A Life Designed To Heal.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 mb-8 max-w-xl font-body text-base font-light leading-relaxed text-ivory/80 sm:text-lg">
              It used to be measured in marble, and mileage, and more. Now it is
              measured in less — less noise, less urgency, fewer things standing
              between you and your own life. What remains is quieter, and far
              harder to find: time, space, and the privacy to be no one for a
              while.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-ivory/20 pt-8 sm:mt-20 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-10">
          {PHILOSOPHY.map((p, i) => {
            const Icon = PHIL_ICONS[i];
            return (
              <Reveal key={p.title} delay={0.08 * i}>
                <div>
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.3} />
                  <h3 className="mt-4 font-serif-display text-xl text-ivory sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-body text-sm font-light leading-relaxed text-ivory/65">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- WHY KUFRI --------------------------- */
function WhyKufri() {
  const router = useRouter();

  return (
    <section
      id="kufri"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      data-testid="kufri-section"
    >
      <div className="mx-auto max-w-[1400px]">
        <KufriPortfolio
          items={SEASONS}
          onVisit={() => router.push("/contact")}
        />
      </div>
    </section>
  );
}

/* ------------------ EXPERIENCE & WELLBEING ---------------------- */
function ExperienceWellbeing() {
  const items = [
    ...NATURE.map((item) => ({ ...item, group: "experience" })),
    ...WELLNESS.map((item) => ({ ...item, group: "wellbeing" })),
  ];

  return (
    <section
      id="experience"
      className="bg-section px-6 py-16 sm:px-10 lg:py-24"
      data-testid="experience-wellbeing-section"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Overline>Five — Experience & Wellbeing</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-tight text-ivory sm:text-6xl">
              The Days Do Less.
              <br />
              You Feel More.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-8 max-w-2xl font-body text-base font-light leading-relaxed text-ivory/70 sm:text-lg">
              Cool, clean mountain air. Long walks beneath the cedars. The
              particular calm that arrives with altitude and quiet. Nothing to
              fix — only to slow. A wellness retreat is planned to join Vedanta,
              though the first therapy is simply being here.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={`${item.group}-${item.title}`} delay={0.05 * (i % 4)}>
              <article className="img-zoom-wrap group relative h-[420px] overflow-hidden rounded-3xl sm:h-[460px] lg:h-[500px]">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="font-body text-[10px] uppercase tracking-[0.28em] text-gold/90">
                    {item.group === "experience" ? "Experience" : "Wellbeing"}
                  </p>
                  <h3 className="mt-2 font-serif-display text-2xl text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm font-light leading-relaxed text-ivory/65">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- VILLAS ----------------------------- */
function Villas() {
  const router = useRouter();
  return (
    <section
      id="villas"
      className="relative bg-section px-6 py-16 sm:px-10 lg:py-24"
      data-testid="villas-section"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={MEDIA.villaExterior1}
                alt="Vedanta villa at twilight"
                className="h-[480px] w-full object-cover sm:h-[560px] lg:h-[680px]"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <Overline>Four — The Residences</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
                Not Built Around Nature.
                <br />
                Built Within It.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-7 max-w-lg font-body text-base font-light leading-relaxed text-ivory/70 sm:text-lg">
                Eight neo-classical mansions, each turned toward the Himalaya.
                Stone that carries weight. Timber that carries warmth. Glass
                that hands the mountains back to you, whole. Room enough to
                gather everyone you love — still enough to hear yourself think.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 border-t border-l border-gold/20">
                {VILLA_SPECS.map((s) => (
                  <div
                    key={s.label}
                    className="border-b border-r border-gold/20 px-5 py-6 sm:px-6 sm:py-7"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="font-serif-display text-3xl text-gold sm:text-4xl">
                        {s.value}
                      </span>
                      <span className="font-body text-[10px] uppercase tracking-[0.22em] text-ivory/50 sm:text-xs">
                        {s.unit}
                      </span>
                    </div>
                    <p className="mt-2 font-body text-xs text-ivory/60 sm:text-sm">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <button
                data-testid="villas-explore-btn"
                onClick={() => router.push("/luxury-villas-in-kufri")}
                className="group mt-10 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.25em] text-gold transition-colors duration-300 hover:text-ivory"
              >
                See the Residences
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEWARDSHIP_ICONS = [
  HomeIcon,
  TreePine,
  Layers,
  Zap,
  Droplets,
  Footprints,
];

/* -------------------- SUSTAINABILITY ---------------------------- */
function Sustainability() {
  return (
    <section
      id="sustainability"
      className="bg-section px-6 py-14 sm:px-10 lg:py-20"
      data-testid="sustainability-section"
    >
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        <div className="lg:sticky lg:top-32">
          <Reveal>
            <Overline>Ten — Stewardship</Overline>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionTitle className="mt-6">
              The Last Luxury
              <br />
              Left Is Peace.
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLead className="mt-6 max-w-md">
              Building with the Himalayan landscape through thoughtful,
              low-impact design that preserves what makes Kufri timeless.
            </SectionLead>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          {SUSTAINABILITY.map((item, i) => {
            const Icon = STEWARDSHIP_ICONS[i] || Leaf;
            return (
              <Reveal key={item.title} delay={0.06 * i}>
                <article className="card-panel p-7 sm:p-8">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/15">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-serif-display text-xl text-ivory sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CONTACT ---------------------------- */
function ContactSection() {
  const waLink = `https://wa.me/${CONTACT.whatsapp}`;
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-16 sm:px-10 lg:py-24"
      data-testid="contact-section"
    >
      <div className="absolute inset-0">
        <img
          src="/Homepage/reserve.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/55 to-forest-deep/40" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <Overline>Reservations</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
              Reserve Your
              <br />
              Mountain Retreat.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md font-body text-lg font-light leading-relaxed text-ivory/70">
              Share your dates and our concierge will confirm availability and
              craft your stay — from a quiet weekend to a longer season of
              retreat.
            </p>
          </Reveal>
          <div className="mt-12 space-y-4 font-body text-sm text-ivory/70">
            <p>
              <span className="text-gold">Email</span> · {CONTACT.email}
            </p>
            <p>
              <span className="text-gold">Phone</span> · {CONTACT.phone}
            </p>
            <p>
              <span className="text-gold">Address</span> · {CONTACT.address}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-block text-gold"
              data-testid="contact-whatsapp-link"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
        <Reveal
          delay={0.2}
          className="rounded-[4px] bg-parchment p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-10"
        >
          <EnquiryForm idPrefix="home-enq" testId="enquiry-form" />
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------- RESIDENCE SHOWCASE (COLLECTION) --------------------- */
function ResidenceShowcase() {
  const router = useRouter();
  const featured = RESIDENCES.slice(0, 6);

  return (
    <section
      id="residences"
      className="bg-section px-6 py-14 sm:px-10 lg:py-20"
      data-testid="residences-section"
    >
      <div className="mx-auto max-w-[1400px]">
        <CollectionHeader />

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((residence, i) => (
            <Reveal key={residence.slug} delay={0.08 * i}>
              <CollectionCard
                item={residence}
                onClick={() => router.push("/luxury-villas-in-kufri")}
              />
            </Reveal>
          ))}
        </div>

        <CollectionSeeAll
          onClick={() => router.push("/luxury-villas-in-kufri")}
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands brands={TRUSTED_BRANDS} />
      <TrustStats
        stats={TRUST_STATS}
        heroImage={BROCHURE.villaTwilight}
        title="A Paradise in Heaven."
        subtitle="Trusted sanctuary for immersive stays, private ownership, and life above the valley — crafted with care in Kufri."
      />
      <PropertyMarquee items={PROPERTY_MARQUEE} />
      <Philosophy />
      <Villas />
      <ResidenceShowcase />
      <WhyKufri />
      <ExperienceWellbeing />
      <Sustainability />
      <DestinationsEscape
        filters={DESTINATION_FILTERS}
        destinations={DESTINATIONS}
      />
      <TestimonialsSection items={TESTIMONIALS} />
      <ContactSection />
      <EnquiryPopup />
    </>
  );
}

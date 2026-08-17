"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import {
  MEDIA,
  BROCHURE,
  CONTACT,
  LUXURY_VILLAS,
  VILLA_AMENITY_GROUPS,
  VILLA_NEARBY,
  VILLA_SEASONS,
  VILLA_SUITS,
  VILLA_FAQS,
  TESTIMONIALS,
  NATURE,
  WELLNESS,
} from "../data";

const WHY_POINTS = [
  {
    title: "Wake up to the views",
    text: "Most people book a hotel in Shimla and drive up to Kufri for the day. Staying in a villa here flips that around — the mountains are outside your window, not an hour away.",
  },
  {
    title: "Built for how you travel",
    text: "Room for a full family or large group under one roof, a kitchen and cook so you are not tied to restaurant timings, and outdoor space for a bonfire once the sun drops.",
  },
  {
    title: "No shared corridors",
    text: "If you have travelled with older parents or young kids, you already know the value of not sharing lifts and dining halls with strangers. That is why people pick a villa here over a hotel.",
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-gold/15">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-serif-display text-xl font-light text-ivory sm:text-2xl">
          {item.q}
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={1.6}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-body text-base font-light leading-relaxed text-ivory/65">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Villas() {
  const heroRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const waLink = `https://wa.me/${CONTACT.whatsapp}`;
  const reviews = TESTIMONIALS.slice(0, 4);

  return (
    <div className="bg-forest-deep" data-testid="villas-page">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] w-full overflow-hidden"
        data-testid="villas-hero"
      >
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={MEDIA.villaExterior1}
            alt="Luxury private villa in Kufri with mountain views"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-forest-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/35" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:pb-24"
        >
          <Reveal>
            <Overline>Vedanta · Kufri near Shimla</Overline>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif-display text-5xl font-light leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl xl:text-8xl">
              Luxury Villas In Kufri
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-ivory/80 sm:text-xl">
              Private mountain-view stays a short drive from Shimla, built for
              families, groups and slow weekends in the hills.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-5 max-w-2xl font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
              Kufri sits higher and quieter than central Shimla — mountain views
              without the crowds on Mall Road. Each villa is yours alone:
              private lawns, warm interiors for cold nights, and a caretaker on
              hand so you can switch off.
            </p>
          </Reveal>

          <Reveal
            delay={0.34}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              data-testid="villas-hero-enquire"
              className="rounded-full bg-ivory px-8 py-3.5 font-body text-sm font-semibold text-forest transition-colors duration-200 hover:bg-white"
            >
              Check Availability
            </Link>
            <a
              href="#villas"
              className="group inline-flex items-center gap-2 font-body text-sm font-medium text-ivory/85 transition-colors hover:text-ivory"
            >
              See the residences
              <ArrowDown
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </Reveal>
        </motion.div>
      </section>

      {/* VILLA INVENTORY */}
      <section
        id="villas"
        className="bg-[#0E1C16] px-6 py-20 sm:px-10 lg:py-28"
        data-testid="villa-inventory"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <Reveal>
              <Overline>The collection</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
                Our Luxury Private Residences In Kufri
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
                Eight residences. Same generous footprint. Each with its own
                outlook on the mountain. Enquire for the villa that fits your
                dates and group.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
            {LUXURY_VILLAS.map((villa, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={villa.slug} delay={0.04}>
                  <article
                    className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
                    data-testid={`villa-${villa.slug}`}
                  >
                    <div
                      className={`overflow-hidden lg:col-span-7 ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={villa.img}
                        alt={`${villa.name} — luxury villa in Kufri`}
                        loading="lazy"
                        className="aspect-[16/11] h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:aspect-[3/2]"
                      />
                    </div>
                    <div
                      className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
                    >
                      <p className="font-body text-[11px] uppercase tracking-[0.28em] text-gold">
                        Residence {String(i + 1).padStart(2, "0")}
                        <span className="mx-2 text-ivory/25">·</span>
                        {villa.view}
                      </p>
                      <h3 className="mt-4 font-serif-display text-3xl font-light text-ivory sm:text-4xl">
                        {villa.name}
                      </h3>
                      <p className="mt-4 font-body text-base font-light leading-relaxed text-ivory/65">
                        {villa.description}
                      </p>

                      <dl className="mt-7 space-y-3 border-t border-gold/15 pt-6 font-body text-sm">
                        <div className="flex justify-between gap-4">
                          <dt className="text-ivory/45">Bedrooms</dt>
                          <dd className="text-right text-ivory">
                            {villa.bedrooms}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-ivory/45">Guests</dt>
                          <dd className="text-right text-ivory">
                            {villa.guests}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-ivory/45">View</dt>
                          <dd className="text-right text-ivory">
                            {villa.view}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-ivory/45">Starts from</dt>
                          <dd className="text-right text-gold">
                            {villa.price}
                          </dd>
                        </div>
                      </dl>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {villa.features.map((f) => (
                          <li
                            key={f}
                            className="rounded-full border border-ivory/15 px-3 py-1.5 font-body text-[11px] text-ivory/70"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          href="/contact"
                          className="rounded-full bg-gold px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:bg-ivory"
                        >
                          Enquire about this villa
                        </Link>
                        <Link
                          href="/gallery"
                          className="rounded-full border border-ivory/25 px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-ivory/80 transition-colors hover:border-gold hover:text-gold"
                        >
                          View photos
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section
        className="px-6 py-20 sm:px-10 lg:py-28"
        data-testid="villa-amenities"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <Reveal>
              <Overline>What you get</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
                Villa Amenities
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
                Listed plainly so you know exactly what is included before you
                book. Each villa runs to roughly 5,500 sq. ft. across three
                floors, with its own lift and a private lawn of about 1,800 sq.
                ft.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {VILLA_AMENITY_GROUPS.map((group, i) => (
              <Reveal key={group.title} delay={0.04 * i}>
                <div>
                  <h3 className="border-b border-gold/20 pb-4 font-serif-display text-2xl font-light text-gold">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm font-light leading-relaxed text-ivory/70"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          strokeWidth={1.6}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT VEDANTA — same layout as homepage Experience & Wellbeing */}
      <section
        className="bg-section px-6 py-16 sm:px-10 lg:py-24"
        data-testid="life-at-vedanta"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Overline>Life at Vedanta</Overline>
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
                fix — only to slow. A wellness retreat is planned to join
                Vedanta, though the first therapy is simply being here.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              ...NATURE.map((item) => ({ ...item, group: "experience" })),
              ...WELLNESS.map((item) => ({ ...item, group: "wellbeing" })),
            ].map((item, i) => (
              <Reveal
                key={`${item.group}-${item.title}`}
                delay={0.05 * (i % 4)}
              >
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

      {/* LOCATION */}
      <section
        className="px-6 py-20 sm:px-10 lg:py-28"
        data-testid="villa-location"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Overline>Location</Overline>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
              Where The Villas Are — And How To Reach
            </h2>
            <p className="mt-6 font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
              Kufri is around 15 km from Shimla on National Highway 5, the old
              Hindustan–Tibet road. The drive takes roughly 45 minutes to an
              hour depending on season and traffic, passing through Sanjauli and
              Fagu on the way up.
            </p>
            <p className="mt-4 font-body text-sm font-light text-ivory/50">
              We share exact directions and a location pin once your booking is
              confirmed.
            </p>
          </Reveal>

          <div className="space-y-6 lg:col-span-7">
            {[
              {
                title: "By Air",
                text: "Nearest airport is Shimla Airport at Jubbarhatti. Most travellers fly into Chandigarh and drive up — far more flight options.",
              },
              {
                title: "By Train",
                text: "Nearest broad-gauge station is Kalka. Take the toy train to Shimla or drive straight up — Kalka to Kufri is around 105 km.",
              },
              {
                title: "By Road",
                text: "Well connected from Chandigarh (about 6–7 hours) and Delhi (about 9–10 hours). Roads can be slow in peak season and after snowfall — plan check-in for daylight where possible.",
              },
            ].map((row, i) => (
              <Reveal key={row.title} delay={0.06 * i}>
                <div className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-serif-display text-2xl text-ivory">
                    {row.title}
                  </h3>
                  <p className="mt-2 font-body text-base font-light leading-relaxed text-ivory/65">
                    {row.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section
        className="bg-[#0E1C16] px-6 py-20 sm:px-10 lg:py-28"
        data-testid="things-nearby"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <Reveal>
              <Overline>Explore</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
                Things To Do Near The Villa
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
                Most of Kufri&apos;s main spots are a short drive away — head
                out for a few hours and be back for lunch.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VILLA_NEARBY.map((place, i) => (
              <Reveal key={place.title} delay={0.04 * i}>
                <article className="group p-3 h-full overflow-hidden border border-gold/10 bg-forest-deep/40 rounded-xl">
                  <div className="overflow-hidden">
                    <img
                      src={place.img}
                      alt={place.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-4">
                    <span className="font-body text-[11px] uppercase tracking-[0.28em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-serif-display text-2xl text-ivory">
                      {place.title}
                    </h3>
                    <p className="mt-3 font-body text-sm font-light leading-relaxed text-ivory/65">
                      {place.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEST TIME */}
      <section className="px-6 py-20 sm:px-10 lg:py-28" data-testid="best-time">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <Reveal>
              <Overline>Seasons</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
                Best Time To Visit Kufri
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
                There is no wrong season — what you get changes month to month.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden bg-gold/15 sm:grid-cols-2 lg:grid-cols-4">
            {VILLA_SEASONS.map((season, i) => (
              <Reveal
                key={season.title}
                delay={0.05 * i}
                className="bg-forest-deep p-8"
              >
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-gold">
                  {season.label}
                </p>
                <h3 className="mt-3 font-serif-display text-2xl text-ivory">
                  {season.title}
                </h3>
                <p className="mt-4 font-body text-sm font-light leading-relaxed text-ivory/65">
                  {season.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT SUITS */}
      <section className="px-6 py-20 sm:px-10 lg:py-28" data-testid="who-suits">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={BROCHURE.greatRoom}
                alt="Family and group stay at a Vedanta villa"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Overline>Who it&apos;s for</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
                Who These Villas Suit
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-5">
              {VILLA_SUITS.map((item, i) => (
                <Reveal key={item} delay={0.04 * i}>
                  <li className="flex items-start gap-4 border-t border-gold/15 pt-5">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={1.6}
                    />
                    <span className="font-body text-base font-light leading-relaxed text-ivory/75">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <p className="mt-8 font-body text-sm font-light italic text-ivory/55">
                Tell us your group size and dates and we will point you to the
                villa that fits best.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        className="bg-[#0E1C16] px-6 py-20 sm:px-10 lg:py-28"
        data-testid="guest-reviews"
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Overline>Guest voices</Overline>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
              Guest Reviews
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={0.05 * i}>
                <blockquote className="border-t border-gold/20 pt-8">
                  <p className="font-serif-display text-2xl font-light leading-snug text-ivory sm:text-[1.65rem]">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <footer className="mt-6 font-body text-sm text-ivory/55">
                    <span className="text-gold">{r.name}</span>
                    <span className="mx-2 text-ivory/25">·</span>
                    {r.role}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        className="px-6 py-20 sm:px-10 lg:py-28"
        data-testid="villa-faqs"
      >
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <Overline>FAQs</Overline>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="mt-12">
            {VILLA_FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
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
            <Overline>Ready when you are</Overline>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
              Ready To Book Your Villa In Kufri?
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-lg font-body text-base font-light leading-relaxed text-ivory/70 sm:text-lg">
              Tell us your dates and group size and we will check availability
              and send you options the same day. For quick help, call or message
              us directly.
            </p>
          </Reveal>
          <Reveal
            delay={0.2}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              data-testid="villas-enquire-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-forest transition-colors duration-300 hover:bg-ivory"
            >
              Check Availability
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-3.5 font-body text-xs uppercase tracking-[0.22em] text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
              WhatsApp Now
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 font-body text-sm text-ivory/70 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4" strokeWidth={1.6} />
              {CONTACT.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

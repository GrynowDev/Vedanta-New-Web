import Link from "next/link";
import { Reveal, Overline } from "../../components/Reveal";

export const dynamic = "force-static";

export const metadata = {
  title: "Family Retreat in Kufri: Private Mansion Stays | Vedanta",
  description:
    "Skip cramped hotel rooms — book a private mansion in Kufri built for family vacations in Himachal Pradesh, with space, safety, and comfort for every generation.",
  alternates: {
    canonical:
      "https://vedantabyvaishnogroup.com/family-retreat-in-kufri-private-mansion-stays-vedanta/",
  },
  openGraph: {
    title: "Family Retreat in Kufri: Private Mansion Stays | Vedanta",
    description:
      "Skip cramped hotel rooms — book a private mansion in Kufri built for family vacations in Himachal Pradesh, with space, safety, and comfort for every generation.",
    url: "https://vedantabyvaishnogroup.com/family-retreat-in-kufri-private-mansion-stays-vedanta/",
    type: "article",
    images: [
      {
        url: "https://thumbnail-agent-bucket.s3.ap-south-1.amazonaws.com/thumbnail-agent/4fdb9fea-605b-4d0a-98e3-b2a9800f7cbf.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Retreat in Kufri: Private Mansion Stays | Vedanta",
    description:
      "Skip cramped hotel rooms — book a private mansion in Kufri built for family vacations in Himachal Pradesh, with space, safety, and comfort for every generation.",
    images: [
      "https://thumbnail-agent-bucket.s3.ap-south-1.amazonaws.com/thumbnail-agent/4fdb9fea-605b-4d0a-98e3-b2a9800f7cbf.png",
    ],
  },
};

const CANONICAL_URL =
  "https://vedantabyvaishnogroup.com/family-retreat-in-kufri-private-mansion-stays-vedanta/";
const SHARE_TEXT = encodeURIComponent(
  "Family Retreat in Kufri: Private Mansion Stays | Vedanta",
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the mansion fully private for our family only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The entire property is reserved exclusively for one family at a time — no other guests, shared floors, or common areas used by strangers during your stay.",
          },
        },
        {
          "@type": "Question",
          name: "How many people can it accommodate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The mansion is built around multiple private bedrooms with shared living and dining space, suited to larger multi-generational groups. Exact capacity and room configuration are on the villas page, so you can confirm it fits your group before booking.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe and suitable for young children and elderly guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The property is gated with controlled access, and outdoor space is contained within the property boundary, making it easier to supervise kids at play. Separate wings let elderly guests rest without disruption from the more active parts of the family.",
          },
        },
        {
          "@type": "Question",
          name: "Is there staff support during the stay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — caretaker and support staff are available throughout your stay to help with day-to-day needs, so parents and grandparents aren't managing everything alone.",
          },
        },
      ],
    },
    {
      "@type": "LodgingBusiness",
      name: "Vedanta by Vaishno Group",
      description:
        "A private mansion in Kufri, near Shimla, reserved exclusively for one family at a time — built for multi-generational family retreats in Himachal Pradesh.",
      url: CANONICAL_URL,
      image:
        "https://thumbnail-agent-bucket.s3.ap-south-1.amazonaws.com/thumbnail-agent/4fdb9fea-605b-4d0a-98e3-b2a9800f7cbf.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kufri",
        addressRegion: "Himachal Pradesh",
        addressCountry: "IN",
      },
    },
  ],
};

export default function Page() {
  return (
    <div className="bg-forest-deep" data-testid="family-retreat-kufri-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img
          src="https://thumbnail-agent-bucket.s3.ap-south-1.amazonaws.com/thumbnail-agent/4fdb9fea-605b-4d0a-98e3-b2a9800f7cbf.png"
          alt="Family retreat mansion in Kufri"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/55" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 sm:px-10">
          <Reveal>
            <Overline>Family Retreats</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-serif-display text-4xl font-light leading-tight text-ivory sm:text-6xl">
              Family Retreat in Kufri, Near Shimla: A Private Mansion for the
              Whole Family
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-2xl font-body text-xs uppercase tracking-[0.2em] text-ivory/50">
              Posted on 24 July 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-body text-lg font-light leading-relaxed text-ivory/70">
              Most &ldquo;family stays&rdquo; in Kufri mean two hotel rooms
              booked side by side, a shared corridor, and a lobby full of
              strangers. A family retreat in Shimla&apos;s hills should mean
              something better: one private mansion, reserved entirely for your
              family, where grandparents, parents, and kids all have room to be
              together — and apart, when they need to be. That&apos;s the idea
              behind a Vedanta family stay. No shared walls with other guests,
              no negotiating elevators with strangers, no cramped
              triple-occupancy room passed off as a &ldquo;family suite.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              This is built for multi-generational groups — grandparents coming
              along, toddlers on a nap schedule, teenagers wanting space, and
              everyone still sitting down to dinner together at the end of the
              day.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="why-families-choose-a-private-mansion-over-a-hotel-in-kufri"
              className="mt-16 font-serif-display text-3xl font-light leading-tight text-ivory sm:text-4xl"
            >
              Why Families Choose a Private Mansion Over a Hotel in Kufri
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              Hotel family rooms solve one problem: fitting more beds into one
              space. They don&apos;t solve the real problem — families need
              separate zones for rest and shared zones for togetherness, and
              hotels rarely offer both. Thin walls, shared hallways, and a lobby
              full of other travelers make it hard for a trip to feel like
              it&apos;s actually yours.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              A family friendly villa in Kufri works differently. You get an
              entire residence — multiple private bedrooms, shared living areas,
              kitchen access, and outdoor space — instead of one room with extra
              cots wheeled in. Most retreat marketing in this region targets
              couples on a romantic escape; families wanting the same privacy
              and exclusivity, just for a bigger group, have been an
              afterthought. That&apos;s the gap this property fills.{" "}
              <Link
                href="https://www.vedantabyvaishnogroup.com/villas"
                className="text-gold underline underline-offset-4"
              >
                Explore Vedanta&apos;s private residences and villas
              </Link>{" "}
              to see how the layouts work before you book.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="space-for-every-generation"
              className="mt-16 font-serif-display text-3xl font-light leading-tight text-ivory sm:text-4xl"
            >
              Space for Every Generation
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              A family trip usually falls apart over logistics, not location —
              someone&apos;s tired, someone&apos;s loud, and there&apos;s
              nowhere for either to happen without disrupting the other.
              Multiple private bedrooms and separate common areas mean
              grandparents can rest while kids play, and parents get a shared
              space to gather in the evening. Nobody is booking three rooms
              across two floors and hoping everyone finds each other for
              breakfast.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3
              id="private-common-areas-for-family-time"
              className="mt-10 font-serif-display text-2xl font-light leading-tight text-ivory sm:text-3xl"
            >
              Private Common Areas for Family Time
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              The living and dining spaces are shared only within your group,
              because there are no other guests at the property. Lounges, dining
              areas, and outdoor decks or garden space give the whole family
              somewhere to gather that a hotel room simply can&apos;t offer,
              however large that room is.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3
              id="quiet-corners-for-rest"
              className="mt-10 font-serif-display text-2xl font-light leading-tight text-ivory sm:text-3xl"
            >
              Quiet Corners for Rest
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              Separate rooms and wings mean an afternoon nap for grandparents or
              young kids doesn&apos;t depend on everyone else staying quiet.
              Older family members can rest away from the noise of children
              playing, while the rest of the group stays active elsewhere on the
              property — something a single hotel room can&apos;t replicate.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="safety-and-privacy-for-families-with-children"
              className="mt-16 font-serif-display text-3xl font-light leading-tight text-ivory sm:text-4xl"
            >
              Safety and Privacy for Families with Children
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              Parents traveling with young children carry a specific set of
              worries that hotel marketing rarely addresses: who else is walking
              the halls, who has access to the building, and where the kids can
              run around without supervision anxiety. A gated private property
              answers this directly — no shared hallways or elevators with other
              guests, and access controlled for your family alone.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              Kufri&apos;s hillside terrain also makes open, supervised outdoor
              space genuinely valuable, and it&apos;s something many hotels here
              simply don&apos;t have room for. Kids can play within the property
              boundary while parents watch from a common area, rather than
              confining the day to one room.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="a-family-vacation-base-in-himachal-pradesh"
              className="mt-16 font-serif-display text-3xl font-light leading-tight text-ivory sm:text-4xl"
            >
              A Family Vacation Base in Himachal Pradesh
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              Kufri sits close enough to Shimla to make it a comfortable base
              for a family vacation in Himachal Pradesh — sightseeing in Shimla,
              light nature walks, and the kind of gentle adventure that works
              for kids and grandparents alike, without long transfers eating
              into the day. The difference is what happens when the day ends:
              instead of a hotel room, your family returns to a private family
              retreat with space to unwind, cook, or spread out after a day of
              travel.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              For a deeper sense of why this setting works so well for rest
              between day trips, read{" "}
              <Link
                href="https://www.vedantabyvaishnogroup.com/blogs/why-kufri-is-the-quietest-escape-from-shimla"
                className="text-gold underline underline-offset-4"
              >
                why Kufri is the quietest escape from Shimla
              </Link>
              . You can also{" "}
              <Link
                href="https://www.vedantabyvaishnogroup.com/gallery"
                className="text-gold underline underline-offset-4"
              >
                see the mansion&apos;s family spaces in the gallery
              </Link>{" "}
              to picture how a day of sightseeing ends back at the property.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="seasonal-family-getaways-best-times-to-book"
              className="mt-16 font-serif-display text-3xl font-light leading-tight text-ivory sm:text-4xl"
            >
              Seasonal Family Getaways: Best Times to Book
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              Family travel runs on a calendar hotels don&apos;t plan around —
              summer school holidays, winter snow breaks, and long weekends
              around Diwali, Christmas, and New Year, when grandparents and
              grandkids can actually get time off together. These windows fill
              up fastest for a property with only one booking at a time, since
              the mansion isn&apos;t split across multiple room inventories.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              If you&apos;re weighing which season suits your family —
              summer&apos;s milder hill weather versus winter&apos;s snow —{" "}
              <Link
                href="https://www.vedantabyvaishnogroup.com/blogs/best-time-to-visit-kufri-for-a-private-stay"
                className="text-gold underline underline-offset-4"
              >
                best time to visit Kufri for a private stay
              </Link>{" "}
              breaks down what to expect. Whichever window you choose, booking a
              few weeks ahead of peak dates is worth it, since a single-property
              retreat has far less flexibility than a hotel with dozens of
              rooms.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="what-families-are-looking-for-answered"
              className="mt-16 font-serif-display text-3xl font-light leading-tight text-ivory sm:text-4xl"
            >
              What Families Are Looking For — Answered
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            <Reveal delay={0.15}>
              <div className="border-t border-gold/20 pt-6">
                <p className="font-body text-lg font-normal text-ivory">
                  Is the mansion fully private for our family only?
                </p>
                <p className="mt-3 font-body text-lg font-light leading-relaxed text-ivory/70">
                  Yes. The entire property is reserved exclusively for one
                  family at a time — no other guests, shared floors, or common
                  areas used by strangers during your stay.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-t border-gold/20 pt-6">
                <p className="font-body text-lg font-normal text-ivory">
                  How many people can it accommodate?
                </p>
                <p className="mt-3 font-body text-lg font-light leading-relaxed text-ivory/70">
                  The mansion is built around multiple private bedrooms with
                  shared living and dining space, suited to larger
                  multi-generational groups. Exact capacity and room
                  configuration are on the{" "}
                  <Link
                    href="https://www.vedantabyvaishnogroup.com/villas"
                    className="text-gold underline underline-offset-4"
                  >
                    villas page
                  </Link>
                  , so you can confirm it fits your group before booking.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="border-t border-gold/20 pt-6">
                <p className="font-body text-lg font-normal text-ivory">
                  Is it safe and suitable for young children and elderly guests?
                </p>
                <p className="mt-3 font-body text-lg font-light leading-relaxed text-ivory/70">
                  The property is gated with controlled access, and outdoor
                  space is contained within the property boundary, making it
                  easier to supervise kids at play. Separate wings let elderly
                  guests rest without disruption from the more active parts of
                  the family.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border-t border-gold/20 pt-6">
                <p className="font-body text-lg font-normal text-ivory">
                  Is there staff support during the stay?
                </p>
                <p className="mt-3 font-body text-lg font-light leading-relaxed text-ivory/70">
                  Yes — caretaker and support staff are available throughout
                  your stay to help with day-to-day needs, so parents and
                  grandparents aren&apos;t managing everything alone.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <h2
              id="book-your-familys-private-mansion-in-kufri"
              className="mt-16 font-serif-display text-3xl font-light leading-tight text-ivory sm:text-4xl"
            >
              Book Your Family&apos;s Private Mansion in Kufri
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              If your family&apos;s next trip needs more room to actually be a
              family trip — space for grandparents to rest, kids to play safely,
              and everyone to sit down together at day&apos;s end — a private
              mansion in Kufri, the family retreat near Shimla, does what a
              hotel room can&apos;t. With summer holidays, winter breaks, and
              long weekends filling up fast for a single-property stay,
              it&apos;s worth locking in your dates early.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/70">
              <Link
                href="https://www.vedantabyvaishnogroup.com/contact"
                className="text-gold underline underline-offset-4"
              >
                Enquire about a family retreat booking
              </Link>{" "}
              to check availability for your dates, or start with{" "}
              <Link
                href="https://www.vedantabyvaishnogroup.com"
                className="text-gold underline underline-offset-4"
              >
                Vedanta, a private Himalayan sanctuary in Kufri
              </Link>{" "}
              to see the full picture of what a private stay here looks like.
            </p>
          </Reveal>

          {/* Share links */}
          <Reveal delay={0.1}>
            <div className="mt-16 border-t border-gold/20 pt-8">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-ivory/50">
                Share this article
              </p>
              <div className="mt-4 flex flex-wrap gap-6 font-body text-sm text-ivory/70">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    CANONICAL_URL,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    CANONICAL_URL,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    CANONICAL_URL,
                  )}&text=${SHARE_TEXT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Twitter / X
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${SHARE_TEXT}%20${encodeURIComponent(
                    CANONICAL_URL,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

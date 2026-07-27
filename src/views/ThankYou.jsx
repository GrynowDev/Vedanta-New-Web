import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { CONTACT } from "../data";

export default function ThankYou() {
  const waLink = `https://wa.me/${CONTACT.whatsapp}`;

  return (
    <div
      className="bg-forest-deep px-6 pb-28 pt-36 sm:px-10 lg:pt-44"
      data-testid="thank-you-page"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
            <Check className="h-7 w-7" strokeWidth={1.8} />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Overline>Enquiry received</Overline>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 font-serif-display text-5xl font-light leading-none text-ivory sm:text-6xl">
            Thank You.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-lg font-body text-lg font-light leading-relaxed text-ivory/70">
            We have your details, and our concierge will be in touch shortly. In
            the meantime, the mountains are keeping a place for you.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-gold px-8 py-3.5 font-body text-sm font-medium text-forest transition-colors hover:bg-ivory"
            >
              Back to home
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-8 py-3.5 font-body text-sm font-medium text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

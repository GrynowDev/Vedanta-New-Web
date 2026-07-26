import Link from "next/link";
import { CONTACT } from "../data";

export default function Footer() {
  const waLink = `https://wa.me/${CONTACT.whatsapp}`;
  return (
    <footer className="border-t border-gold/10 bg-forest-deep px-6 py-16 sm:px-10" data-testid="footer">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src="/Homepage/vedanta-white-logo.png"
              alt="Vedanta by Vaishno Group"
              className="h-12 w-auto sm:h-14"
            />
            <p className="mt-6 max-w-md font-body text-sm font-light leading-relaxed text-ivory/60">
              A private collection of eight Himalayan residences in Kufri, offered as intimate
              mountain retreats. A home away from home — timeless, private, and profoundly still.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.3em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 font-body text-sm text-ivory/70">
              <li><Link href="/luxury-villas-in-kufri" className="link-underline hover:text-ivory">The Villas</Link></li>
              <li><Link href="/gallery" className="link-underline hover:text-ivory">Gallery</Link></li>
              <li><Link href="/blogs" className="link-underline hover:text-ivory">Blog</Link></li>
              <li><Link href="/contact" className="link-underline hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.3em] text-gold">Connect</h4>
            <ul className="mt-5 space-y-3 font-body text-sm text-ivory/70">
              <li><a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-ivory">{CONTACT.email}</a></li>
              <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="link-underline hover:text-ivory">{CONTACT.phone}</a></li>
              {CONTACT.phoneAlt && (
                <li><a href={`tel:${CONTACT.phoneAlt.replace(/\s/g, "")}`} className="link-underline hover:text-ivory">{CONTACT.phoneAlt}</a></li>
              )}
              <li><a href={waLink} target="_blank" rel="noreferrer" className="link-underline hover:text-ivory">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gold/10 pt-8 font-body text-xs text-ivory/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Vedanta by Vaishno Group. All rights reserved.</span>
          <span className="tracking-[0.2em]">RERA No. HPRERASHI2022013/P</span>
        </div>
      </div>
    </footer>
  );
}

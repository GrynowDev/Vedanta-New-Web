import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { formatBlogDate } from "../data";

const LINK_CLASS =
  "font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-ivory hover:decoration-ivory/60";

const BRAND_HREF = "https://vedantabyvaishnogroup.com/";

/**
 * Matches, in order:
 * 1. Markdown [label](href)
 * 2. HTML <a href="...">label</a>
 * 3. Bare http(s) URLs
 * 4. Bare vedantabyvaishnogroup.com mentions
 * 5. Plain "Vedanta by Vaishno Group" brand name
 */
const INLINE_LINK =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)|<a\s+[^>]*href=['"]([^'"]+)['"][^>]*>(.*?)<\/a>|(https?:\/\/[^\s<]+)|((?:www\.)?vedantabyvaishnogroup\.com(?:\/[\w\-/]*)?)|(Vedanta by Vaishno Group)/gi;

function ExternalLink({ href, children }) {
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={LINK_CLASS}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" className={LINK_CLASS}>
      {children}
    </a>
  );
}

function InlineText({ text }) {
  if (typeof text !== "string") return text;

  const nodes = [];
  const pattern = new RegExp(INLINE_LINK.source, "gi");
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, mdLabel, mdHref, htmlHref, htmlLabel, rawUrl, bareDomain, brand] =
      match;

    let href =
      mdHref ||
      htmlHref ||
      rawUrl ||
      (bareDomain ? `https://${bareDomain}` : null) ||
      BRAND_HREF;
    let label = mdLabel || htmlLabel || rawUrl || bareDomain || brand;

    // Bare URLs often end a sentence — keep the punctuation outside the link.
    let trailing = "";
    if (!mdLabel && !htmlLabel && !brand) {
      const punctuation = label.match(/[.,;:!?]+$/);
      if (punctuation) {
        trailing = punctuation[0];
        label = label.slice(0, -trailing.length);
        href = href.slice(0, -trailing.length);
      }
    }

    nodes.push(
      <ExternalLink key={`${match.index}-link`} href={href}>
        {label}
      </ExternalLink>,
    );

    if (trailing) nodes.push(trailing);
    lastIndex = match.index + match[0].length;
  }

  if (!nodes.length) return text;
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return <>{nodes}</>;
}

export default function BlogPost({ post, related = [] }) {
  return (
    <article
      className="bg-forest-deep px-6 pb-28 pt-36 sm:px-10 lg:pt-44"
      data-testid="blog-post-page"
    >
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.25em] text-ivory/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All stories
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <Overline className="mt-10 block">
            {post.category} · {formatBlogDate(post.date)} · {post.readTime}
          </Overline>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 font-body text-lg font-light leading-relaxed text-ivory/65">
            {post.excerpt}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="img-zoom-wrap mx-auto mt-12 max-w-[1100px] overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </Reveal>

      <div className="mx-auto mt-14 max-w-[720px] space-y-7">
        {post.content.map((block, i) => {
          const delay = Math.min(i * 0.04, 0.2);

          if (typeof block === "object" && block?.h2) {
            return (
              <Reveal key={i} delay={delay}>
                <h2 className="pt-6 font-serif-display text-3xl font-light leading-snug text-ivory sm:text-4xl">
                  {block.h2}
                </h2>
              </Reveal>
            );
          }

          if (typeof block === "object" && block?.h3) {
            return (
              <Reveal key={i} delay={delay}>
                <h3 className="pt-3 font-serif-display text-2xl font-light leading-snug text-gold">
                  {block.h3}
                </h3>
              </Reveal>
            );
          }

          return (
            <Reveal key={i} delay={delay}>
              <p className="font-body text-base font-light leading-[1.85] text-ivory/75 sm:text-lg">
                <InlineText text={block} />
              </p>
            </Reveal>
          );
        })}
      </div>

      <div className="mx-auto mt-16 max-w-[720px] border-t border-gold/15 pt-10">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-gold px-8 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-forest transition-colors duration-300 hover:bg-ivory"
        >
          Enquire about a stay
        </Link>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-24 max-w-[1400px]">
          <Overline>Continue reading</Overline>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blogs/${item.slug}`}
                className="group block"
              >
                <div className="img-zoom-wrap aspect-[4/3] overflow-hidden">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="img-zoom h-full w-full object-cover"
                  />
                </div>
                <span className="mt-4 block font-body text-[10px] uppercase tracking-[0.28em] text-gold">
                  {item.category}
                </span>
                <h2 className="mt-2 font-serif-display text-2xl font-light text-ivory transition-colors group-hover:text-gold">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

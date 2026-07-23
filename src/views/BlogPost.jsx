import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { formatBlogDate } from "../data";

export default function BlogPost({ post, related = [] }) {
  return (
    <article className="bg-forest-deep px-6 pb-28 pt-36 sm:px-10 lg:pt-44" data-testid="blog-post-page">
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
        {post.content.map((paragraph, i) => (
          <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
            <p className="font-body text-base font-light leading-[1.85] text-ivory/75 sm:text-lg">
              {paragraph}
            </p>
          </Reveal>
        ))}
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
              <Link key={item.slug} href={`/blogs/${item.slug}`} className="group block">
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

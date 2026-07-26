import BlogPost from "@/views/BlogPost";
import { BLOGS, getBlogBySlug } from "@/data";

const SLUG = "wellness-retreat-himachal-pradesh-vedanta-kufri";
const post = getBlogBySlug(SLUG);

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Vedanta`,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.cover }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default function Page() {
  const related = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 3);
  return <BlogPost post={post} related={related} />;
}

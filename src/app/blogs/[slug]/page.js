import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import { BLOGS, getBlogBySlug } from "@/data";

export const dynamic = "force-static";

export function generateStaticParams() {
  return BLOGS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return { title: "Story Not Found" };
  }

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

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 3);

  return <BlogPost post={post} related={related} />;
}

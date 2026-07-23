import BlogsPage from "@/views/Blogs";

export const dynamic = "force-static";

export const metadata = {
  title: "Journal & Stories",
  description:
    "Read the Vedanta journal — stories on Kufri, Himalayan stays, villa design, seasons, and slow mountain living in Himachal Pradesh.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Journal & Stories | Vedanta",
    description:
      "Stories on Kufri, Himalayan stays, villa design, and slow mountain living at Vedanta by Vaishno Group.",
    url: "/blogs",
  },
};

export default function Page() {
  return <BlogsPage />;
}


import AboutUsPage from "@/views/AboutUs";

export const dynamic = "force-static";

export const metadata = {
  title: "About Us | Vedanta by Vaishno Group",
  description:
    "Meet the leadership behind Vedanta by Vaishno Group, a private collection of luxury villas in Kufri built for stillness and privacy.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Vedanta by Vaishno Group",
    description:
      "Meet the leadership behind Vedanta by Vaishno Group, a private collection of luxury villas in Kufri built for stillness and privacy.",
    url: "/about-us",
  },
};

export default function Page() {
  return <AboutUsPage />;
}


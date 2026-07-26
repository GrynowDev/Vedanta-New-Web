import ThankYouPage from "@/views/ThankYou";

export const dynamic = "force-static";

export const metadata = {
  title: "Thank You",
  description:
    "Thank you for your enquiry. Our Vedanta concierge will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function Page() {
  return <ThankYouPage />;
}

import ContactPage from "@/views/Contact";

export const dynamic = "force-static";

export const metadata = {
  title: "Contact & Enquire",
  description:
    "Contact Vedanta by Vaishno Group to enquire about private Himalayan villa stays in Kufri. Concierge support via email, phone, and WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Enquire | Vedanta",
    description:
      "Enquire about private Himalayan villa stays in Kufri with Vedanta concierge.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}

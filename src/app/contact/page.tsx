import { type Metadata } from "next";
import { ContactForm } from "~/components/client";
import { InlineLink } from "~/components/misc";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const url = "https://www.sistersinstem.net";
const title = "Contact Us";
const description = "If you ever have any inquries, feel free to reach out to us! We typically respond in 3 - 5 business days.";
const locale = "en";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title: `${title} | Sisters in STEM`,
    description: description,
    url: url,
    siteName: "Sisters in STEM",
    images: [
      {
        url: "/assets/img/stem-sisters.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Sisters in STEM`,
    description: description,
    images: [
      {
        url: "/assets/img/stem-sisters.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    creatorId: "1067297456",
  },
  alternates: {
    canonical: "/contact-us",
    languages: {
      "en": "/contact-us",
      // "es": "/es/contact-us",
      // "fr": "/fr/contact-us",
      // "ja": "/ja/contact-us",
    },
  },
};

export default function ContactPage() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">Contact Us</h2>
      </header>
      <main className="px-3 min-[320px]:px-6 md:px-12 flex flex-col gap-4">
        <section className="flex flex-col gap-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-pink-600">
                Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col gap-2">
          <header className="relative w-full m-auto text-start">
            <h3 className="text-3xl text-pink-600 font-semibold">Email</h3>
          </header>
          <main className="w-full">
            If you&apos;d prefer, you may email us directly at <InlineLink target="_blank" rel="noopener noreferrer" href="mailto:contact@sistersinstem.net">contact@sistersinstem.net</InlineLink>.
          </main>
        </section>
      </main>
    </main>
  );
};
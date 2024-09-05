import { type Metadata } from "next";
import Image from "next/image";
import { AutoplayCarousel } from "~/components/client";
import { imageCarousel } from "~/components/constants";
import { InlineLink } from "~/components/misc";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";

const url = "https://www.sistersinstem.net";
const title = "The SiS Archive";
const description = "Want more STEM fun? Check out our past events and perform our fun experiments on the SiS Archive!";
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
    canonical: "/archive",
    languages: {
      "en": "/archive",
      // "es": "/es/archive",
      // "fr": "/fr/archive",
      // "ja": "/ja/archive",
    },
  },
};

export default function ArchivePage() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">The Sisters in STEM Archive</h2>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-4xl text-pink-600">Archives</h3>
        </header>
        <main className="flex flex-col flex-wrap space-y-4">
          <section className="space-y-2">
            <header className="mb-2">
              <h4 className="text-3xl text-pink-600">SiS Experiment Archive</h4>
            </header>
            <p>The SiS Experiment Archive is perfect for those who can&apos;t make it to SiS events yet still want to have fun with STEM. <InlineLink href="/archive/experiments">Click here</InlineLink> to find all of the fun experiments we&apos;ve had in the past!</p>
          </section>
          <section className="space-y-2">
            <header className="mb-2">
              <h4 className="text-3xl text-pink-600">SiS Event Gallery Archive</h4>
            </header>
            <main className="px-16">
              <AutoplayCarousel delay={5000}>
                <CarouselContent className="items-center">
                  {
                    imageCarousel.map(function(props) {
                      return (
                        <CarouselItem key={props.src} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                          <Image src={`/assets/img/${props.src}`} alt={props.alt} sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, (min-width: 640px) 40vw, 60vw" width={600} height={400} loading="eager" className="rounded-lg drop-shadow" />
                        </CarouselItem>
                      );
                    })
                  }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </AutoplayCarousel>
            </main>
          </section>
        </main>
      </main>
    </main>
  );
};
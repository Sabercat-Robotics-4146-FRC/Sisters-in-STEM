import Image from "next/image";
import PageHeader from "/components/page-header";
import InlineLink from "/components/inline-link";
import AutoplayCarousel from "/components/autoplay-carousel";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "/components/ui/carousel";
import { ImageCarousel } from "../page";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="The SiS Archive" description="Want more STEM fun? Check out our past events and perform our fun experiments on the SiS Archive!" src="/assets/img/girl-microscope.webp" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-4xl text-pink-600">Archives</h3>
        </header>
        <main className="flex flex-col flex-wrap gap-4">
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
                <CarouselContent>
                  {
                    ImageCarousel.map(function(ImageProps) {
                      return (
                        <CarouselItem key={ImageProps.src} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                          <Image src={`/assets/img/${ImageProps.src}`} alt={ImageProps.alt} sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, (min-width: 640px) 40vw, 60vw" width={600} height={400} loading="eager" className="rounded-lg" />
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
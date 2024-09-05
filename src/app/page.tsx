import Image from "next/image";
import { AutoplayCarousel } from "~/components/client";
import { imageCarousel, upcomingEvents } from "~/components/constants";
import { LinkButton } from "~/components/misc";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";

export default function Home() {
  return (
    <main>
      <header className="relative flex flex-col justify-center px-2 py-12 text-center text-black md:flex-row">
        <Image
          src="/assets/img/stem-sisters.webp"
          alt="3 photos consisting of female students learning about STEM through experiments."
          className="w-full md:w-1/2 object-cover"
          width={1598}
          height={1194}
          sizes="(max-width: 768px) 80vw, 40vw"
        />
        <main className="flex flex-col justify-center items-center bg-pink-200 px-10 py-12 text-xl">
          <Image
            src="/assets/img/logo.webp"
            alt="Sisters in STEM robot"
            className="w-28"
            width={2000}
            height={2000}
            sizes="20vw"
          />
          <h2 className="text-4xl text-pink-600">
            Sisters in STEM
          </h2>
          <p className="mb-2">
            By students, for students.
          </p>
          <LinkButton href="/about" className="z-[1] mb-2">
            Who We Are
          </LinkButton>
          <LinkButton href="/contact" className="z-[1] mb-2">
            Contact Us
          </LinkButton>
          <LinkButton href="/initiatives" className="z-[1] mb-2">
            Our Initiatives
          </LinkButton>
        </main>
      </header>
      <main className="flex flex-col justify-center px-16 mb-8 text-neutral-900/75">
        <header className="mb-2">
          <h2 className="text-4xl text-pink-600">
            Upcoming Events
          </h2>
        </header>
        <main className="flex flex-wrap mb-4">
          {
            upcomingEvents.map((event) => (
              <Card key={event.header}>
                <CardHeader>
                  <CardTitle className="text-3xl text-pink-600">
                    {event.header}
                  </CardTitle>
                  <CardDescription className="flex flex-col text-lg">
                    {event.description}
                    {event.link && <LinkButton href={event.link} target="_blank" rel="noopener noreferrer" className="z-[1] mb-2 w-max">
                      Learn More
                    </LinkButton>}
                  </CardDescription>
                </CardHeader>
                {event.images && <CardFooter className="flex flex-wrap gap-2">
                  {
                    event.images.map((image) => (
                      <Image key={image.src} src={"/assets/img/" + image.src} alt={image.alt} sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, (min-width: 640px) 40vw, 60vw" width={2560} height={1707} loading="lazy" className="rounded-lg w-auto max-h-96 drop-shadow" />
                    ))
                  }
                </CardFooter>}
              </Card>
            ))
          }
        </main>
        <footer className="text-base">
          Check our home page often for updates on upcoming events!
        </footer>
      </main>
      <footer className="flex flex-col justify-center px-16 mb-8">
        <header className="mb-4">
          <h2 className="text-3xl text-pink-600">
            Sisters in STEM: Past Events
          </h2>
        </header>
        <main>
          <AutoplayCarousel delay={5000}>
            <CarouselContent className="items-center">
              {
                imageCarousel.map((image) => (
                  <CarouselItem key={image.src} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Image src={"/assets/img/" + image.src} alt={image.alt} sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, (min-width: 640px) 40vw, 60vw" width={600} height={400} loading="lazy" className="rounded-lg drop-shadow" /> 
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </AutoplayCarousel>
        </main>
      </footer>
    </main>
  );
};
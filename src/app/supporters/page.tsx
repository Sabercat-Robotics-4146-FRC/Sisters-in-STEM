import Image from "next/image";
import { InlineLink } from "~/components/misc";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";

function Supporter({ donator, src, imgAlt, imgWidth, imgHeight, website }: { donator: string, src: string, imgAlt: string, imgWidth: number, imgHeight: number, website?: string }) {
  return (
    <Card>
      <CardContent className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap justify-center items-center p-6 space-x-2 space-y-2">
        <Image src={`/assets/img/${src}`} alt={imgAlt} sizes="(min-width: 1586px) 10vw, (min-width: 1024px) 20vw, 30vw" width={imgWidth} height={imgHeight} className="object-contain max-h-40" />
        <main className="space-y-2">
          <h5 className="text-2xl">{donator}</h5>
          {website && <InlineLink target="_blank" rel="noopener noreferrer" href={website}>Visit their website</InlineLink>}
        </main>
      </CardContent>
    </Card>
  );
};
function Mentor({ mentor }: { mentor: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{mentor}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">Supporters</h2>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-4xl text-pink-600">Thank You!</h3>
        </header>
        <section className="text-neutral-900/75 mb-4">
          <header className="mb-2">
            <h4 className="text-3xl text-pink-600">Volunteers</h4>
          </header>
          <main className="p-12">
            <Carousel>
              <CarouselContent className="items-center cursor-grab active:cursor-grabbing">
                <CarouselItem className="md:basis-1/2">
                  <Image sizes="(max-width: 768px) 60vw, 30vw" src="/assets/img/gigitheriveter.JPG" alt="Picture 1 of our volunteers" width={2400} height={1600} className="rounded-xl drop-shadow" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <Image sizes="(max-width: 768px) 60vw, 30vw" src="/assets/img/volunteers.webp" alt="Picture 2 of our volunteers" width={2560} height={1920} className="rounded-xl drop-shadow" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </main>
        </section>
        <section className="text-neutral-900/75 mb-4">
          <header className="mb-4">
            <h4 className="text-3xl text-pink-600">Donors</h4>
          </header>
          <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-4">
            <Supporter donator="Sabercat Robotics FIRST Team #4146" src="head-raw-large.png" imgAlt="Sabercat Robotics logo" imgWidth={4620} imgHeight={3570} website="https://www.sabercatrobotics.com/" />
            <Supporter donator="Saguaro Math & Science Academy Boosters" src="smsa.png" imgAlt="Saguaro Math & Science Academy logo" imgWidth={649} imgHeight={627} website="https://www.saguaromsaboosters.org/" />
            <Supporter donator="Battel Engineering, Inc." src="battel-engineering.webp" imgAlt="Battel Engineering, Inc. logo" imgWidth={960} imgHeight={720} website="http://battel-engineering.com/" />
            <Supporter donator="Farley Family Charitable Foundation" src="farley-foundation.png" imgAlt="Farley Family Charitable Foundation logo" imgWidth={1494} imgHeight={799} />
            <Supporter donator="SUSD Foundation" src="susd-foundation.png" imgAlt="SUSD Foundation logo" imgWidth={4620} imgHeight={3570} website="https://susdfoundation.org/" />
            <Supporter donator="Northrop Grumman" src="northrop-grumman.png" imgAlt="Northrop Grumman logo" imgWidth={4620} imgHeight={3570} website="https://www.northropgrumman.com/" />
          </main>
        </section>
        <section className="text-neutral-900/75">
          <header className="mb-4">
            <h4 className="text-3xl text-pink-600">Mentors</h4>
          </header>
          <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-4">
            <Mentor mentor="Sreyoshi Bahdrui" />
            <Mentor mentor="Frank Lilo" />
          </main>
        </section>
      </main>
    </main>
  );
};
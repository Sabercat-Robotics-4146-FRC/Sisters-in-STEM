import PageHeader from "/components/page-header";
import ExpandableImage from "/components/expandable-image";
import InlineLink from "/components/inline-link";
import { Card, CardContent } from "/components/ui/card";

function Supporter({ donator, src, imgAlt, imgWidth, imgHeight, website }) {
  return (
    <Card>
      <CardContent className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap justify-center items-center p-6 gap-2">
        <ExpandableImage src={`/assets/img/${src}`} alt={imgAlt} sizes="(min-width: 1586px) 30vw, (min-width: 1024px) 60vw, 90vw" width={imgWidth} height={imgHeight} className="object-contain max-h-40" />
        <main className="space-y-2">
          <h5 className="text-2xl">{donator}</h5>
          {website ? <InlineLink external href={website}>Visit their website</InlineLink> : ""}
        </main>
      </CardContent>
    </Card>
  );
};

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Supporters" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-4xl text-pink-600">Thank You!</h3>
        </header>
        <section className="text-neutral-900/75 mb-4">
          <header className="mb-2">
            <h4 className="text-3xl text-pink-600">Volunteers</h4>
          </header>
          <main className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center items-center px-8 gap-8">
            <ExpandableImage sizes="100vw" src="/assets/img/sistersinstem.jpg" alt="Picture 1 of our volunteers" width={360} height={240} buttonClassName="rounded-xl" />
            <ExpandableImage sizes="100vw" src="/assets/img/volunteers.webp" alt="Picture 2 of our volunteers" width={360} height={240} buttonClassName="rounded-xl" />
          </main>
        </section>
        <section className="text-neutral-900/75">
          <header className="mb-4">
            <h4 className="text-3xl text-pink-600">Donors & Mentors</h4>
          </header>
          <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-4">
            <Supporter donator="Sabercat Robotics FIRST Team #4146" src="head-raw-large.png" imgAlt="Sabercat Robotics logo" imgWidth={4620} imgHeight={3570} website="https://www.sabercatrobotics.com/" />
            <Supporter donator="Scottsdale Community College" src="scc.svg" imgAlt="Scottsdale Community College logo" imgWidth={4620} imgHeight={3570} website="https://www.scottsdalecc.edu/" />
            <Supporter donator="Saguaro Math & Science Academy" src="smsa.png" imgAlt="Saguaro Math & Science Academy logo" imgWidth={649} imgHeight={627} website="https://www.saguaromsaboosters.org/" />
            <Supporter donator="Battel Engineering, Inc." src="battel-engineering.webp" imgAlt="Battel Engineering, Inc. logo" imgWidth={960} imgHeight={720} website="http://battel-engineering.com/" />
            <Supporter donator="Farley Family Charitable Foundation" src="farley-foundation.png" imgAlt="Farley Family Charitable Foundation logo" imgWidth={1494} imgHeight={799} />
            <Supporter donator="SUSD Foundation" src="susd-foundation.png" imgAlt="SUSD Foundation logo" imgWidth={4620} imgHeight={3570} website="https://susdfoundation.org/" />
            <Supporter donator="Northrop Grumman" src="northrop-grumman.png" imgAlt="Northrop Grumman logo" imgWidth={4620} imgHeight={3570} website="https://www.northropgrumman.com/" />
            <Supporter donator="ASU Luminosity Lab" src="asu-luminosity-lab.jpg" imgAlt="ASU Luminosity Lab logo" imgWidth={1080} imgHeight={248} website="https://theluminositylab.com/" />
          </main>
        </section>
      </main>
    </main>
  );
};
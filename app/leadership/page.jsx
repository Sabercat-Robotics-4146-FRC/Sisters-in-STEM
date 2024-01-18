import LinkButton from "/components/link-button";
import PageHeader from "/components/page-header";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card";

export function Leader({ name, position, src, children }) {
  return (
    <Card className="basis-full lg:basis-1/2">
      <CardHeader>
        <CardTitle className="text-4xl">{name}</CardTitle>
        <CardDescription className="text-xl">{position}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center md:items-start gap-x-4">
        <Image src={`/assets/img/${src}`} className="basis-1/2 object-cover rounded-lg" alt={`Image of ${name}`} width={250} height={250} sizes="(max-width: 1024px) 80vw, 40vw"></Image>
        <p className="basis-1/2 text-start">{children}</p>
      </CardContent>
    </Card>
  );
};
export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Leadership" description="The people who lead and help innovate Sisters in STEM. Without them, we wouldn't be where we currently are today." src="/assets/img/15.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-3xl text-pink-600">Meet the Executive Board</h3>
        </header>
        <main className="text-neutral-900/75 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <Leader name="Delia Riley" position="Queen Sister" src="delia-riley.JPG">
            Description about Delia Riley
          </Leader>
          <Leader name="Leo Russo" position="Jester in STEM" src="leo-russo.JPG">
            Description about Leo Russo
          </Leader>
          <Leader name="Lindsay Baptiste" position="Volunteer Queen Sister" src="laney-olson.webp">
            Description about Lindsay Baptiste
          </Leader>
          <Leader name="Aarohi Ghorpade" position="Creative Sister" src="aarohi-ghorpade.JPG">
            Description about Aarohi Ghorpade
          </Leader>
          {/* <Leader name="Fiona Riley" position="Unknown" src="laney-olson.webp">
            Description about Fiona Riley
          </Leader>
          <Leader name="Aashni Sahai" position="Unknown" src="laney-olson.webp">
            Description about Aashni Sahai
          </Leader>
          <Leader name="Rachel Parker" position="Unknown" src="laney-olson.webp">
            Description about Rachel Parker
          </Leader>
          <Leader name="Claire Filipowicz" position="Unknown" src="laney-olson.webp">
            Description about Claire Filipowicz
          </Leader>
          <Leader name="Niki Natt" position="Unknown" src="laney-olson.webp">
            Description about Niki Natt
          </Leader> */}
        </main>
        <footer className="text-center">
          <p className="mb-4">We wouldn&apos;t be here without our founders and those who came before us!</p>
          <LinkButton href="/leadership/past-leaders">Past Leadership</LinkButton>
        </footer>
      </main>
    </main>
  );
};
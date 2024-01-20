import InlineLink from "/components/inline-link";
import LinkButton from "/components/link-button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "/components/ui/carousel";
import AutoplayCarousel from "/components/autoplay-carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card";

// Questions and answers for the FAQ section of the home page
const FAQ = [
  {
    question: "What is Sisters in STEM?",
    answer: <CardDescription>SiS is a multi-faceted STEM outreach program sponsored through the Scottsdale Math & Science Academy at Saguaro High School. Launched, designed and led entirely by our students, SiS provides STEM outreach activities and initiatives for young learners in grades K-12. For more information on our STEM initiatives, visit our <InlineLink href="/about-us">about us</InlineLink> page.</CardDescription>,
  },
  {
    question: "How can I get SiS to come to my community?",
    answer: <CardDescription>If you would like SiS to come to your community, feel free to <InlineLink href="/contact-us">contact us</InlineLink> and include information about yourself, the community you want SiS to come to, and why we should come.</CardDescription>,
  },
  {
    question: "Is there an archive of past SiS experiments or events?",
    answer: <CardDescription>Yes! We have archived all of our past experiments and events on our <InlineLink href="/archive">archive page</InlineLink>, so then you&apos;ll never miss out on anything at Sisters in STEM!</CardDescription>,
  },
  {
    question: "How can I stay up-to-date with SiS?",
    answer: <CardDescription>The best ways to stay up-to-date with SiS and what we&apos;re doing is to frequently check <InlineLink href="https://www.instagram.com/shs_sistersinstem/" external>our Instagram</InlineLink> and our website, as we often post updates on both.</CardDescription>,
  },
];
// Props for each image in the carousel at the bottom of the page
export const ImageCarousel = [
  {
    src: "stem-sisters.webp",
    alt: "example alt",
  },
  {
    src: "volunteers.webp",
    alt: "example alt",
  },
  {
    src: "roadshow.webp",
    alt: "example alt",
  },
  {
    src: "jada-reading.webp",
    alt: "example alt",
  },
];
export default function Home() {
 return (
    <main>
      <header className="px-2 py-12 relative flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center text-center text-black">
        <aside className="w-full md:w-1/2">
          <Image src="/assets/img/stem-sisters.webp" className="object-cover h-full w-full" alt="3 photos consisting of female students learning about STEM through experiments." width={450} height={400} quality={100} priority sizes="(max-width: 768px) 80vw, 40vw"></Image>
        </aside>
        <main className="flex flex-col flex-wrap justify-center items-center bg-pink-200 px-10 py-12 text-xl">
          <Image className="w-28" src="/assets/img/logo.webp" alt="Sisters in STEM robot" height={200} width={200} quality={100} sizes="10vw"></Image>
          <h2 className="text-4xl">Sisters in STEM</h2>
          <p className="mb-2">By students, for students.</p>
          <LinkButton href="/about-us">Learn Who We Are</LinkButton>
          <LinkButton href="/contact-us">Contact Us</LinkButton>
        </main>
      </header>
      <main className="flex flex-col flex-wrap justify-center items-center text-center mb-8 text-neutral-900/75">
        <section className="px-2 py-12 relative flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center text-center text-black">
          <main className="flex flex-col flex-wrap justify-center items-center bg-pink-200 px-10 py-12 text-xl md:max-w-[40%]">
            <h2 className="text-4xl">Our Initiatives</h2>
            <p className="mb-2">At Sisters in STEM (SiS), we inspire to guide our students into the interesting world of STEM, whether they are interested in Science, Technology, Engineering, or Math. Some of our events include our annual STEM celebration, our roadshow, and our &quot;read to me&quot; of <i>Jada Saves the Day!</i></p>
            <LinkButton href="/initiatives">Our Initiatives</LinkButton>
          </main>
          <aside className="w-full md:w-1/2">
            <Image src="/assets/img/annual-celebration.webp" className="object-cover h-full w-full" alt="Boy looking through microscope to learn about biology." width={450} height={400} quality={100} sizes="(max-width: 768px) 80vw, 40vw"></Image>
          </aside>
        </section>
        <section className="px-2 py-12 relative flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center text-center text-black">
          <aside className="w-full md:w-1/2">
            <Image src="/assets/img/barrett-jackson.jpg" className="object-contain p-2 h-full w-full" alt="Ultimate Family Play Date & Concert" width={450} height={400} quality={100} sizes="(max-width: 768px) 80vw, 40vw"></Image>
          </aside>
          <main className="flex flex-col flex-wrap justify-center items-center bg-pink-200 px-10 py-12 text-xl md:max-w-[40%]">
            <h2 className="text-4xl">Come See Us!</h2>
            <p className="mb-2">SiS will be at the Barrett-Jackson STEM Fest! Come visit us on January 20th from 8 A.M. to 5 P.M. at WestWorld of Scottsdale.</p>
            <LinkButton href="https://barrett-jackson.com/" external>Learn More</LinkButton>
          </main>
        </section>
        <section className="flex flex-col flex-wrap justify-center items-center mb-8">
          <header className="px-6">
            <h2 className="text-3xl">Frequently Asked Questions</h2>
            <p>Commonly asked questions about Sisters in STEM, answered right here.</p>
          </header>
          <main className="px-6 lg:px-16">
            <Carousel className="p-8 w-full hidden lg:flex items-center justify-start gap-x-4">
              <CarouselContent>
                {
                  FAQ.map(function(Information) {
                    return (
                      <CarouselItem key={Information.question} className="md:basis-1/2 text-start">
                        <Card>
                          <CardContent>
                            <CardHeader>
                              <CardTitle className="text-center">{Information.question}</CardTitle>
                            </CardHeader>
                            {Information.answer}
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    );
                  })
                }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {
              FAQ.map(function(Information) {
                return (
                  <Card className="lg:hidden mb-4" key={Information.question}>
                    <CardContent>
                      <CardHeader>
                        <CardTitle className="text-center">{Information.question}</CardTitle>
                      </CardHeader>
                      {Information.answer}
                    </CardContent>
                  </Card>
                );
              })
            }
          </main>
        </section>
        <section className="flex flex-col flex-wrap justify-center items-center mb-8">
          <header className="px-6 mb-4">
            <h2 className="text-3xl">Sisters in STEM: Past Events</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis facilis asperiores commodi eligendi natus, libero nostrum praesentium saepe doloribus, nisi minima fuga voluptates vitae tempora perferendis incidunt nihil aspernatur fugiat.</p>
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
  );
};
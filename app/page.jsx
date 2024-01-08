"use client";
import LinkButton from "@/components/link-button";
import Image from "next/image";

export default function Home() {
 return (
    <main>
      <header className="px-2 py-12 relative flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center text-center text-black">
        <aside className="w-full md:w-1/2">
          <Image src="/assets/img/stem-sisters.webp" className="object-cover h-full w-full" alt="3 photos consisting of female students learning about STEM through experiments." width={450} height={400} quality={100} priority sizes="(max-width: 768px) 100vw, 40vw"></Image>
        </aside>
        <main className="flex flex-col flex-wrap justify-center items-center bg-pink-200 px-10 py-12 text-xl">
          <Image className="w-28" src="/assets/img/logo.webp" alt="Sisters in STEM robot" height={200} width={200} quality={100} sizes="200px"></Image>
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
            <p className="mb-2">At Sisters in STEM (SiS), we inspire to guide our students into the interesting world of STEM, whether they are interested in Science, Technology, Engineering, or Math. Some of our events include our annual STEM celebration, our roadshow, and our "read to me" of <i>Jada Saves the Day!</i></p>
            <LinkButton href="/initiatives">Our Initiatives</LinkButton>
          </main>
          <aside className="w-full md:w-1/2">
            <Image src="/assets/img/annual-celebration.webp" className="object-cover h-full w-full" alt="Boy looking through microscope to learn about biology." width={450} height={400} quality={100} sizes="(max-width: 768px) 100vw, 40vw"></Image>
          </aside>
        </section>
        <section className="px-2 py-12 relative flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center text-center text-black">
          <aside className="w-full md:w-1/2">
            <Image src="/assets/img/ultimate-family-play-date.webp" className="object-contain p-2 h-full w-full" alt="Ultimate Family Play Date & Concert" width={450} height={400} quality={100} sizes="(max-width: 768px) 100vw, 40vw"></Image>
          </aside>
          <main className="flex flex-col flex-wrap justify-center items-center bg-pink-200 px-10 py-12 text-xl md:max-w-[40%]">
            <h2 className="text-4xl">Come See Us!</h2>
            <p className="mb-2">SiS will be at the Scottsdale Public Library Ultimate Family Playdate! Come visit us on Saturday, December 9th, between 9 a.m. and 1:30 p.m. at the Scottsdale Civic Center.</p>
            <LinkButton href="https://www.scottsdalelibrary.org/family-play-date" external>Learn More</LinkButton>
          </main>
        </section>
        <section className="flex flex-col flex-wrap justify-center items-center mb-8">
          <header className="px-6">
            <h2 className="text-3xl">Frequently Asked Questions</h2>
            <p>Commonly asked questions about Sisters in STEM, answered right here.</p>
          </header>
          <main className="w-full flex flex-col flex-wrap md:flex-row md:flex-nowrap items-start justify-center gap-x-4">
            <section className="overflow-clip flex flex-col flex-wrap justify-center items-center w-full md:w-1/3 mt-2">
              <header>
                <h3 className="text-2xl">Question?</h3>
              </header>
              <p>Answer.</p>
            </section>
          </main>
        </section>
        <section className="flex flex-col flex-wrap justify-center items-center mb-8">
          <header className="px-6">
            <h2 className="text-3xl">Sisters in STEM: Past Events</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis facilis asperiores commodi eligendi natus, libero nostrum praesentium saepe doloribus, nisi minima fuga voluptates vitae tempora perferendis incidunt nihil aspernatur fugiat.</p>
          </header>
          <main>
            <p>[Image carousel here]</p>
          </main>
        </section>
      </main>
    </main>
  );
};
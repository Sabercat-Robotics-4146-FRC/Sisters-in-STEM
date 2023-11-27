"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
    <main>
      <header className="px-2 py-12 relative flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center text-center text-black">
        <aside className="w-full md:w-1/2">
          <Image src="/assets/img/stem-sisters.webp" className="object-cover h-full w-full" alt="3 photos consisting of female students learning about STEM through experiments." width={450} height={400} quality={100} priority></Image>
        </aside>
        <main className="flex flex-col flex-wrap justify-center items-center bg-pink-200 px-10 py-12 text-xl">
          <Image className="w-28" src="/assets/img/logo.webp" alt="Sisters in STEM robot" height={200} width={200} quality={100}></Image>
          <h2 className="text-4xl">Sisters in STEM</h2>
          <p className="mb-2">By students, for students.</p>
          <Link href="/about-us" className="z-[1] transition-colors duration-500 text-pink-600 overflow-clip border-2 px-6 py-3 leading-none border-pink-600 font-medium relative before:absolute before:h-full before:w-full before:-z-[1] before:scale-x-0 before:inset-0 before:bg-pink-600 before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right hover:text-slate-100 focus-visible:text-slate-100 mb-2">Learn Who We Are</Link>
          <Link href="/contact-us" className="z-[1] transition-colors duration-500 text-pink-600 overflow-clip border-2 px-6 py-3 leading-none border-pink-600 font-medium relative before:absolute before:h-full before:w-full before:-z-[1] before:scale-x-0 before:inset-0 before:bg-pink-600 before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right hover:text-slate-100 focus-visible:text-slate-100">Contact Us</Link>
        </main>
      </header>
      <main className="flex flex-col flex-wrap justify-center items-center text-center mb-8 px-6 text-neutral-900/75">
        <section className="flex flex-col flex-wrap justify-center items-center mb-8">
          <header className="px-6">
            <h2 className="text-3xl">Our Initiatives</h2>
            <p>At Sisters in STEM (SiS), we inspire to guide our students into the interesting world of STEM, whether they are interested in Science, Technology, Engineering, or Math. Here are our main events that help us reach that goal.</p>
          </header>
          <nav className="flex flex-col flex-wrap md:flex-row md:flex-nowrap items-start justify-center gap-x-4">
            <Link href="/initiatives/roadshow" className="overflow-clip flex flex-col flex-wrap justify-center items-center w-full md:w-1/3 mt-2 group">
              <header className="flex justify-center items-center overflow-clip rounded-2xl relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/0 before:z-10 before:transition-colors before:duration-500 group-hover:before:bg-black/50 group-focus-visible:before:bg-black/50 text-white">
                <Image src="/assets/img/roadshow.webp" alt="SiS members in school gymnasium helping young students discover the world of STEM via experiments" width={512} height={341} className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"></Image>
                <p className="absolute z-10 text-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512" className="inline"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></p>
              </header>
              <main className="text-start">
                <h3 className="text-2xl">SiS Roadshow</h3>
                <p>Using our fully stocked SiS trailer, we travel to <i>you</i> to make STEM more accessible to schools and communities.</p>
              </main>
            </Link>
            <Link href="/initiatives/annual-celebration" className="overflow-clip flex flex-col flex-wrap justify-center items-center w-full md:w-1/3 mt-2 group">
              <header className="flex justify-center items-center overflow-clip rounded-2xl relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/0 before:z-10 before:transition-colors before:duration-500 group-hover:before:bg-black/50 group-focus-visible:before:bg-black/50 text-white">
                <Image src="/assets/img/annual-celebration.webp" alt="Boy looking through microscope to learn about biology" width={512} height={341} className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"></Image>
                <p className="absolute z-10 text-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512" className="inline"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></p>
              </header>
              <main className="text-start">
                <h3 className="text-2xl">Annual SiS Celebration</h3>
                <p>Each year, SiS and the Math & Science Academy invite kids aged 5-15 to an event, where they get to spend the afternoon learning about the wonderful world of STEM.</p>
              </main>
            </Link>
            <Link href="/initiatives/jada-reading" className="overflow-clip flex flex-col flex-wrap justify-center items-center w-full md:w-1/3 mt-2 group">
              <header className="flex justify-center items-center overflow-clip rounded-2xl relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/0 before:z-10 before:transition-colors before:duration-500 group-hover:before:bg-black/50 group-focus-visible:before:bg-black/50 text-white">
                <Image src="/assets/img/jada-reading.webp" alt="SiS members answering the question of a young student during a reading of Jada Saves the Day!" width={512} height={341} className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"></Image>
                <p className="absolute z-10 text-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512" className="inline"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></p>
              </header>
              <main className="text-start">
                <h3 className="text-2xl">"Jada Saves the Day!" Read to Me</h3>
                <p><i>Jada Saves the Day!</i>, written and published by one of our own SiS student founders, follows the story of Jada, a little girl with a big love of the sciences as she solves a nefarious cyber crime for her brother's robotics team.</p>
              </main>
            </Link>
          </nav>
        </section>
        <section className="flex flex-col flex-wrap justify-center items-center mb-8">
          <header className="px-6">
            <h2 className="text-3xl">Come See Us!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis facilis asperiores commodi eligendi natus, libero nostrum praesentium saepe doloribus, nisi minima fuga voluptates vitae tempora perferendis incidunt nihil aspernatur fugiat.</p>
          </header>
          <nav className="flex flex-col flex-wrap md:flex-row md:flex-nowrap items-start justify-center gap-x-4">
            <Link href="/upcoming-events/ultimate-family-playdate" className="overflow-clip flex flex-col flex-wrap justify-center items-center w-full md:w-1/3 mt-2 group">
              <header className="flex justify-center items-center overflow-clip rounded-2xl relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/0 before:z-10 before:transition-colors before:duration-500 group-hover:before:bg-black/50 group-focus-visible:before:bg-black/50 text-white">
                <Image src="/assets/img/ultimate-family-play-date.webp" alt="Ultimate Family Play Date & Concert" width={512} height={341} className="object-cover p-4 transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"></Image>
                <p className="absolute z-10 text-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512" className="inline"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></p>
              </header>
              <main className="text-start">
                <h3 className="text-2xl">Ultimate Family Play Date & Concert</h3>
                <p>SiS will be at the Scottsdale Public Library Ultimate Family Playdate! Come visit us on Saturday, December 9th, between 9 a.m. and 1:30 p.m. at the Scottsdale Civic Center.</p>
              </main>
            </Link>
          </nav>
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
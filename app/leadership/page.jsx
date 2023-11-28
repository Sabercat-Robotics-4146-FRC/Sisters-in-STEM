"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/15.jpg" alt="Leadership" width={672} height={228} quality={100} loading="eager" priority></Image>
        <h2 className="text-slate-100 text-4xl font-semibold drop-shadow-[0_0_10px_black]">Leadership</h2>
        <p className="text-white/75 text-xl font-medium drop-shadow-[0_0_10px_black]">The people who lead and help innovate Sisters in STEM. Without them, we wouldn't be where we currently are today.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-3xl text-pink-600">Meet the Executive Board</h3>
        </header>
        <main className="text-neutral-900/75 flex flex-col flex-wrap gap-y-8">
          <section className="flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-x-8 justify-center">
            <aside className="w-full md:w-2/5">
              <Image src="/assets/img/annual-celebration.webp" className="object-cover h-full w-full rounded-xl" alt="Delia Riley" width={450} height={400} quality={100} priority></Image>
            </aside>
            <main className="md:w-2/5">
              <header>
                <h4 className="text-2xl text-black">Delia Riley</h4>
              </header>
              <p className="mb-2"><b className="font-semibold">Who Am I?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, adipisci numquam quaerat inventore praesentium id reprehenderit? Quas nostrum tenetur delectus quo tempore, adipisci, facere nobis consequatur hic reprehenderit fugit dolor.</p>
              <p className="mb-2"><b className="font-semibold">Fun Fact:</b> Lorem ipsum dolor sit amet.</p>
            </main>
          </section>
          <section className="flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-x-8 justify-center">
            <main className="md:w-2/5">
              <header>
                <h4 className="text-2xl text-black">Leo Russo</h4>
              </header>
              <p className="mb-2"><b className="font-semibold">Who Am I?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, adipisci numquam quaerat inventore praesentium id reprehenderit? Quas nostrum tenetur delectus quo tempore, adipisci, facere nobis consequatur hic reprehenderit fugit dolor.</p>
              <p className="mb-2"><b className="font-semibold">Fun Fact:</b> Lorem ipsum dolor sit amet.</p>
            </main>
            <aside className="w-full md:w-2/5">
              <Image src="/assets/img/annual-celebration.webp" className="object-cover h-full w-full rounded-xl" alt="Leo Russo" width={450} height={400} quality={100} priority></Image>
            </aside>
          </section>
          <section className="flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-x-8 justify-center">
            <aside className="w-full md:w-2/5">
              <Image src="/assets/img/annual-celebration.webp" className="object-cover h-full w-full rounded-xl" alt="Lindsay Baptiste" width={450} height={400} quality={100} priority></Image>
            </aside>
            <main className="md:w-2/5">
              <header>
                <h4 className="text-2xl text-black">Lindsay Baptiste</h4>
              </header>
              <p className="mb-2"><b className="font-semibold">Who Am I?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, adipisci numquam quaerat inventore praesentium id reprehenderit? Quas nostrum tenetur delectus quo tempore, adipisci, facere nobis consequatur hic reprehenderit fugit dolor.</p>
              <p className="mb-2"><b className="font-semibold">Fun Fact:</b> Lorem ipsum dolor sit amet.</p>
            </main>
          </section>
          <section className="flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-x-8 justify-center">
            <main className="md:w-2/5">
              <header>
                <h4 className="text-2xl text-black">Aarohi Ghorpade</h4>
              </header>
              <p className="mb-2"><b className="font-semibold">Who Am I?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, adipisci numquam quaerat inventore praesentium id reprehenderit? Quas nostrum tenetur delectus quo tempore, adipisci, facere nobis consequatur hic reprehenderit fugit dolor.</p>
              <p className="mb-2"><b className="font-semibold">Fun Fact:</b> Lorem ipsum dolor sit amet.</p>
            </main>
            <aside className="w-full md:w-2/5">
              <Image src="/assets/img/annual-celebration.webp" className="object-cover h-full w-full rounded-xl" alt="Aarohi Ghorpade" width={450} height={400} quality={100} priority></Image>
            </aside>
          </section>
          <footer className="text-center">
            <p className="mb-4">We wouldn't be here without our founders and those who came before us!</p>
            <Link href="/leadership/past-leaders" className="z-[1] transition-colors duration-500 text-pink-600 overflow-clip border-2 px-6 py-3 leading-none border-pink-600 font-medium relative before:absolute before:h-full before:w-full before:-z-[1] before:scale-x-0 before:inset-0 before:bg-pink-600 before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right hover:text-slate-100 focus-visible:text-slate-100 mb-2">Past Leadership</Link>
          </footer>
        </main>
      </main>
    </main>
  );
};
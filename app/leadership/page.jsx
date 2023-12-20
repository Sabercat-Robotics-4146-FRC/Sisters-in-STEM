import LinkButton from "@/components/link-button";
import PageHeader from "@/components/page-header";
import Image from "next/image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Leadership" description="The people who lead and help innovate Sisters in STEM. Without them, we wouldn't be where we currently are today." src="/assets/img/15.jpg" />
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
            <LinkButton href="/leadership/past-leaders">Past Leadership</LinkButton>
          </footer>
        </main>
      </main>
    </main>
  );
};
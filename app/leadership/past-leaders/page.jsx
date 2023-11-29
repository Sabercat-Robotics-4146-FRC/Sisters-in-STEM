"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 lg:px-12 py-3 min-[320px]:py-6 lg:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/15.jpg" alt="Leadership" width={672} height={228} quality={100} loading="eager" priority></Image>
        <h2 className="text-slate-100 text-4xl font-semibold drop-shadow-[0_0_10px_black]">Past Leaders</h2>
        <p className="text-white/75 text-xl font-medium drop-shadow-[0_0_10px_black]">We wouldn't be here without our founders and those who came before us!</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-3xl text-pink-600">Meet the Founders</h3>
        </header>
        <main className="text-neutral-900/75 flex flex-col flex-wrap gap-y-8">
          <section className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap gap-x-8 justify-center">
            <aside className="w-full lg:w-2/5">
              <Image src="/assets/img/eli-arnold.webp" className="object-cover h-full w-full rounded-xl" alt="Eli Arnold" width={450} height={400} quality={100} priority></Image>
            </aside>
            <main className="lg:w-2/5">
              <header>
                <h4 className="text-2xl text-black">Eli Arnold</h4>
              </header>
              <p className="mb-2"><b className="font-semibold">Graduation Year:</b> 2019</p>
              <p className="mb-2"><b className="font-semibold">Time in Sabercat Robotics:</b> Eli was a four year member and returns regularly to mentor. While on the team, Eli was the Chief Software Engineer for two years, and is extremely knowledgeable in several programming languages.</p>
              <p className="mb-2"><b className="font-semibold">High School Accomplishment:</b> In addition to graduating high school from Saguaro's Math and Science Academy with Distinction, she participated heavily in the fine arts.  The fine arts are a big part of her life- she was the technical director for the choir program, a member of Tri-M Music Honor Society as well as Thespian National Honors Society, and the President of Saguaro's Swing Dance Club.</p>
              <p><b className="font-semibold">Where is She Now?</b> Now, Eli is a full-time student at ASU Barrett, the Honors College, Majoring in Computer Science and minoring in Organ performance. She is also a member of both Society of Women Engineers and Women in Computer Science.</p>
            </main>
          </section>
          <section className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap gap-x-8 justify-center">
            <main className="lg:w-2/5">
              <header>
                <h4 className="text-2xl text-black">Kayli Battel</h4>
              </header>
              <p className="mb-2"><b className="font-semibold">Graduation Year:</b> 2020</p>
              <p className="mb-2"><b className="font-semibold">Time in Sabercat Robotics:</b> Kayli was an officer on the team since first joining, earning the only freshman Robotics Varsity Letter her year. Kayli was Safety Captain for three years, Head of Marketing and Chairman's in 11th grade, and both President and Director of Public Relations in 12th grade. In 2019, she was the Tournament Director for the Scottsdale FIRST LEGO League Qualifier. Kayli was the first Scottsdale Unified School District student to be recognized as a FIRST Robotics Competition Dean's List Finalist.</p>
              <p className="mb-2"><b className="font-semibold">High School Accomplishment:</b> Kayli was a member of the Visions art program at Scottsdale Museum of Contemporary Art and a Varsity volleyball player at Saguaro. She graduated from the Scottsdale Math and Science Academy with Distinction and from Saguaro as one of Saguaro's three Valedictorians her year. Because of her work on Sisters in STEM, Kayli was recognized as one of Junior Achievement's 2020 Arizona 18 Under 18 award recipients.</p>
              <p><b className="font-semibold">Where is She Now?</b> Kayli is attending Tufts University in Medford, Massachusetts. She is majoring in Human Factors Engineering and minoring in Engineering Education.</p>
            </main>
            <aside className="w-full lg:w-2/5">
              <Image src="/assets/img/kayli-battel.webp" className="object-cover h-full w-full rounded-xl" alt="Kayli Battel" width={450} height={400} quality={100} priority></Image>
            </aside>
          </section>
          <section className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap gap-x-8 justify-center">
            <aside className="w-full lg:w-2/5">
              <Image src="/assets/img/laney-olson.webp" className="object-cover h-full w-full rounded-xl" alt="Laney Olson" width={450} height={400} quality={100} priority></Image>
            </aside>
            <main className="lg:w-2/5">
              <header>
                <h4 className="text-2xl text-black">Laney Olson</h4>
              </header>
              <p className="mb-2"><b className="font-semibold">Graduation Year:</b> 2019</p>
              <p className="mb-2"><b className="font-semibold">Time in Sabercat Robotics:</b> Laney was a member of FIRST Robotics Competition all four years of high school. She was the team's Safety Captain during her freshman and sophomore years and then transitioned to the business team as the Director of Public Relations for two years. For 2017 and 2018, Laney was the Tournament Director for the Scottsdale FIRST LEGO League Qualifier, and before that organized the team to mentor FLL teams across the Scottsdale Unified School District.</p>
              <p className="mb-2"><b className="font-semibold">High School Accomplishment:</b> During her time at Saguaro, Laney was a dedicated member of choir, swing dance club, and was inducted into the International Thespian Honors Society.</p>
              <p><b className="font-semibold">Where is She Now?</b> Laney is currently following her passion for working with students and getting a degree in education. Because of her love of outreach and STEM, Laney will continue to be involved in SiS and FIRST for many years to come.</p>
            </main>
          </section>
        </main>
      </main>
    </main>
  );
};
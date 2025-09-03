import { Leader, LinkButton } from "~/components/misc";
import { type Metadata } from "next";

const url = "https://www.sistersinstem.net";
const title = "Leadership";
const description = "The people who lead and help innovate Sisters in STEM. Without them, we wouldn't be where we currently are today.";
const locale = "en";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title: `${title} | Sisters in STEM`,
    description: description,
    url: url,
    siteName: "Sisters in STEM",
    images: [
      {
        url: "/assets/img/stem-sisters.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Sisters in STEM`,
    description: description,
    images: [
      {
        url: "/assets/img/stem-sisters.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    creatorId: "1067297456",
  },
  alternates: {
    canonical: "/leadership",
    languages: {
      "en": "/leadership",
      // Commented languages are not yet supported, and therefore should not be uncommented
      // "es": "/es/leadership",
      // "fr": "/fr/leadership",
      // "ja": "/ja/leadership",
    },
  },
};

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">Leadership</h2>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-3xl text-pink-600">Meet the Executive Board</h3>
        </header>
        <main className="text-neutral-900/75 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <Leader name="Fiona Riley" position="Co-President of Operations" src="fiona-riley.JPG">
            <b>Graduation Year:</b> 2030<br />
            <b>Time in Sabercat Robotics:</b> Fiona joined Saguaro&apos;s FRC robotics team her sophomore year, working on everything and anything mechanical. Fiona is now the mechanical, design, and electrical lead for the team! Fiona has been involved in Sisters in STEM since she was 15, and spent the last school year working on the advisory board. <br />
            <b>High School Accomplishments:</b> Fiona is a two-year Scottsdale Math and Science academy ambassador, along with the Secretary of the school’s chapter of the National Honor Society. She is also a member of the SUSD Student Advisory Board, Junior President of the Mentor Ambassador Program, and the scheduling chair of Saguaro&apos;s Chemistry Olympiad. Outside of school, SiS, and robotics, Fiona is a Spanish tutor and a bookworm!
          </Leader>
          <Leader name="Aashni Sahai" position="Co-President of Operations" src="aashni-sahai.JPG">
            <b>Graduation Year:</b> 2027<br />
            <b>Time in Sabercat Robotics:</b> Aashni has been on the FRC team during her freshman and sophomore years, where she specializes in design, mechanical, and electrical! She has served two years as the team&apos;s Safety Captain and has been on the SiS executive board throughout her time at Saguaro.<br />
            <b>High School Accomplishments:</b> Aashni was the Freshman and Sophomore president during her respective years at the academy. She loves STEM and enjoys working on different projects with her robotics team. Outside of that, she is the president of Saguaro&apos;s &quot;She&apos;s the First&quot; and a member of the Student Advisory Board. She loves to golf and create art as well!
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
        <footer className="flex flex-col gap-2">
          <p className="text-lg">We wouldn&apos;t be here without our founders and those who came before us!</p>
          <LinkButton className="w-fit" href="/leadership/past-leaders">Past Leadership</LinkButton>
        </footer>
      </main>
    </main>
  );
};
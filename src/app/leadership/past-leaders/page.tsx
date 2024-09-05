import { type Metadata } from "next";
import { Leader } from "~/components/misc";

const url = "https://www.sistersinstem.net";
const title = "Past Leaders";
const description = "We wouldn't be here without our founders and those who came before us!";
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
    canonical: "/leadership/past-leaders",
    languages: {
      "en": "/leadership/past-leaders",
      // Commented languages are not yet supported, and therefore should not be uncommented
      // "es": "/es/leadership/past-leaders",
      // "fr": "/fr/leadership/past-leaders",
      // "ja": "/ja/leadership/past-leaders",
    },
  },
};

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 lg:px-12 py-3 min-[320px]:py-6 lg:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">Past Leaders</h2>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-3xl text-pink-600">Meet the Founders</h3>
        </header>
        <main className="text-neutral-900/75 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Leader name="Eli Arnold" position="Founder" src="eli-arnold.webp">
            <b>Graduation Year:</b> 2019<br />
            <b>Time in Sabercat Robotics:</b> Eli was a four year member and returns regularly to mentor. While on the team, Eli was the Chief Software Engineer for two years, and is extremely knowledgeable in several programming languages.<br />
            <b>High School Accomplishment:</b> In addition to graduating high school from Saguaro&apos;s Math and Science Academy with Distinction, she participated heavily in the fine arts. The fine arts are a big part of her life- she was the technical director for the choir program, a member of Tri-M Music Honor Society as well as Thespian National Honors Society, and the President of Saguaro&apos;s Swing Dance Club.<br />
            <b>Where is She Now?</b> Now, Eli is a full-time student at ASU Barrett, the Honors College, Majoring in Computer Science and minoring in Organ performance. She is also a member of both Society of Women Engineers and Women in Computer Science.
          </Leader>
          <Leader name="Kayli Battel" position="Founder" src="kayli-battel.webp">
            <b>Graduation Year:</b> 2020<br />
            <b>Time in Sabercat Robotics:</b> Kayli was an officer on the team since first joining, earning the only freshman Robotics Varsity Letter her year. Kayli was Safety Captain for three years, Head of Marketing and Chairman&apos;s in 11th grade, and both President and Director of Public Relations in 12th grade. In 2019, she was the Tournament Director for the Scottsdale FIRST LEGO League Qualifier. Kayli was the first Scottsdale Unified School District student to be recognized as a FIRST Robotics Competition Dean&apos;s List Finalist.<br />
            <b>High School Accomplishment:</b> Kayli was a member of the Visions art program at Scottsdale Museum of Contemporary Art and a Varsity volleyball player at Saguaro. She graduated from the Scottsdale Math and Science Academy with Distinction and from Saguaro as one of Saguaro&apos;s three Valedictorians her year. Because of her work on Sisters in STEM, Kayli was recognized as one of Junior Achievement&apos;s 2020 Arizona 18 Under 18 award recipients.<br />
            <b>Where is She Now?</b> Kayli is attending Tufts University in Medford, Massachusetts. She is majoring in Human Factors Engineering and minoring in Engineering Education.
          </Leader>
          <Leader name="Laney Olson" position="Founder" src="laney-olson.webp">
            <b>Graduation Year:</b> 2019<br />
            <b>Time in Sabercat Robotics:</b> Laney was a member of FIRST Robotics Competition all four years of high school. She was the team&apos;s Safety Captain during her freshman and sophomore years and then transitioned to the business team as the Director of Public Relations for two years. For 2017 and 2018, Laney was the Tournament Director for the Scottsdale FIRST LEGO League Qualifier, and before that organized the team to mentor FLL teams across the Scottsdale Unified School District.<br />
            <b>High School Accomplishment:</b> During her time at Saguaro, Laney was a dedicated member of choir, swing dance club, and was inducted into the International Thespian Honors Society.<br />
            <b>Where is She Now?</b> Laney is currently following her passion for working with students and getting a degree in education. Because of her love of outreach and STEM, Laney will continue to be involved in SiS and FIRST for many years to come.
          </Leader>
          <Leader name="Delia Riley" position="President of Operations" src="delia-riley.JPG">
            <b>Graduation Year:</b> 2024<br />
            <b>Time in Sabercat Robotics:</b> Delia was on VEX and FRC teams, junior and senior year, respectively. She was mechanical during her time in VEX, also maintaining the engineering notebook. Her senior year, she was on the business team. She was on the Sisters in STEM executive board through all of high school.<br />
            <b>High School Accomplishments:</b> Delia was president of the Scottsdale Math & Science Academy and very involved with every aspect of the academy. She competed with CyberPatriot and loved AP Chemistry & Biology. She was also in the marching band, as Guard Captain.
          </Leader>
          <Leader name="Leo Russo" position="Vice President of Operations" src="leo-russo.JPG">
            <b>Graduation Year:</b> 2024<br />
            <b>Time in Sabercat Robotics:</b> Joining his Junior year,  Leo has been a part of both the FRC and VEX teams. Leo joined the business team and earned a leadership title in outreach. He focused on writing essays for FRC awards and grants, along with designing social media for the team.<br />
            <b>High School Accomplishments:</b> Leo participated in many academic clubs, including the Math and Science Academy, the National Honors Society, and CyberPatriot. He was heavily focused on academics, while integrating his creativity into his endeavors. After completing Graphic Design courses, he noticed a need for design throughout his school. He received his certification in Graphic Design which allowed him to design logos and posters for the school.
          </Leader>
        </main>
      </main>
    </main>
  );
};
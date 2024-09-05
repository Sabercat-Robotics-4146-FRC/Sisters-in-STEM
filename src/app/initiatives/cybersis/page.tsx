import { type Metadata } from "next";
import Image from "next/image";

const url = "https://www.sistersinstem.net";
const title = "CyberSiS";
const description = "Our CyberSiS program, helping the people of the future stay safe online.";
const locale = "en";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title: `${title} | Sisters in STEM`,
    description,
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
    locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Sisters in STEM`,
    description,
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
    canonical: "/initiatives/cybersis",
    languages: {
      "x-default": "/initiatives/cybersis",
      "en": "/initiatives/cybersis",
      // Commented languages are not yet supported, and therefore should not be uncommented
      // "es": "/es/initiatives/cybersis",
      // "fr": "/fr/initiatives/cybersis",
      // "ja": "/ja/initiatives/cybersis",
    },
  },
};

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">CyberSiS</h2>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <main className="flex flex-col flex-wrap space-x-2 space-y-2">
          <header>
            <h3 className="text-4xl text-pink-600">What is CyberSiS?</h3>
          </header>
          <main className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <p className="basis-full sm:basis-3/4">
              CyberSiS is an initiative launched with support from employees of Northrop Grumman in partnership with CyberPatriot. This program strives to teach students in grades K-6 about Cybersecurity.<br />
              With our increasingly technology-based future, it is becoming more and more important to educate students on internet safety. We decided we wanted to make a difference.<br />
              Saguaro High School Math and Science Academy volunteers, with CyberPatriot, used their technical knowledge to create presentations that educate students in Cybersecurity.<br />
              These lessons focus on the protection of personal information, malware, and social media in order to prepare students for the challenges they may face on the internet.<br />
              With a pilot program at a local elementary school, our volunteers have been able to teach lessons to five 3rd Grade and two 5th Grade classes in a live virtual classroom during the pandemic.<br />
              Connecting with students during COVID-19 is extremely important to us, and we are proud to be able to launch this program during such uncertain times.
            </p>
            <Image src="/assets/img/sis-and-cyberpatriot.webp" alt="SiS and Cyberpatriot" sizes="(min-width: 640px) 40vw, 80vw" width={582} height={486} className="basis-full sm:basis-1/4" />
          </main>
          <footer className="flex flex-col flex-wrap space-x-2 space-y-2">
            <header>
              <h3 className="text-4xl text-pink-600">Special Thanks</h3>
            </header>
            <p>
              Special Thanks to Frank Lillo, Northrop Grumman Cybersecurity Professional and to Natalie Foster, Kritin Mandala, and Kennan McAndrews for finding the program.
            </p>
          </footer>
        </main>
      </main>
    </main>
  );
};
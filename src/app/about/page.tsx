import { type Metadata } from "next";
import Image from "next/image";
import { InlineLink } from "~/components/misc";

const url = "https://www.sistersinstem.net";
const title = "About Us";
const description = "Learn more about Sisters in STEM, a nonprofit organization that helps students' interest for STEM grow.";
const locale = "en";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
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
    title: title,
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
  manifest: "/assets/ico/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/assets/ico/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/assets/ico/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        url: "/assets/ico/favicon.ico",
        sizes: "48x48",
      },
      {
        url: "/assets/ico/android-chrome-192x192.png",
        sizes: "192x192",
      },
    ],
    shortcut: ["/assets/ico/favicon.ico"],
    apple: [
      {
        url: "/assets/ico/apple-touch-icon-57x57.png",
        sizes: "57x57",
      },
      {
        url: "/assets/ico/apple-touch-icon-60x60.png",
        sizes: "60x60",
      },
      {
        url: "/assets/ico/apple-touch-icon-72x72.png",
        sizes: "72x72",
      },
      {
        url: "/assets/ico/apple-touch-icon-76x76.png",
        sizes: "76x76",
      },
      {
        url: "/assets/ico/apple-touch-icon-114x114.png",
        sizes: "114x114",
      },
      {
        url: "/assets/ico/apple-touch-icon-120x120.png",
        sizes: "120x120",
      },
      {
        url: "/assets/ico/apple-touch-icon-152x152.png",
        sizes: "152x152",
      },
      {
        url: "/assets/ico/apple-touch-icon-180x180.png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/assets/ico/safari-pinned-tab.svg",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-57x57-precomposed.png",
        sizes: "57x57",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-60x60-precomposed.png",
        sizes: "60x60",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-72x72-precomposed.png",
        sizes: "72x72",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-76x76-precomposed.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-114x114-precomposed.png",
        sizes: "114x114",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-120x120-precomposed.png",
        sizes: "120x120",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-144x144-precomposed.png",
        sizes: "144x144",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-152x152-precomposed.png",
        sizes: "152x152",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/ico/apple-touch-icon-180x180-precomposed.png",
        sizes: "180x180",
      },
    ],
  },
  alternates: {
    canonical: "/about",
    languages: {
      "x-default": "/about",
      en: "/about",
      // Commented languages are not yet supported, and therefore should not be uncommented
      // "es": "/es/about",
      // "fr": "/fr/about",
      // "ja": "/ja/about",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Section({ title, src, alt, imgHeight, imgWidth, left, children }: { title: string; src: string; alt: string; imgHeight: number; imgWidth: number; left?: boolean; children: React.ReactNode; }) {
  return (
    <section className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {left && <aside className="basis-3/5 hidden lg:block">
        <Image src={`/assets/img/${src}`} alt={alt} sizes="(min-width: 1024px) 40vw, 60vw" height={imgHeight} width={imgWidth} className="rounded-xl" />
      </aside>}
      <main className="text-neutral-900/75 basis-2/5">
        <header className="mb-2 text-center">
          <h4 className="text-3xl text-pink-600">{title}</h4>
        </header>
        {children}
      </main>
      <aside className={`basis-3/5 block ${left && "lg:hidden"}`}>
        <Image src={`/assets/img/${src}`} alt={alt} sizes="(min-width: 1024px) 40vw, 60vw" height={imgHeight} width={imgWidth} className="rounded-xl" />
      </aside>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">About Us</h2>
      </header>
      <main className="flex flex-col flex-wrap gap-y-8 px-6 min-[480px]:px-12">
        <Section title="Our Beginnings" src="logo.webp" alt="Sisters in STEM robot" imgHeight={2000} imgWidth={2000}>
          <p>Inspired by the cancellation of a local STEM event for girls in 2018, three Saguaro FRC Robotics students decided to create an event of their own. In just three weeks, they created a live STEM fair for students aged 5-15 and their parents across the Valley. With over 200 attendees, 45 student volunteers, and over 50 Phoenix professional and academic participants, our first year was a wild success - and taught us how much more we could do for our community!</p>
        </Section>
        <Section left title="Who We Are" src="about-us.webp" alt="SiS volunteer amazing young girl with STEM experiment." imgHeight={1620} imgWidth={1080}>
          <p>We are students at Saguaro High with a passion for STEM - and we want to share that love of the sciences with everyone in our community! Supported by our MSA leadership, SUSD leaders, and mentors throughout the STEM professional community, we design, create, and run a broad array of STEM oriented events and initiatives within SUSD and for the broader Phoenix community.</p>
        </Section>
        <Section title="What We Do" src="syringe-stem-experiment.webp" alt="2 young girls using synringes in a STEM experiment at SiS event" imgHeight={2560} imgWidth={1707}>
          <p>Each year, we host a large event, just like the one that gave us our start--except, bigger & better. Our events also travel with the SiS Roadshow, made possible by the Arizona Diamondbacks School Challenge Program. We also do book readings of Jada Saves the Day!, written by founder Kayli Battel. To find out more about our events, <InlineLink href="/initiatives">click here</InlineLink>.</p>
        </Section>
        <Section left title="Why We Do It" src="jamie-hurr.JPG" alt="Young girl looking through microscope during an experiment at a SiS event" imgHeight={2560} imgWidth={1696}>
          <p>Our events are by students, for students. We know what it&apos;s like to be the only girl in a computer science class, or the friend left to decorate the group project. Our events aim to change that, one child at a time, by showing all children that STEM is a field for everyone.</p>
        </Section>
      </main>
    </main>
  );
};
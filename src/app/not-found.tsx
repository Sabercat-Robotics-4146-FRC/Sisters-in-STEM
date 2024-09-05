import { type Metadata } from "next";
import { InlineLink, LinkButton } from "~/components/misc";

const url = "https://www.sistersinstem.net";
const title = "Not Found";
const description = "Error 404: Page not found";
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
    index: false,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">Error 404</h2>
      </header>
      <main className="flex flex-col justify-center w-full">
        <h2 className="mb-3 text-3xl text-pink-600">Hmm...</h2>
        <p className="mb-6">It seems like the page you were looking for could not be found. If this seems like a mistake, please <InlineLink href="/contact-us">contact us</InlineLink>. Thank you!</p>
        <LinkButton href="/" className="w-fit">Homepage</LinkButton>
      </main>
    </main>
  );
};
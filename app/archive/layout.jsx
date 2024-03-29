const url = "https://www.sistersinstem.net";
const title = "The SiS Archive";
const description = "Want more STEM fun? Check out our past events and perform our fun experiments on the SiS Archive!";
const locale = "en";
export const metadata = {
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
    canonical: "/archive",
    languages: {
      "en": "/archive",
      // "es": "/es/archive",
      // "fr": "/fr/archive",
      // "ja": "/ja/archive",
    },
  },
};

export default function Layout({ children }) {
  return children;
};
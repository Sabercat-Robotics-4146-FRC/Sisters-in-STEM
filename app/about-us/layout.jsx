const url = "https://www.sistersinstem.net";
const title = "About Us";
const description = "Learn more about Sisters in STEM, a nonprofit organization that helps students' interest for STEM grow.";
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
    canonical: "/about-us",
    languages: {
      "en": "/about-us",
      // "es": "/es/about-us",
      // "fr": "/fr/about-us",
      // "ja": "/ja/about-us",
    },
  },
};

export default function Layout({ children }) {
  return children;
};
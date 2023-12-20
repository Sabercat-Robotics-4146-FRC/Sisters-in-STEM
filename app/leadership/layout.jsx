const url = "https://www.sistersinstem.net";
const title = "Leadership";
const description = "The people who lead and help innovate Sisters in STEM. Without them, we wouldn't be where we currently are today.";
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

export default function Layout({children}) {
  return children;
};
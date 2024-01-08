const url = "https://www.sistersinstem.net";
const title = "Past Leaders";
const description = "We wouldn't be here without our founders and those who came before us!";
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

export default function Layout({ children }) {
  return children;
};
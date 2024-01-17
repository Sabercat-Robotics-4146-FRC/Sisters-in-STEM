const url = "https://www.sistersinstem.net";
const title = "Initiatives";
const description = "At SiS, we inspire to guide our students into the interesting world of STEM, whether they are interested in Science, Technology, Engineering, or Math.";
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
    canonical: "/initiatives",
    languages: {
      "en": "/initiatives",
      // Commented languages are not yet supported, and therefore should not be uncommented
      // "es": "/es/initiatives",
      // "fr": "/fr/initiatives",
      // "ja": "/ja/initiatives",
    },
  },
};

export default function Layout({ children }) {
  return children;
};
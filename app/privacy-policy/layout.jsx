const url = "https://www.sistersinstem.net";
const title = "Our Privacy Policy";
const description = "Your privacy is as important to us as it is to you. That's why we tell you how we handle your data.";
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
    siteId: "1067297456",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({children}) {
  return children;
};
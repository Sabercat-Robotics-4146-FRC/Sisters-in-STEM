const url = "https://www.robobuffs.com";
const title = "Contact Us";
const description = "If you ever have any inquries, feel free to reach out to us! We typically respond in 3 - 5 business days.";
const locale = "en";
export const metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title: `${title} | Sabercat Robotics`,
    description: description,
    url: url,
    siteName: "Sabercat Robotics",
    images: [
      {
        url: "/assets/img/head-raw-large.png",
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
    title: `${title} | Sabercat Robotics`,
    description: description,
    images: [
      {
        url: "/assets/img/head-raw-large.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    siteId: "1067297456",
    creatorId: "1067297456",
  },
};

export default function Layout({children}) {
  return children;
};
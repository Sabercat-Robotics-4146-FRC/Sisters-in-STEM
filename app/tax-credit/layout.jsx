const url = "https://www.sabercatrobotics.com";
const title = "Tax Credit";
const description = "We are a 501(c)-3 organization. Tax Credit sets Arizona apart in education funding. Let's take advantage of it.";
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
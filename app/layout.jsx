import "/css/globals.css";
import { Fredoka, Poppins } from "next/font/google";
import Header from "/components/header";
import Footer from "/components/footer";

const url = "https://www.sistersinstem.net";
const title = "Sisters in STEM";
const description = "Sisters in STEM is an annual event that invites kids of all ages to learn about different sections of STEM.";
const locale = "en";
export const metadata = {
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
    canonical: "/",
    languages: {
      "en": "/",
      // Commented languages are not yet supported, and therefore should not be uncommented
      // "es": "/es",
      // "fr": "/fr",
      // "ja": "/ja",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PoppinsFont = Poppins({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const FredokaFont = Fredoka({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--header-font",
});
export default function RootLayout({children}) {
  return (
    <html className={`scroll-smooth selection:bg-pink-400/60 antialiased ${PoppinsFont.className} ${FredokaFont.variable}`} lang={locale}>
      <body className="text-lg leading-7 text-neutral-900 flex flex-col flex-wrap min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
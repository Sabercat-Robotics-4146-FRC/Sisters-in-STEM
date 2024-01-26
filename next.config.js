/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  i18n: {
    // "es", "fr", "ja"
    locales: ["en"],
    defaultLocale: "en",
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/about-us-1",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/blank",
        destination: "/archive/experiments",
        permanent: true,
      },
      {
        source: "/sis-archive",
        destination: "/archive/experiments",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/supporters",
        permanent: true,
      },
      {
        source: "/founders-%26-past-leaders",
        destination: "/leadership/past-leaders",
        permanent: true,
      },
      {
        source: "/cybersis",
        destination: "/initiatives/cybersis",
        permanent: true,
      },
      {
        source: "/our-initiatives",
        destination: "/initiatives",
        permanent: true,
      },
      {
        source: "/our-leadership",
        destination: "/leadership",
        permanent: true,
      },
      {
        source: "/our-founders",
        destination: "/leadership/past-leaders",
        permanent: true,
      },
      {
        source: "/our-support",
        destination: "/supporters",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig

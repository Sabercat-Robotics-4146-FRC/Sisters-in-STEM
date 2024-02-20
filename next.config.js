/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: process.env.NODE_ENV === "development" ? "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://docs.google.com/" : "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; child-src 'none'; object-src 'none'; img-src 'self' blob: data:; iframe-src https://docs.google.com;",
          },
        ],
      },
    ];
  },
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

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig

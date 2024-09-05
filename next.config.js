/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/about-us-1",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
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
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default config;

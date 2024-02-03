/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-custom-properties": {
      preserve: false,
    },
    "postcss-color-functional-notation": {},
  },
};

module.exports = config;
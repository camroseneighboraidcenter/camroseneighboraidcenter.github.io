// @ts-check
const { defineConfig } = require("astro/config");
const mdx = require("@astrojs/mdx");

/** @type {import('astro').AstroUserConfig} */
const config = {
  site: "https://camroseneighboraidcenter.ca",
  compressHTML: true,
  integrations: [mdx()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    optimizeDeps: {
      exclude: ["resvg-js"],
    },
    build: {
      cssMinify: true,
    },
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
    service: { entrypoint: "astro/assets/services/sharp" },
  },
};

module.exports = defineConfig(config);

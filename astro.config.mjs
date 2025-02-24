// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://camroseneighboraidcenter.ca", // Update this with your actual domain
  compressHTML: true,
  integrations: [mdx()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    build: {
      cssMinify: true,
    },
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});

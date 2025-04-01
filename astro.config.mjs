import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://camroseneighboraidcenter.github.io",
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
});

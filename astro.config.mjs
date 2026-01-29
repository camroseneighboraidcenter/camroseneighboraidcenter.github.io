import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://camroseneighboraidcenter.ca",
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    optimizeDeps: {
      exclude: ["resvg-js"],
    },
    build: {
      cssMinify: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});

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
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});

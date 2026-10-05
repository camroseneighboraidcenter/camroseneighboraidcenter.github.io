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
      rolldownOptions: {
        output: {
          minify: {
            compress: {
              dropConsole: true,
              dropDebugger: true,
            },
          },
        },
      },
    },
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});

import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import shikiTwoslash from "remark-shiki-twoslash";

// https://astro.build/config
export default defineConfig({
  site: "https://cowboy.codes",
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [
    sitemap(),
    preact(),
    tailwind(),
    mdx({
      syntaxHighlight: false,
      shikiConfig: { theme: "one-dark-pro" },
      remarkPlugins: [
        remarkToc,
        [shikiTwoslash.default, { themes: ["css-variables"] }],
      ],
    }),
  ],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});

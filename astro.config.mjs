import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import shikiTwoslash from "remark-shiki-twoslash";

if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
}

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

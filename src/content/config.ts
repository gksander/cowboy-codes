import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).optional().default([]),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),

    // Optional config for OG image
    ogConfig: z
      .object({
        colorMode: z.enum(["light", "dark"]).optional(),
        titleFontSize: z.number().optional(),
        featureImagePath: z.string().optional(), // relative to src/assets
        featureImageFullBleed: z.boolean().optional(),
        featureImageWidth: z.number().optional(), // default: 350
      })
      .optional(),
  }),
});

const externalPost = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string(),
    platform: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

export const collections = { blog, externalPost };

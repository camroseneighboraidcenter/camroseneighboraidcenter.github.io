/**
 * Content Collections Configuration
 * Defines the schema for all content collections.
 * This is the single source of truth for program data.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const programs = defineCollection({
  loader: glob({
    base: "./src/content/programs",
    pattern: "**/*.mdx",
    generateId: ({ entry }) => entry.replace(/\.(mdx|md)$/, ""),
  }),
  type: "content_layer",
  schema: ({ image }) =>
    z.object({
      // Core fields (required)
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),

      // Display options
      featured: z.boolean().default(true),
      order: z.number().default(0),

      // Optional metadata
      updatedDate: z.date().optional(),
    }),
});

export const collections = {
  programs,
};

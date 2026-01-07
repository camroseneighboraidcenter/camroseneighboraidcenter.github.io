/**
 * Content Collections Configuration
 * Defines the schema for all content collections.
 * This is the single source of truth for program data.
 */
import { defineCollection, z } from "astro:content";

const programs = defineCollection({
  type: "content",
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

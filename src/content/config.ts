import { defineCollection, z } from "astro:content";

const programs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updatedDate: z.date().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    requirements: z.array(z.string()).optional(),
    contact: z
      .object({
        email: z.string().email().optional(),
        phone: z.string().optional(),
        hours: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  programs,
};

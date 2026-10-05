/**
 * Content Collections Configuration
 * Defines the schema for all content collections.
 * This is the single source of truth for program data.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import type { SchemaContext } from "astro/content/config";

/**
 * A schedule entry: when/where a service runs.
 */
const scheduleItem = z.object({
  days: z.string(),
  hours: z.string().optional(),
  location: z.string().optional(),
  note: z.string().optional(),
});

/**
 * Ordered page sections. Rendered top-to-bottom by the program page template.
 * - full / bordered / grid: heading + markdown body
 * - services: heading + markdown-bodied cards
 * - schedule: heading + structured schedule data
 */
const section = z.discriminatedUnion("type", [
  z.object({
    type: z.enum(["full", "bordered", "grid"]),
    heading: z.string().optional(),
    body: z.string(),
  }),
  z.object({
    type: z.literal("services"),
    heading: z.string().optional(),
    cards: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      }),
    ),
  }),
  z.object({
    type: z.literal("schedule"),
    heading: z.string().optional(),
    sections: z.array(
      z.object({
        title: z.string(),
        items: z.array(scheduleItem),
      }),
    ),
  }),
]);

export type ProgramSection = z.infer<typeof section>;

/**
 * Shared sub-schemas for editable page data.
 */
const ctaButton = z.object({
  text: z.string(),
  href: z.string(),
  srText: z.string().optional(),
});

const ctaBlock = z.object({
  title: z.string(),
  description: z.string(),
  primaryCta: ctaButton,
  secondaryCta: ctaButton.optional(),
});

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  province: z.string(),
  postalCode: z.string(),
});

const programs = defineCollection({
  loader: glob({
    base: "./src/content/programs",
    pattern: "**/*.yaml",
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ""),
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

      // Page content
      sections: z.array(section).min(1),

      // Optional metadata
      updatedDate: z.date().optional(),
    }),
});

/**
 * Team members (board of directors and staff).
 * One YAML file per person; `group` selects which TeamGrid they appear in.
 */
const teamSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(["directors", "staff"]),
    order: z.number().default(0),
    bio: z.string().optional(),
    image: image().optional(),
  });

export type TeamMemberData = z.infer<ReturnType<typeof teamSchema>>;

const team = defineCollection({
  loader: glob({
    base: "./src/content/team",
    pattern: "**/*.yaml",
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ""),
  }),
  type: "content_layer",
  schema: teamSchema,
});

/**
 * Organization-wide data: contact info, social links, charity status.
 * Singleton-ish: src/content/site/org.yaml is the single source of truth.
 */
const siteSchema = z.object({
  contact: z.object({
    address: addressSchema,
    mailingAddress: addressSchema,
    phone: z.string(),
    fax: z.string(),
    email: z.string(),
    donationEmail: z.string(),
    hours: z.object({
      monday: z.string(),
      tuesday: z.string(),
      wednesday: z.string(),
      thursday: z.string(),
      friday: z.string(),
      saturday: z.string(),
      sunday: z.string(),
    }),
  }),
  social: z.array(
    z.object({
      platform: z.enum(["facebook", "instagram", "linkedin", "x", "youtube"]),
      url: z.string(),
      label: z.string(),
    }),
  ),
  charity: z.object({
    number: z.string(),
    craLink: z.string(),
    financialStatementsLink: z.string(),
  }),
});

export type SiteData = z.infer<typeof siteSchema>;

const site = defineCollection({
  loader: glob({
    base: "./src/content/site",
    pattern: "**/*.yaml",
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ""),
  }),
  type: "content_layer",
  schema: () => siteSchema,
});

/**
 * Editable copy for the static pages. One YAML file per page, discriminated
 * by the `page` field so each file gets its own validated shape.
 */
const pageSchema = ({ image }: SchemaContext) => {
  const hero = z.object({
    title: z.string(),
    image: image(),
    ctaText: z.string(),
    ctaLink: z.string(),
  });

  return z.discriminatedUnion("page", [
    z.object({
      page: z.literal("home"),
      description: z.string(),
      hero,
      whoWeAre: z.object({
        title: z.string(),
        content: z.string(),
        mottoIntro: z.string(),
        motto: z.string(),
      }),
      mission: z.object({ title: z.string(), content: z.string() }),
      featured: z.object({ title: z.string(), subtitle: z.string() }),
      cta: ctaBlock,
    }),
    z.object({
      page: z.literal("about"),
      description: z.string().optional(),
      hero,
      intro: z.string(),
      vision: z.object({ title: z.string(), content: z.string() }),
      values: z.object({
        title: z.string(),
        items: z.array(
          z.object({ title: z.string(), description: z.string() }),
        ),
      }),
      beliefs: z.object({
        title: z.string(),
        items: z.array(
          z.object({ text: z.string(), citation: z.string().optional() }),
        ),
      }),
      teamHeadings: z.object({ directors: z.string(), staff: z.string() }),
      cta: ctaBlock,
    }),
    z.object({
      page: z.literal("donate"),
      description: z.string().optional(),
      hero,
      intro: z.string(),
      methodsIntro: z.string(),
      methods: z.object({
        title: z.string(),
        items: z.array(z.object({ title: z.string(), body: z.string() })),
      }),
      cta: ctaBlock,
    }),
    z.object({
      page: z.literal("contact"),
      description: z.string(),
      hero,
      cta: ctaBlock,
    }),
    z.object({
      page: z.literal("programs"),
      title: z.string(),
      description: z.string(),
    }),
  ]);
};

export type PageData = z.infer<ReturnType<typeof pageSchema>>;

const pages = defineCollection({
  loader: glob({
    base: "./src/content/pages",
    pattern: "**/*.yaml",
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ""),
  }),
  type: "content_layer",
  schema: pageSchema,
});

export const collections = {
  programs,
  team,
  site,
  pages,
};

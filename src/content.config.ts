import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const songs = defineCollection({
  loader: glob({ base: "./src/content/songs", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      melody: z.string().optional(),
      author: z.string().optional(),
      from: z.string().optional(),
    }),
});

export const collections = { songs };

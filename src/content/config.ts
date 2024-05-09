// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      tags: z.array(z.string()),
      date: z.date(),
    }),
});

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      tags: z.array(z.string()),
      date: z.date(),
      author: z.string(),
      featured: z.boolean(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
  posts: postCollection,
};

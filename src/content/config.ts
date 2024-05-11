// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

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

const projectCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      tags: z.array(z.string()),
      date: z.string(),
      technologies: z.array(z.string()),
      links: z.object({
        github: z.string(),
        demo: z.string().optional(),
        website: z.string().optional(),
        article: z.string().optional(),
      }),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postCollection,
  projects: projectCollection,
};

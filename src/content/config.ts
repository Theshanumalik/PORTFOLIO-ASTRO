// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.array(z.object({ src: image(), alt: z.string() })),
      tags: z.array(z.string()),
      date: z.string(),
      technologies: z.array(z.string()),
      links: z.object({
        github: z.string(),
        demo: z.string().optional(),
        website: z.string().optional(),
        article: z.string().optional(),
      }),
      features: z.array(z.string()).optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
};

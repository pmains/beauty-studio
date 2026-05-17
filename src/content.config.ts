import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    serviceCategory: z.string(),
    city: z.string(),
    description: z.string(),
    priceRange: z.string(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
    pricing: z.array(z.object({
      name: z.string(),
      price: z.number(),
    })),
    keywords: z.array(z.string()),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    services: z.array(z.string()),
    keywords: z.array(z.string()),
  }),
});

export const collections = { services, locations };

import { defineCollection, z } from 'astro:content'

export const collections = {
  books: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      author: z.string(),
      status: z.enum(['Read', 'Currently Reading']),
      year: z.number(),
    }),
  }),
}

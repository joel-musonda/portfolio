import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.path(),
      date: s.isodate(),
      summary: s.string().max(300),
      published: s.boolean().default(true),
      code: s.mdx(), // Must be s.mdx() to compile markdown into an executable JS module string
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split('/').pop(),
    })),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash].[ext]',
    clean: true,
  },
  collections: { posts },
})
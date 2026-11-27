import { defineConfig, defineCollection, s } from 'velite'
import rehypePrettyCode from 'rehype-pretty-code'

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
      metadata: s.metadata(),
      code: s.mdx(),
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
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode as any,
        {
          theme: 'one-dark-pro',
          keepBackground: false, // lets your slate/dark container background show cleanly
        },
      ],
    ],
  },
  collections: { posts },
})
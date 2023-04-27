export type PostFrontMatter = {
  title: string
  date: string
  lastmod?: string
  draft?: boolean
  tags: string[]
  categories: string[]
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  canonicalUrl?: string
  slug: string
  fileName: string
}

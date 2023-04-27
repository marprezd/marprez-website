import { generateSitemap } from '../utils/generate-sitemap.mjs'
import siteMetadata from '../src/data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const sitemap = () => {
  generateSitemap(siteMetadata.siteUrl, allBlogs)
  console.log('Sitemap generated...')
}
export default sitemap

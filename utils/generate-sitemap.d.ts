import { MDXDocument } from './contentlayer.js'
import 'contentlayer/core'

declare function generateSitemap(siteUrl: string, allContents: MDXDocument[]): Promise<void>

export { generateSitemap }

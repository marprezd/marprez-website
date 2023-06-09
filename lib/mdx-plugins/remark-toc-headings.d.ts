import { VFile } from 'vfile'
import { Parent } from 'unist'

declare type Toc = {
  value: string
  depth: number
  url: string
}[]
declare function remarkTocHeadings(): (tree: Parent, file: VFile) => void
/**
 * Passes markdown file through remark to extract TOC headings
 *
 * @param {string} markdown
 * @return {*}  {Promise<Toc>}
 */
declare function extractTocHeadings(markdown: string): Promise<Toc>

export { Toc, extractTocHeadings, remarkTocHeadings }

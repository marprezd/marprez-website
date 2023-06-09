import { Parent } from 'unist'
import { VFile } from 'vfile'

declare function remarkExtractFrontmatter(): (tree: Parent, file: VFile) => void

export { remarkExtractFrontmatter }

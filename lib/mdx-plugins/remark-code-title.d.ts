import { Parent } from 'unist'

declare function remarkCodeTitles(): (
  tree: Parent & {
    lang?: string
  }
) => void

export { remarkCodeTitles }

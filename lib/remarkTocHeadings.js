import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import GithubSlugger from 'github-slugger'

const slugger = new GithubSlugger()

function remarkTocHeadings() {
  return (tree, file) => {
    const toc = []
    visit(tree, 'heading', (node) => {
      const textContent = toString(node)
      toc.push({
        value: textContent,
        url: '#' + slugger.slug(textContent),
        depth: node.depth,
      })
    })
    file.data.toc = toc
  }
}
async function extractTocHeadings(markdown) {
  const vfile = await remark().use(remarkTocHeadings).process(markdown)
  return vfile.data.toc
}

export { extractTocHeadings, remarkTocHeadings }

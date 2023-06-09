import { Parent, Literal, Node } from 'unist'

declare type ImageNode = Parent & {
  url: string
  alt: string
  name: string
  attributes: (Literal & {
    name: string
  })[]
}
declare function remarkImgToJsx(): (tree: Node) => void

export { ImageNode, remarkImgToJsx }

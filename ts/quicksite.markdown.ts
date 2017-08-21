/**
 * This file contains the code to transform markdown into html
 */
import * as plugins from './quicksite.plugins'

// interfaces
import { IQuicksiteFile } from './quicksite.interfaces'

export let markdownToHtml = async (quicksiteFiles: IQuicksiteFile[]) => {
  for (let quicksiteFile of quicksiteFiles) {
    quicksiteFile.html = plugins.marked(quicksiteFile.markdown)
    quicksiteFile.html = quicksiteFile.html.replace(
      /href\s?=\s?".*"/g,
      (match, offset, wholeString) => {
        return match.replace(/\.md/, '.html')
      }
    )
  }
  return quicksiteFiles
}

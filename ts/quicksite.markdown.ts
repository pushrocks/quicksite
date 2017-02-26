import * as plugins from './quicksite.plugins'

// interfaces
import { IQuicksiteFile } from './quicksite.interfaces' 

export let markdownToHtml = async(quicksiteFiles: IQuicksiteFile[]) => {
  for (let quicksiteFile of quicksiteFiles) {
    quicksiteFile.html = plugins.marked(quicksiteFile.markdown)
  }
  return quicksiteFiles
}

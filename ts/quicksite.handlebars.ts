import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

import { IQuicksiteFile } from './quicksite.interfaces'

export let handlebarsToMarkdown = async (quicksiteFilesArg: IQuicksiteFile[]): Promise<IQuicksiteFile[]> => {
  for (let quickSiteFile of quicksiteFilesArg) {
    let template = plugins.handlebars.compile(quickSiteFile.handlebars)
    quickSiteFile.markdown = template({})
  }
  return quicksiteFilesArg
}

import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'
import { getProviderObject } from './quicksite.providers'

import { IQuicksiteFile } from './quicksite.interfaces'

export let handlebarsToMarkdown = async (quicksiteFilesArg: IQuicksiteFile[]): Promise<IQuicksiteFile[]> => {
  let providerObject = await getProviderObject()
  for (let quickSiteFile of quicksiteFilesArg) {
    let template = plugins.handlebars.compile(quickSiteFile.handlebars)
    quickSiteFile.markdown = template({
      providers: providerObject
    })
  }
  return quicksiteFilesArg
}

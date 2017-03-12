import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

import { IQuicksiteFile, IFooterItem } from './quicksite.interfaces'



export let buildFooter = async (quicksiteFilesArrayArg: IQuicksiteFile[]): Promise<IQuicksiteFile[]> => {
  let footerMarkdownArray: string[] = plugins.smartfile.fs.toStringSync(plugins.path.join(paths.docsDir,'00footer.md'))
    .split('///', 3)
  let footerItems: IFooterItem[] = []
  for (let footerMarkdown of footerMarkdownArray) {
    footerItems.push({
      html: plugins.marked(footerMarkdown)
    })
  }

  for (let quicksiteFile of quicksiteFilesArrayArg) {
    quicksiteFile.footerItems = footerItems
  }
  return quicksiteFilesArrayArg
}

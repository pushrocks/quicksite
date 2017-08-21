import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

import { IQuicksiteFile, IFooterItem } from './quicksite.interfaces'

export let buildFooter = async (quicksiteFilesArrayArg: IQuicksiteFile[]): Promise<IQuicksiteFile[]> => {
  // set up variables
  let footerPath = plugins.path.join(paths.docsDir, '00footer.md')
  let footerMarkdownArray: string[]

  // make sure it exists
  if (plugins.smartfile.fs.fileExistsSync(footerPath)) {
    footerMarkdownArray = plugins.smartfile.fs.toStringSync(footerPath)
      .split('///', 3)
  } else {
    footerMarkdownArray = []
  }
  let footerItems: IFooterItem[] = []
  for (let footerMarkdown of footerMarkdownArray) {
    footerItems.push({
      html: plugins.marked(footerMarkdown)
    })
  }

  // add it to all files
  for (let quicksiteFile of quicksiteFilesArrayArg) {
    quicksiteFile.footerItems = footerItems
  }
  return quicksiteFilesArrayArg
}

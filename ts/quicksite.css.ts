import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

// interfaces
import { IQuicksiteFile } from './quicksite.interfaces'

export let addCss = async (quicksiteFilesArg: IQuicksiteFile[]) => {
  let quickSmartsass = new plugins.smartsass.Smartsass({
    entryFilePath: plugins.path.join(paths.assetDir, 'scss/main.scss'),
    includePaths: plugins.bourbon.includePaths
  })
  let smartsassResult = await quickSmartsass.render()
  let css = smartsassResult.css.toString()
  for (let quicksiteFile of quicksiteFilesArg) {
    quicksiteFile.css = css
  }
  return quicksiteFilesArg
}

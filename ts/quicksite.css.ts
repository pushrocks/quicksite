import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

// interfaces
import { IQuicksiteFile } from './quicksite.interfaces'

export let addCss = async (quicksiteFilesArg: IQuicksiteFile[]) => {
  let css = plugins.smartfile.fs.toStringSync(plugins.path.join(paths.assetDir, 'style.css'))
  for (let quicksiteFile of quicksiteFilesArg) {
    quicksiteFile.css = css
  }
  return quicksiteFilesArg
}

import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

import { IQuicksiteFile } from './quicksite.interfaces'

// interfaces
import { IMenuItem } from './quicksite.interfaces'

/**
 * traverses over the read quicksiteFile and creates menuData
 */
export let buildMenu = async (quicksiteFilesArg: IQuicksiteFile[]) => {
  let menuItems: IMenuItem[] = []
  for (let quicksiteFile of quicksiteFilesArg) {
    let menuName: string = (() => {
      if (quicksiteFile.data.name) {
        return quicksiteFile.data.name
      } else {
        return quicksiteFile.filePath.replace(/.html/, '')
      }
    })()
    menuItems.push({
      name: menuName,
      link: quicksiteFile.filePath
    })
  }
  for (let quicksiteFile of quicksiteFilesArg) {
    quicksiteFile.menuItems = menuItems
  }
  return quicksiteFilesArg
}
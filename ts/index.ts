import * as cli from './quicksite.cli'
cli.run()

import * as quicksiteFs from './quicksite.fs'
import * as quicksiteHandlears from './quicksite.handlebars'
import * as quicksiteMenu from './quicksite.menu'
import * as quicksiteFooter from './quicksite.footer'

// interfaces
import { IQuicksiteFile } from './quicksite.interfaces'
export {
  IQuicksiteFile
}

/**
 * gets files without processing them
 */
export let getFilesArrayWithProviderData = async () => {
  return await quicksiteFs.readHandlebars()
    .then(quicksiteHandlears.handlebarsToMarkdown)
    .then(quicksiteMenu.buildMenu)
    .then(quicksiteFooter.buildFooter)
}

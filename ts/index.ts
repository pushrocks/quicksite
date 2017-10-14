import * as cli from './quicksite.cli'
cli.run()

import * as quicksiteFs from './quicksite.fs'
import * as quicksiteHandlears from './quicksite.handlebars'

// interfaces
import { IQuicksiteFile } from './quicksite.interfaces'

/**
 * gets files without processing them
 */
export let getFilesArrayWithProviderData = async () => {
  return await quicksiteFs.readHandlebars()
    .then(quicksiteHandlears.handlebarsToMarkdown)
}

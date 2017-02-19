import * as plugins from './quicksite.plugins'
import * as quicksiteFs from './quicksite.fs'

let quicksiteCli = new plugins.smartcli.Smartcli()

export let run = () => {
  quicksiteCli.standardTask().then(argv => {
    quicksiteFs.readMarkdown()
  })
  quicksiteCli.startParse()
}
import * as plugins from './quicksite.plugins'

// import modules
import * as quicksiteFs from './quicksite.fs'
import * as quicksiteFooter from './quicksite.footer'
import * as quicksiteCss from './quicksite.css'
import * as quicksiteHandlebars from './quicksite.handlebars'
import * as quicksiteMenu from './quicksite.menu'
import * as quicksiteMarkdown from './quicksite.markdown'

let quicksiteCli = new plugins.smartcli.Smartcli()

export let run = () => {
  quicksiteCli.standardTask().then(argv => {
    quicksiteFs.readHandlebars()
      .then(quicksiteCss.addCss)
      .then(quicksiteMenu.buildMenu)
      .then(quicksiteFooter.buildFooter)
      .then(quicksiteHandlebars.handlebarsToMarkdown)
      .then(quicksiteMarkdown.markdownToHtml)
      .then(quicksiteFs.writeHtml)
      .catch(err => {
        console.log(err)
      })
  })
  quicksiteCli.startParse()
}

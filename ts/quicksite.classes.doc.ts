import * as plugins from './quicksite.plugins'
import { DocsMenu } from './quicksite.classes.docsmenu'

export class Doc {
  data: any // parsed, any meta data that the file has
  filePath: string // the original filePath of the markdown file
  providers: any
  originalContent: string // the whole string with frontmatter
  rawContent: string // the original file content, a mixture of markdown and handlebars
  markdown: string // the mardown string from the file
  menu: DocsMenu // the menu that is to be attached to every final html page

  constructor (originalContentArg: string) {
    this.originalContent = originalContentArg
    this.evaluateOriginal()
  }

  evaluateOriginal () {
    let parsedOriginal = plugins.smartfm.parse(this.rawContent)
    this.rawContent = parsedOriginal.content
    this.data = parsedOriginal.data
  }

  /**
   * renders the rawContent with handlebars
   */
  async render () {
    let template = plugins.handlebars.compile(this.rawContent)
    return template(this.data)
  }
}

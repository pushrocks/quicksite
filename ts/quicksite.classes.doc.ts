import * as plugins from './quicksite.plugins'
import { DocsMenu } from './quicksite.classes.docsmenu'
import { IMenuItem } from './quicksite.classes.docsmenu'

import { exec } from 'child_process'

export interface IMetaInformation {
  title: string
  description: string
  wordcount: number,
  rank: number
}

export class Doc {
  filePath: string // the original filePath of the markdown file
  parsedPath: plugins.path.ParsedPath
  menuItem: IMenuItem
  providers: any = {}

  // properties that are presented at instance creation
  private originalString: string // the whole string with frontmatter
  private renderData: any = {} // data that is needed to render the originalContent

  //  properties that are rendered with handlebars
  renderedString: string // the original content rendered (no handlebars anymore)

  // split the rendered string into
  rawContent: string
  rawFrontmatter: any = {}

  // meta information about the doc
  metaInformation: IMetaInformation = {
    title: null,
    description: null,
    wordcount: null,
    rank: null
  }

  /**
   * creates a new doc from a string
   * @param originalStringArg
   */
  constructor(originalStringArg: string, renderDataArg) {
    this.originalString = originalStringArg
    this.renderData = renderDataArg
  }

  static fromFilePath (filePathArg) {
    let localDoc = new Doc(
      plugins.smartfile.fs.toStringSync(filePathArg),
      {}
    )
    localDoc.parsedPath = plugins.path.parse(filePathArg)
    return localDoc
  }

  /**
   * updates & renders the rawContent with handlebars
   */
  async update () {
    // render all the things
    let template = plugins.handlebars.compile(this.originalString)
    this.renderedString = template(this.renderData)

    // evaluate the doc with rendered data in place
    await this.evaluateDoc()
  }

  /**
   * evaluates the doc (the string the doc is created from)
   * and then parses things like frontmatter, metainformation etc.
   */
  private evaluateDoc () {
    // separate frontmatter from content
    let parsedOriginal = plugins.smartfm.parse(this.renderedString)
    this.rawContent = parsedOriginal.content
    this.rawFrontmatter = parsedOriginal.data

    // get metaInformation from this Doc
    this.metaInformation.title = this.getMetadataTitle()
    this.metaInformation.description = this.getMetadataDescription()
    this.metaInformation.wordcount = this.getMetadataWordcount()
    this.metaInformation.rank = this.getMetadataRank()
  }

  // ===============================
  // helpers for metadata extraction
  // ===============================

  private getMetadataTitle (): string {
    if (this.rawFrontmatter.title) {
      return this.rawFrontmatter.title
    } else {
      let execResult = /#\s?([\S\s]*)\n/.exec(this.rawContent)
      if (execResult) {
        return execResult[ 1 ]
      } else {
        return 'no title found'
      }
    }
  }

  private getMetadataDescription (): string {
    if (this.rawFrontmatter.description) {
      return this.rawFrontmatter.description
    } else {
      let execResult = /#\s?[\S\s]*?\n(?!#)([\S\s]*)\n/.exec(this.rawContent)
      if (execResult && execResult.length === 2) {
        return execResult[ 1 ]
      } else {
        return 'no description found'
      }
    }
  }

  private getMetadataWordcount (): number {
    return this.rawContent.split(' ').length
  }

  /**
   * get the metadata rank (important for ranking the Doc in the menu)
   */
  private getMetadataRank (): number {
    return 0 // TODO:
  }
}
